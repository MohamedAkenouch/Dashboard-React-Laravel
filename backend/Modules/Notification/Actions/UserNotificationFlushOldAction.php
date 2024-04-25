<?php


namespace Modules\Notification\Actions;


use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;
use Modules\Ticket\DTO\TicketData;
use Modules\Ticket\Entities\Ticket;
use Modules\User\Entities\User;

class UserNotificationFlushOldAction
{

    public static function execute($user)
    {
//        $user->notifications()
//            ->where('created_at','<',$user->second_used_at->subWeeks((setting('admin.notification.flush_before'))))
//            ->delete();

        $user->notifications()
            ->where('created_at','<',$user->last_request_at->subWeeks(1))
            ->delete();

    }
}
