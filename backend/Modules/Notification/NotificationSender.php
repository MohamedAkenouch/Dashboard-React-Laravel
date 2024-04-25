<?php


namespace Modules\Notification;

use Kreait\Firebase\Factory;
use Kreait\Firebase\Messaging\ApnsConfig;
use Kreait\Firebase\Messaging\Notification;

use Kreait\Firebase\Messaging\CloudMessage;
use Modules\User\Entities\User;

class NotificationSender
{
    public static function send(User $user, array $message, $model_type, $model_id, $pointer_type, $pointer_id)
    {

        $messaging = app('firebase.messaging');
        $notification = Notification::fromArray([
            'title' => $message['title'],
            'body' => $message['body'],

        ]);
        $apn = ApnsConfig::fromArray([
            'sound' => "default"
        ]);

        \Modules\Notification\Entities\Notification::create([
            'title' => $message['title'],
            'body' => $message['body'],
            'user_id' => $user->id,
            'notifiable' => $model_type,
            'notifiable_id' => $model_id,
            'pointer_type' => $pointer_type,
            'pointer_id' => $pointer_id,
        ]);

        $test = config('firebase.projects.app.credentials.file');
         (new Factory)->withServiceAccount($test);

        $message = CloudMessage::new()->withNotification($notification)
        ->withData([
            'user_id' => $user->id,
            'notifiable_type' => $model_type ?? 0,
            'notifiable_id' => $model_id ?? 0,
            'pointer_type' => $pointer_type,
            'pointer_id' => $pointer_id
        ])->withApnsConfig($apn);

        $tokens = $user->firebaseToken->pluck('firebase_token')->toArray();
        if(count($tokens) > 0){
            $messaging->sendMulticast(
                $message,
                $tokens

            );
        }
    }
}
