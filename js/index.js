//set data-filter to "all"
var filter = "all";
//on click a li in the class small nav, get the attribute data-filter 
$("li.smallnav").on("click",function(){
//set it to the var data-filter
 	filter = $(this).attr("data-filter");
 	console.log(filter);
 	//hide all box divs 
    //show all box divs with the attr data-filter=== the var data-filter
 	$(".box").hide();
 	$(".box."+filter).show();
 	//set the menu item to selected	
});

