class GridNode
{
    constructor(_nodeX, _nodeY, _drawX, _drawY, _size)
    {
        // Node position in grid.
        this.x = _nodeX;
        this.y = _nodeY;
        // Draw position coordinates.
        this.drawX = _drawX;
        this.drawY = _drawY;
        // Id of node: blank, source, target, wall, etc.
        this.id = "blank";
        // Size of tile in pixels
        this.size = _size;
        // The offset in pixels to be subtracted.
        this.offset = 2;
        // Has it previously been visited.
        this.visited = false;
        // Where did it come from? (parent)
        this.parent = null;
    }

    draw()
    {
        switch(this.id)
        {
            case("source"):
                fill(0,0,255);
                break;
            case("target"):
                fill(255,0,0);
                break;
            case("wall"):
                fill(17,17,17);
                break;
            case("blank"):
                fill(255,255,255);
                break;
            case("debug"):
                fill(150,0,155);
                break;
            case("path"):
                fill(0,255,255);
                break;
            default:
                noFill();
        }

        rect(this.drawX + this.offset, this.drawY + this.offset, this.size - this.offset*2, this.size - this.offset*2, 5);
    }
}