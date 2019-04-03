<?php

namespace Squeevee\Ajax\Listener;

use Illuminate\Events\Dispatcher;

use Flarum\Post\Event\Posted as PostPosted;
use Flarum\Post\Event\Revised as PostRevised;
use Flarum\Post\Event\Deleted as PostDeleted;

use Flarum\Discussion\Event\Started as DiscussionStarted;
use Flarum\Discussion\Event\Deleted as DiscussionDeleted;
use Flarum\Discussion\Event\Renamed as DiscussionRenamed;

use Flarum\User\Event\LoggedIn as UserLoggedIn;
use Flarum\User\Event\LoggedOut as UserLoggedOut;

use Squeevee\Ajax\Diff\DiffData;
use Carbon\Carbon;


class ChangeListener
{
    private $data;
    private $time;

    public function __construct(DiffData $data)
    {
        $this->data = $data;
        $this->time = Carbon::now('UTC');
    }

    public function subscribe(Dispatcher $events)
    {
        $events->listen(PostPosted::class, [$this, 'onPostPosted']);
        $events->listen(PostRevised::class, [$this, 'onPostRevised']);
        $events->listen(PostDeleted::class, [$this, 'onPostDeleted']);
        $events->listen(DiscussionStarted::class, [$this, 'onDiscussionStarted']);
        $events->listen(DiscussionDeleted::class, [$this, 'onDiscussionDeleted']);
        $events->listen(UserLoggedIn::class, [$this, 'onUserLoggedIn']);
        $events->listen(UserLoggedOut::class, [$this, 'onUserLoggedOut']);
    }


    public function onPostPosted(PostPosted $event)   { $this->handlePost($event->post, 'posted'); }
    public function onPostRevised(PostRevised $event) { $this->handlePost($event->post, 'revised'); }
    public function onPostDeleted(PostDeleted $event) { $this->handlePost($event->post, 'deleted'); }

    public function onDiscussionStarted(DiscussionStarted $event) { $this->handleDiscussion($event->discussion, 'started'); }
    public function onDiscussionDeleted(DiscussionDeleted $event) { $this->handleDiscussion($event->discussion, 'started'); }
    public function onDiscussionRenamed(DiscussionRenamed $event)
    { 
        $this->handleDiscussion($event->discussion, 'renamed', [ 'oldTitle' => $event->oldTitle ]);
    }

    public function onUserLoggedIn(UserLoggedIn $event)   { $this->handleUser($event->user, 'loggedIn'); }
    public function onUserLoggedOut(UserLoggedOut $event) { $this->handleUser($event->user, 'loggedOut'); }


    private function handlePost($post, $verb, $extraParams = null)
    {
        $this->handle($post->id, 'post', $verb,
            [
                'discussionId' => $post->discussion->id,
                'postId' => $post->id,
                'user' => $post->user->id
            ],
            $extraParams);
    }

    private function handleDiscussion($discussion, $verb, $extraParams = null)
    {
        $this->handle($discussion->id, 'discussion', $verb,
            [
                'id' => $discussion->id,
                'user' => $discussion->user->id,
                'title' => $discussion->title
            ],
            $extraParams);
    }

    private function handleUser($user, $verb, $extraParams = null)
    {
        $this->handle($user->id, 'user', $verb, 
            [
                'id' => $user->id
            ],
            $extraParams);
    }

    private function handle($modelId, $noun, $verb, $baseParams, $extraParams)
    {
        if ($extraParams)
            $params = array_merge_recursive($baseParams, $extraParams);
        else
            $params = $baseParams;
        
        $this->data->writeDiff($this->time,
            $noun,
            $modelId,
            [
                $verb => [$params]
            ]);
        $this->data->autoPrune();
    }
}