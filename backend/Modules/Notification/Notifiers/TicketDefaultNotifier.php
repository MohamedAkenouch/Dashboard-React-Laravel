<?php


namespace Modules\Notification\Notifiers;


use JetBrains\PhpStorm\ArrayShape;
use Modules\Notification\Implementations\TicketNotifier;

class TicketDefaultNotifier extends TicketNotifier
{

    #[ArrayShape(['title' => "string", 'body' => "string"])]
    public function generateMessage(): array|bool
    {
        $titles = [
            'admin' => "ticket changed !",
            'technical' => "ticket changed !",
            'client' => "ticket changed !",
        ];
        $messages = [
            'admin' => "The ticket was changed successfully",
            'technical' => "The ticket was changed successfully",
            'client' => "The ticket was changed successfully",
        ];

        $roles = $this->user->roles->first()->name;
        return isset($titles[$roles]) ? [
            'title' => $titles[$roles],
            'body' => $messages[$roles]
        ] : false;
    }
}
