/*
Officer: 8676380
CaseNum: 601-0-49501215-8676380

Case 601 - Escaped - stage 1

We've got an emergency here. The notorious killer Casey Fry has escaped from the Federal Correctional Institution.
She is on the loose and we have been asked to track her movements.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, PaleVioletRed fill triangles centered over each location.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

For this mission you will need ONLY the following:

- for loop
- fill
- triangle() NB. Draw each triangle with the point roughly at its center.


*/

var countyMap;

//Sightings of Casey Fry.

var fry_logbook_coordinateX = [127, 156, 179, 200, 220, 228, 249, 269, 292, 321, 354, 390, 396, 429, 456, 467, 483, 531, 547, 571, 589, 637];
var fry_logbook_coordinateY = [175, 158, 192, 154, 133, 168, 149, 139, 168, 133, 159, 144, 225, 228, 230, 277, 267, 291, 278, 274, 318, 280];


function preload()
{
	countyMap = loadImage("map.png")
}

function setup()
{
  createCanvas(countyMap.width, countyMap.height);

	image(countyMap, 0,0);

	//add your code below here
	fill(219,112,147)
	for(var i = 0; i < fry_logbook_coordinateX.length; i++)
		{
			triangle(fry_logbook_coordinateX[i].countyMap);
		}
		// triangle(mountains[i].pos_x, mountains[i].pos_y, 
		// 	mountains[i].pos_x - 320, mountains[i].pos_y, 
		// 	mountains[i].pos_x - 160, mountains[i].pos_y - 120);

}

//We are not using the draw function this time
