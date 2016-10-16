var lightsOn = true;

// on clicking of the light switch, toggle between turning on and off the lights
// tip: update the lights variable to "on" or "off" and change the class of the body (to dark or light)

function switchLights() {
	if (!lightsOn){
		lightsOn = true;
		$("body").removeClass("dark");
		//turn em on
	}else{
		lightsOn = false;
		$("body").addClass("dark");
		//turn em off
	}

}

$('#switch').on('click', switchLights);
