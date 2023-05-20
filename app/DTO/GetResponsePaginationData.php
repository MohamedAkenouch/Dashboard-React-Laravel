<?php


namespace App\DTO;


class GetResponsePaginationData
{

    public static function getResponsePaginationData($paginator , $collection , $caster, $other = null){

        return new ResponsePaginationData([
            'paginator' => $paginator,
            'collection' => $collection,
            'caster' => $caster,
            'other' => $other
        ]);
    }

    public static function getResponsePaginationDataCursor($paginator , $collection, $caster){
        return new ResponsePaginationDataCursor([
            'paginator' => $paginator,
            'collection' => $collection,
            'caster' => $caster
        ]);
    }
}
