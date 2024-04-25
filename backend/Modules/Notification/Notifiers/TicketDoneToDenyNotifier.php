<?php


namespace Modules\Notification\Notifiers;


use JetBrains\PhpStorm\ArrayShape;
use Modules\Notification\Implementations;
use Modules\Notification\Implementations\TicketNotifier;

class TicketDoneToDenyNotifier extends TicketNotifier
{

    #[ArrayShape(['title' => "string", 'body' => "string"])]
    public function generateMessage(): array|bool
    {
        $titles = [
            'admin' => "Deny Ticket",
            'dispatcher' => "Deny Ticket",
            'technical' => "Deny Ticket",
        ];
        $messages = [
            'admin' => "The Ticket is denied by " . $this->ticket->user->first_name . ' ' . $this->ticket->user->middle_name . ' ' . $this->ticket->user->last_name,
            'dispatcher' => "The Ticket is denied by " . $this->ticket->user->first_name . ' ' . $this->ticket->user->middle_name . ' ' . $this->ticket->user->last_name,
            'technical' => "The Ticket is denied by " . $this->ticket->user->first_name . ' ' . $this->ticket->user->middle_name . ' ' . $this->ticket->user->last_name,
        ];

        $roles = $this->user->roles->first()->name;
        return isset($titles[$roles]) ? [
            'title' => $titles[$roles],
            'body' => $messages[$roles]
        ] : false;
    }
}
