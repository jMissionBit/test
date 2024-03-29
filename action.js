/*
// Create a circle shaped path with its center at the center
// of the view and a radius of 50:
var circle = new Path.Circle({
	center: [100, 100],
	radius: 75,
	fillColor: "rgb(3, 60, 100)"
});


// we use this function to create animations 
// must be named onFrame(event) and I believe there can only be one
function onFrame(event) {
	//console.log(circle.position.x);
	
	// if the circle's x coordinate is less than 300 than move 
	// to the right 
	if(circle.position.x < 300) {
		circle.position.x += circle.bounds.width / 10;
		circle.position.y += circle.bounds.height / 10;
	}
	// otherwise 
	else if (circle.position.y < 500) {
		circle.position.y += circle.bounds.height / 50;
	} 
	
	path.rotate(1.5);
	
	
} 
var path = new Path.Rectangle({
	point: [200, 200],
	size: [150, 75],
	strokeColor: "orange"

})

*/

// The amount of circles we want to make:
var count = 150;

// Create a symbol, which we will use to place instances of later:
var path = new Path.Circle({
	center: [0, 0],
	radius: 10,
	var r = Math.random(),
	fillColor: 'blue',
	strokeColor: 'black'
});

var symbol = new Symbol(path);

// Place the instances of the symbol:
for (var i = 0; i < count; i++) {
	// The center position is a random point in the view:
	var center = Point.random() * view.size;
	// placing the symbol at the random point we made
	var placedSymbol = symbol.place(center);
	if (i % 2 == 0 ) {
		symbol.fillColor = 'red';
	}
	placedSymbol.scale(i / 50);
}

// The onFrame function is called up to 60 times a second:
function onFrame(event) {
	// Run through the active layer's children list and change
	// the position of the placed symbols:
	for (var i = 0; i < count; i++) {
		var item = project.activeLayer.children[i];
		
		// Move the item 1/20th of its width to the right. This way
		// larger circles move faster than smaller circles:
		item.position.y += item.bounds.height / 20;

		// If the item has left the view on the right, move it back
		// to the left:
		if (item.bounds.top > view.size.height) {
			item.position.y = -item.bounds.height;
		}
	}
} 