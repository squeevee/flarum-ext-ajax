<?php

namespace Squeevee\Ajax\Listener;

use Flarum\Api\Event\Serializing;

use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Api\Serializer\UserSerializer;

class SerializingListener
{
    public function subscribe(Dispatcher $events)
    {
        $events->listen(Serializing::class, [$this, 'onSerializing']);
    }

    public function onSerializing(Serializing $event)
    {
        if ($event->isSerializer(ForumSerializer::class))
        {
            $event->attributes['squeevee-feddle'] = [
                'activityPubIds' => $this->getForumActivityPubIds(),
                'activityPubInfo' => $this->getActivityPubInfoPage()
            ];
        }
        else if ($event->isSerializer(UserSerializer::class))
        {
            $event->attributes['squeevee-feddle'] = [
                'activityPubIds' => $this->getForumActivityPubIds(),
                'activityPubInfo' => $this->getActivityPubInfoPage()
            ];
        }
    }
}