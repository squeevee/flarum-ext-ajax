<?php

namespace Squeevee\Ajax\Controller;

use Psr\Http\Server\RequestHandlerInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Message\ResponseInterface;
use Zend\Diactoros\Response\JsonResponse;

use Squeevee\Ajax\Diff\DiffMaker;
use Squeevee\Ajax\Diff\Diff;

use Carbon\Carbon;

class AjaxController implements RequestHandlerInterface
{
    private $diff;

    public function __construct(DiffMaker $diff)
    {
        $this->diff = $diff;
    }

    public function handle(ServerRequestInterface $request) : ResponseInterface
    {
        $since = Carbon::parse($request->getParsedBody()['since']);
        $actor = $request->getAttribute('actor');

        $diff = $this->diff->make($since, $actor, $request->getParsedBody());

        return new JsonResponse($diff->aggregate());
    }
}