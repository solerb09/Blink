//
//Demo: Whack-A-Mole
//Author: Brandon Soler
//Date: 9/27/19
//Due Date: 9/26/19
//



let image = "img/forward.png"; //global value for image is the forward sprite


function changeEyes(pos) //making a function called eyes and i pass through the position of the cursor
{
	image = pos; //setting image to the position
	document.getElementById('eyes').src=image; //wherever the cursor is what i change the image of the eyes to
}

function blink() //function for the blinking
{
	setInterval(close, 2000) //setting the interval for the close function to two seconds
	
}

function close() //close function
{
	document.getElementById('eyes').src="img/blink.png" //i close the eyes as soon as the function is called
	setTimeout(open, 500) //half a second until the eyes open
}

function open() //open eyes function 
{
	document.getElementById('eyes').src=image; //setting the eyes display to open so i could call it in the close function
}



