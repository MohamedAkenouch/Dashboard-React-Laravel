<?php


namespace Modules\Notification\Makers;


use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use Modules\Notification\Contracts\NotificationMaker;
use Modules\Notification\Contracts\Notifier;
use Modules\Ticket\Entities\Ticket;
use Modules\User\Entities\User;
use TCG\Voyager\Models\Role;

class TicketNotificationMaker implements NotificationMaker
{
    private $ticket;
    private $notifier;
    private $users;

    public function __construct(Notifier $notifier, Ticket $ticket, Collection $users)
    {
        $this->notifier = $notifier;
        $this->ticket = $ticket;
        $this->users = $users;
    }


    public static function make(Notifier $notifier, Ticket $ticket, $pointer = null)
    {
        $notifier->setPointer($pointer);
        $admins = User::whereHasRole('dispatcher')->where('id', '!=', Auth::id())->get();
        $users = collect($ticket->assigned_to)
            ->merge($admins)
            ->merge($ticket->technicals)
            ->push($ticket->requester)
            ->whereNotNull();
        return new self($notifier, $ticket, $users);
    }

    public function sendNotifications()
    {
        foreach ($this->users as $user)
        {
            $this->notifier->sendNotification($user, $this->ticket);
        }
    }
}
