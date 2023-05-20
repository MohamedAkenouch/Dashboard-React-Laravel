<?php


namespace Modules\Notification\Notifiers;


use JetBrains\PhpStorm\ArrayShape;
use Modules\Notification\Implementations;
use Modules\Notification\Implementations\TicketNotifier;

class TicketReportNotifier extends TicketNotifier
{
    private $type;
    public function __construct($type)
    {
        $this->type = $type;
    }

    #[ArrayShape(['title' => "string", 'body' => "string"])]
    public function generateMessage(): array|bool
    {
        $in_out = $this->type == 'checkout' ? 'out' : 'in';

        $titles = [
            'admin' => "Technical Checked {$in_out}",
            'dispatcher' => "Technical Checked {$in_out}",
            'client' => "Technical Checked {$in_out}",
        ];

        $messages = $this->type == 'checkout' ? [
            'admin' => "technical finished working on this session, and reported",
            'dispatcher' => "technical finished working on this session, and reported",
            'client' => "technical finished working on this session, and reported",
        ] : [
            'admin' => "technical started a new session on the ticket",
            'dispatcher' => "technical started a new session on the ticket",
            'client' => "technical started a new session on the ticket",
        ];

        $roles = $this->user->roles->first()->name;
        return isset($titles[$roles]) ? [
            'title' => $titles[$roles],
            'body' => $messages[$roles]
        ] : false;
    }
}
