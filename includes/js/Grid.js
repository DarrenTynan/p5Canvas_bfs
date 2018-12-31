class Grid
{
    constructor(cols, rows)
    {
        
    }
}

function make2Darray(cols, rows)
{
    var arr = new Array(cols);
    for (var i = 0; i < arr.length; i++)
    {
        arr[i] = new Array(rows);
    }
    return arr;
}