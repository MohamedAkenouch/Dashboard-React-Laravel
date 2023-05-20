<?php


namespace Modules\Notification\Notifiers;


use Illuminate\Support\Facades\Auth;
use JetBrains\PhpStorm\ArrayShape;
use Modules\Notification\Implementations;
use Modules\Notification\Implementations\TicketNotifier;

class TicketCommentNotifier extends TicketNotifier
{

    #[ArrayShape(['title' => "string", 'body' => "string"])]
    public function generateMessage(): array|bool
    {
        $sender = Auth::user();

        $sender_name = $sender->first_name . ' ' .$sender->middle_name . ' '.$sender->last_name;
        $titles = [
            'admin' => "Add Comment",
            'dispatcher' => "Add Comment",
            'technical' => "Add Comment",
            'client' => "Add Comment"
        ];
        $messages = [
            'admin' =>  $sender_name . " commented to ticket",
            'dispatcher' => $sender_name . " commented to ticket",
            'technical' => $sender_name . " commented to ticket",
            'client' => $sender_name . " commented to ticket" ,
        ];

        $roles = $this->user->id != Auth::id() ? $this->user->roles->first()->name : null;
        return isset($titles[$roles]) ? [
            'title' => $titles[$roles],
            'body' => $messages[$roles]
        ] : false;
    }
}
