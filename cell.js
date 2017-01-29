function Cell(i, j){
	this.i = i;
	this.j = j;
	
	this.visited = false;
	
	/* walls contains booleans indicating if the cells posesses each wall in the order top, right, bottom, left */
	this.walls = [true, true, true, true]; 
	
	this.checkNeighbours = function(){
		var neighbours = [];
		
		/* Suppose we're on the edge. index(i+1,j) might return -1. In that case, right would be "undefined" */
		
		var top  	= grid[index(i,   j-1)];
		var right  	= grid[index(i+1, j)];
		var bottom  = grid[index(i,   j+1)];
		var left  	= grid[index(i-1, j)];
		
		//asking for top makes sure that it is !undefined
		if (top && !top.visited){
			neighbours.push(top);
		}
		if (right && !right.visited){
			neighbours.push(right);
		}
		if (bottom && !bottom.visited){
			neighbours.push(bottom);
		}
		if (left && !left.visited){
			neighbours.push(left);
		}
		
		if (neighbours.length > 0){
			var r = floor(random(0, neighbours.length));
			return neighbours[r];
		} else {
			return undefined;
		}
	}

	this.highlight = function(){
		var x = this.i*w;
		var y = this.j*w;
		
		fill(0, 0, 255, 100);
		noStroke();
		rect(x, y, w, w);
	}
	
	this.show = function(){
		var x = this.i*w;
		var y = this.j*w;
		
		stroke(255);
		//draw the walls in cw dir from top left
		if (this.walls[0]){
			line(x,     y,     x + w, y); 		//top
		}
		if (this.walls[1]){
			line(x + w, y,     x + w, y + w); 	//right
		}
		if (this.walls[2]){
			line(x + w, y + w, x,     y + w);	//bottom
		}
		if (this.walls[3]){
			line(x,     y + w, x,     y);		//left
		}
		
		if (this.visited){
			//colour in the visited cell
			fill(255, 0, 255, 100);
			noStroke();
			rect(x, y, w, w);
		}
	}
}