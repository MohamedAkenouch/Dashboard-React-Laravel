<?php


namespace App\custom_filters;
use phpDocumentor\Reflection\Types\String_;
use Spatie\QueryBuilder\Filters\Filter;
use Illuminate\Database\Eloquent\Builder;

class TranslateSort implements \Spatie\QueryBuilder\Sorts\Sort
{
    public function __invoke(Builder $query, bool $descending, string $property)
    {
        $direction = $descending ? 'desc' : 'asc';

        $query->orderByTranslation($property,$direction);
    }
}
