<?php


namespace Modules\Notification\DTO;


use Carbon\Carbon;
use Modules\Status\Entities\Status;
use Modules\Ticket\DTO\TicketData;
use Modules\Ticket\Entities\Notification;
use Modules\Ticket\Entities\Ticket;
use NunoMaduro\Collision\Adapters\Laravel\ExceptionHandler;
use Spatie\DataTransferObject\DataTransferObject;
use Throwable;

class NotificationData extends DataTransferObject
{
    public $id;
    public $content;
    public $title;
    public $user_id;
    public $is_read;
    public $model_type;
    public $model_id;
    public $created_at;
    public $status_key;
    public $pointer_type;
    public $pointer_id;

    public static function fromModel(Notification $notification){

        $status_id = null;
        if($notification->notifiable == Ticket::class)
        {

                $status_id = optional(Ticket::withTrashed()->find((int)$notification->notifiable_id))->status_id;
//                $status_id = $notification->ticket()->first()->status_id;
                $status_key = $status_id ? Status::find($status_id)->key : null;
        }


        $data = [
            'id' => (int) $notification->id,
            'title' => (string) $notification->title,
            'content' => (string) $notification->body,
            'model_type' => $notification->notifiable == Ticket::class ? 'Ticket' : null,
            'model_id' => (string) $notification->notifiable_id,
            'pointer_type' => $notification->pointer_type,
            'pointer_id' => (int) $notification->pointer_id,
            'user_id' => (int) $notification->user_id,
            'is_read' => (int) $notification->is_read,
            'created_at' => Carbon::make($notification->created_at)->toDateTimeString(),
            'status_key' => $status_key ?? null
        ];

        $dto = new static($data);
        $dto->onlyKeys = array_keys($data);
        return $dto;


    }
}
