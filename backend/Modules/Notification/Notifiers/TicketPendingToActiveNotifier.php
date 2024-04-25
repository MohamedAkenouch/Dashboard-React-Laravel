<?php


namespace Modules\Notification\Notifiers;


use JetBrains\PhpStorm\ArrayShape;
use Modules\Notification\Implementations;
use Modules\Notification\Implementations\TicketNotifier;

class TicketPendingToActiveNotifier extends TicketNotifier
{

    #[ArrayShape(['title' => "string", 'body' => "string"])]
    public function generateMessage(): array|bool
    {
        $titles = [
            'technical' => "Assign Ticket",
            'client' => "Assign Ticket",
        ];
        $messages = [
            'technical' => "Assign new ticket",
            'client' => "The ticket is Assigned to technical team",
        ];

        $roles = $this->user->roles->first()->name;
        return isset($titles[$roles]) ? [
            'title' => $titles[$roles],
            'body' => $messages[$roles]
        ] : false;
    }

}
