<?php


namespace Modules\Notification\Actions;


use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;
use Modules\Ticket\DTO\TicketData;
use Modules\Ticket\Entities\Category;
use Modules\Ticket\Entities\Ticket;
use Modules\User\Entities\User;

class UserNotificationFlushAction
{

    public static function execute(?Model $model, User $user)
    {
        $notifications = $user->notifications();
        $notifications = $model ?
            $notifications
                ->where('notifiable',  get_class($model))
                ->where('notifiable_id',  $model->id)
            : $notifications;

        $notifications = $notifications->get()->map(function($notification){
            $notification->delete();
        });
    }
}
