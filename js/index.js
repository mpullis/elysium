//set data-filter to "all"
var filter = "all";
var boxes = $(".box");
var boxesFiltered = $(".box."+filter);
var boxNum = 1;

//on click a li in the class small nav, get the attribute data-filter 
$("li.smallnav").on("click",function(event){
	event.preventDefault();
//set it to the var data-filter
 	filter = $(this).attr("data-filter");
	boxesFiltered = $(".box."+filter);
 	console.log(filter);
 	//hide all box divs 
 	hideBoxes();
 	setTimeout(showFiltered, 400);

 	//show all box divs with the attr data-filter=== the var data-filter
 	//set the menu item to selected	
});

// var boxes = ["box1","box2","box3","box4","box5","box6","box7","box8","box9"];

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
	showAllBoxes(boxes);
});

function showAllBoxes(boxesArr){
	for (var i=0;i<boxesArr.length;i++) {
	  slideBoxUp(boxesArr,i);
	}
}

function hideBoxes(){
	$(".box").css("margin-top",150);
	$(".box").css("display","none");
	$(".box").animate({
 		"opacity": 0,
 	});
}

function slideBoxUp (boxesArr,boxIndex) {
	console.log(boxIndex);
	setTimeout(function(){
	    $(boxesArr[boxIndex]).animate({
	    	"margin-top":0,
	    	"opacity": 1
	    },500, "swing");
  },(200*boxIndex));
};

function showFiltered(){
	$(".box."+filter).css("display","block");
	showAllBoxes(boxesFiltered);
	 // 	$(".box."+filter).animate({
	 //    	"margin-top":0,
	 //    	"opacity": 1
	 // });
}

var open = false;
// 1. on clicking of the hamburger, show the nav by animating it's left value to 0
//add click function
$(".hamburger").on("click",function(){
	if (open !=true){
		$("header").animate({
			"height":"390px"
		});
		open = true;
		$(".nav-links").css("display","block")
	} else {
		$("header").animate({
			"height":"60px"
		});
		open = false;
		// $(".nav-links").css("display","block")
	}
})

// 2. on clicking of the close button in the nav, hide the nav by animating it's left value back to 100%
$(".close-nav").on("click",function(){
	$("header nav").animate({
		"left":"100%"
	});
})


// 3. on resizing of the browser, we want to reset any styles set if we are back on desktop). Look into removeAttr to remove the inline styles that's being added to the nav element
$(window).on("resize",function(){
	if ($(window).width() >= 580){
	 $("header nav").removeAttr("style");
	 $("header").css("height","60");
	//  $("header").animate({
	// 		"height":"60px"
	// });
	}
	
//remove the inline styles that have been added to my nav via javascript
});


