<?php


namespace Modules\Notification\Notifiers;


use JetBrains\PhpStorm\ArrayShape;
use Modules\Notification\Implementations;
use Modules\Notification\Implementations\TicketNotifier;

class TicketDoneToApproveNotifier extends TicketNotifier
{
    #[ArrayShape(['title' => "string", 'body' => "string"])]
    public function generateMessage(): array|bool
    {
        $titles = [
            'admin' => "Approve Ticket",
            'dispatcher' => "Approve Ticket",
            'technical' => "Approve Ticket",
        ];

        $messages = [
            'admin' => "The Ticket is approve by " . $this->ticket->user->first_name . ' ' . $this->ticket->user->middle_name . ' ' . $this->ticket->user->last_name,
            'dispatcher' => "The Ticket is approve by " . $this->ticket->user->first_name . ' ' . $this->ticket->user->middle_name . ' ' . $this->ticket->user->last_name,
            'technical' => "The Ticket is approve by " . $this->ticket->user->first_name . ' ' . $this->ticket->user->middle_name . ' ' . $this->ticket->user->last_name,
        ];

        $roles = $this->user->roles->first()->name;
        return isset($titles[$roles]) ? [
            'title' => $titles[$roles],
            'body' => $messages[$roles]
        ] : false;
    }
}
