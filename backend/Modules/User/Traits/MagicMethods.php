<?php


namespace Modules\User\Traits;


trait MagicMethods
{
    public function __get(string $name)
    {
        return $this->$name ?? null;
    }

    public function __set(string $name, $value)
    {
        $this->$name = $value;
    }

    public function __isset(string $name)
    {
        return isset($this->$name);
    }
}
