<?php


namespace Modules\Notification\Notifiers;


use JetBrains\PhpStorm\ArrayShape;
use Modules\Notification\Implementations;
use Modules\Notification\Implementations\TicketNotifier;

class TicketDenyToActiveNotifier extends TicketNotifier
{

    #[ArrayShape(['title' => "string", 'body' => "string"])]
    public function generateMessage(): array|bool
    {
        $titles = [
            'admin' => "test admin",
            'dispatcher' => "test admin",
            'technical' => "test technical",
            'client' => "test  user",
        ];
        $messages = [
            'admin' => "test admin",
            'dispatcher' => "test admin",
            'technical' => "test technical",
            'client' => "test  user",
        ];

        $roles = $this->user->roles->first()->name;
        return isset($titles[$roles]) ? [
            'title' => $titles[$roles],
            'body' => $messages[$roles]
        ] : false;
    }
}
