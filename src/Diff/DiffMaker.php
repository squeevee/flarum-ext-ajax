<?php

namespace Squeevee\Ajax\Diff;

class DiffMaker
{
    private $data;

    public function __construct(DiffData $data)
    {
        $this->data = $data;
    }

    public function make($since, $actor, $params = null)
    {
        return new Diff($this->data, $since, $actor, $params);
    }
}