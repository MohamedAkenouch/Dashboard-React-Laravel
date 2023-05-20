<?php


namespace Modules\Notification\Contracts;

use Modules\Notification\Implementations\TicketNotifier;
use Modules\Ticket\Entities\Ticket;

interface NotificationMaker
{

    public static function make(Notifier $notifier, Ticket $ticket);
    public function sendNotifications();
}
