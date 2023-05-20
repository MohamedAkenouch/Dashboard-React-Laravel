<?php


namespace App\custom_filters;
use phpDocumentor\Reflection\Types\String_;
use Spatie\QueryBuilder\Filters\Filter;
use Illuminate\Database\Eloquent\Builder;

class RangeFilter implements Filter
{
    /**
     * @param Builder $query
     * @param $value
     * @param string $property
     */
    public function __invoke(Builder $query, $value,string $property)
    {
        $query->whereBetween($property,$value);
    }
}
