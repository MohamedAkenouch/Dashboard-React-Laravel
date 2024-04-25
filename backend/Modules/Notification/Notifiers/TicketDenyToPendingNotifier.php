<?php


namespace Modules\Notification\Notifiers;


use JetBrains\PhpStorm\ArrayShape;
use Modules\Notification\Implementations;
use Modules\Notification\Implementations\TicketNotifier;

class TicketDenyToPendingNotifier extends TicketNotifier
{

    #[ArrayShape(['title' => "string", 'body' => "string"])]
    public function generateMessage(): array|bool
    {
        $titles = [
            'client' => "We are Sorry about This service",
        ];

        $messages = [
            'client' => "The ticket is moving to be Resolved",
        ];

        $roles = $this->user->roles->first()->name;
        return isset($titles[$roles]) ? [
            'title' => $titles[$roles],
            'body' => $messages[$roles]
        ] : false;
    }
}
