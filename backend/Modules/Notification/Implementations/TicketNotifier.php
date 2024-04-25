<?php


namespace Modules\Notification\Implementations;


use Illuminate\Database\Eloquent\Model;
use Modules\Notification\Contracts\Notifier;
use Modules\Notification\NotificationSender;
use Modules\Ticket\Entities\Ticket;
use Modules\User\Entities\User;

abstract class TicketNotifier implements Notifier
{

    protected $ticket;
    protected $user;
    protected $pointer;

    abstract public  function generateMessage(): array|bool;


    public function setPointer($pointer)
    {
        $this->pointer = $pointer;
    }

    public function sendNotification(User $user, Ticket $ticket)
    {
        $this->ticket = $ticket;
        $this->user = $user;

        if($message = $this->generateMessage())
        {
            NotificationSender::send(
                $this->user,
                $message,
                Ticket::class,
                $this->ticket->id,
                $this->pointer ? get_class($this->pointer) : Ticket::class,
                $this->pointer ? $this->pointer->id : $this->ticket->id
            );
        }
    }
}
