//set data-filter to "all"
var filter = "all";
//on click a li in the class small nav, get the attribute data-filter 
$("li.smallnav").on("click",function(){
//set it to the var data-filter
 	filter = $(this).attr("data-filter");
 	console.log(filter);
 	//hide all box divs 
 	$(".box").hide();
 	//show all box divs with the attr data-filter=== the var data-filter
 	$(".box."+filter).show();
 	//set the menu item to selected	
});

var boxes = ["box1","box2","box3","box4","box5","box6","box7","box8","box9"];

var boxNum = 1;

$(".box").hover(

	function(){
		id = $(this).attr("id");
 	    console.log(id);
		console.log("on");
		$(this).find(".overlay").animate({
			opacity: 1
		});
		//$("#box1.span.overlay").fadeTo("slow",1);
		// animate opacity to 1
	},
	function(){
		console.log("off");
		$(this).find(".overlay").animate({
			opacity: 0
		});
		// animate opacity to 0
	}
);

//when the document is ready animate the margin-top back to 0
$( document ).ready(function() {
	for (var i=0;i<9;i++) {
	  slideBoxUp(i);
	}
});

function hideBoxes(){
	
}

function slideBoxUp (boxIndex) {
	console.log(boxIndex);
	setTimeout(function(){
	    $("#"+boxes[boxIndex]).animate({
	    	"margin-top":0,
	    	"opacity": 1
	    },500, "swing");
  },(200*boxIndex));
};



