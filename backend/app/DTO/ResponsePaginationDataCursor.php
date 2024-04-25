<?php
declare(strict_types=1);

namespace App\DTO;




use Illuminate\Contracts\Support\Responsable;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

use Spatie\DataTransferObject\Attributes\CastWith;
use Spatie\DataTransferObject\DataTransferObject;
use Symfony\Component\HttpFoundation\Response;

final class ResponsePaginationDataCursor extends DataTransferObject implements Responsable
{
    public  $paginator;

    public $collection;
    public ?int $status = 200;
    public ?string $message;
    public $caster;

    public function toResponse($request)
    {
        return $this->responseData($this->caster);
    }


    /**
     * @param Request $request
     * @return JsonResponse|Response
     */
    public function responseData(array $caster)
    {
        $nextCursor = $this->paginator->nextPageUrl();
        $nextCursor ?
            preg_match('/(?<=cursor=)(?s)(.*$)/',$nextCursor,$nextCursor) : null;

        $nextCursor = $nextCursor ? $nextCursor[0] : null;
        $prevCursor = $this->paginator->previousPageUrl();
        $prevCursor ?
            preg_match('/(?<=cursor=)(?s)(.*$)/',$prevCursor,$prevCursor) : null;
        $prevCursor = $prevCursor ? $prevCursor[0] : null;
        return response()->json(
            [
                'data' => $caster,
                'message' => $this->message,
                'status' => $this->status,
                'meta' => [
                    'hasNext' => (bool)$this->paginator->hasMorePages(),
                    'nextPage' => $nextCursor,
                    'previousPage' => $prevCursor,
                ],
            ],
            $this->status
        );
    }


}

