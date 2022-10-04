
// Create canvas variable
var canvas = new fabric.Canvas('mycanvas')
//Set initial positions for ball and hole images.
ball_y=0;
ball_x=0;
hole_y=400;
hole_x=800;
block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("gold-h1.png", function(IMG){
		hole_obj = IMG;
		hole_obj.ScaletoWidth(50);
		hole_obj.ScaletoHeight(50);
		hole_obj.set({
			top:hole_y
			top:hole_x
			)};

	canvas.add(hole_obj);


	)};

	new_image();0
}

function new_image()
{
	// write code to Upload ball image on canvas
	function.newimage()
	fabric.Image.fromURL("gold-h1.png", function(IMG){
		ball_obj = IMG;
		ball_obj.ScaletoWidth(50);
		ball_obj.ScaletoHeight(50);
		ball_obj.set({
			top:hole_y
			left:hole_x
			)};

}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		// Write a code to move ball upward.
	}

	function down()
	{
		 // Write a code to move ball downward.
	}

	function left()
	{
		if(ball_x >5)
		{
			// Write a code to move ball left side.
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			// Write a code to move ball right side.
		}
	}
	
}










//CREATING A FUNCTION//
function hello()
{

if(a ="10")
{



}

}












