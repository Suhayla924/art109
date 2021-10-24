var mousePoint = view.center;
var amount = 105;
var colors = ['red', 'black', 'blue', 'white'];

for (var i = 0; i < amount; i++) {
	var rect = new Rectangle([0, 0], [25, 25]);
	rect.center = mousePoint;
	var path = new Path.Rectangle(rect, 100);
	path.fillColor = colors[i % 10];
	var scale = (1 - i / amount) * 3;
	path.scale(scale);
}

function onMouseMove(event) {
	mousePoint = event.point;
}

var children = project.activeLayer.children;
function onFrame(event) {
	for (var i = 0, l = children.length; i < l; i++) {
		var item = children[i];
		var delta = (mousePoint - item.position) / (i + 4);
		item.rotate(Math.sin((event.count + i) / 10) * 1.5);
		if (delta.length > 0.1)
			item.position += delta;
	}
}
