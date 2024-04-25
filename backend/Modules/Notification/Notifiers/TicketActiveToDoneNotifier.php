<?php


namespace Modules\Notification\Notifiers;


use JetBrains\PhpStorm\ArrayShape;
use Modules\Notification\Implementations;
use Modules\Notification\Implementations\TicketNotifier;

class TicketActiveToDoneNotifier extends TicketNotifier
{

    #[ArrayShape(['title' => "string", 'body' => "string"])]
    public function generateMessage(): array|bool
    {
        $titles = [
            'admin' => "Done Ticket",
            'dispatcher' => "Done Ticket",
            'client' => "Done Ticket",
        ];
        $messages = [
            'admin' => "Ticket is Done by Technical Team",
            'dispatcher' => "Ticket is Done by Technical Team",
            'client' => "Ticket is Done by Technical Team",
        ];

        $roles = $this->user->roles->first()->name;
        return isset($titles[$roles]) ? [
            'title' => $titles[$roles],
            'body' => $messages[$roles]
        ] : false;
    }
}
