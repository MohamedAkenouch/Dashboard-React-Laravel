<?php


namespace Modules\Notification\Contracts;

use Modules\Ticket\Entities\Ticket;
use Modules\User\Entities\User;

interface Notifier
{
    public  function generateMessage();
    public function setPointer($pointer);
    public function sendNotification(User $user, Ticket $ticket);
}
