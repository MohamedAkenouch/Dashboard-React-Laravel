<?php


namespace Modules\Notification\Notifiers;


use Illuminate\Support\Facades\Auth;
use JetBrains\PhpStorm\ArrayShape;
use Modules\Notification\Implementations;
use Modules\Notification\Implementations\TicketNotifier;

class TicketCreateNotifier extends TicketNotifier
{

    #[ArrayShape(['title' => "string", 'body' => "string"])]
    public function generateMessage(): array|bool
    {
        $titles = [
            'admin' => "A Client Created a Ticket",
            'dispatcher' => "A Client Created a Ticket",
            'client' => "An Admin Created a Ticket",
        ];
        $messages = [
            'admin' => "A Client Created a Ticket and it's ready to be assigned",
            'dispatcher' => " A Client Created a Ticket and it's ready to be assigned",
            'client' => " an Admin created a Ticket for you",
        ];

//        $roles = $this->user->roles->first()->name;
        $roles = $this->user->id != Auth::id() ? $this->user->roles->first()->name : null;
        return isset($titles[$roles]) ? [
            'title' => $titles[$roles],
            'body' => $messages[$roles]
        ] : false;
    }
}
