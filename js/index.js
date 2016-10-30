//set data-filter to "all"
var filter = "all";
//on click a li in the class small nav, get the attribute data-filter 
$("li.smallnav").on("click",function(){
//set it to the var data-filter
 	filter = $(this).attr("data-filter");
 	console.log(filter);
 	//hide all image divs 
    //show all image divs with the class small-nav and the attr data-filter=== the var data-filter
 	$("img.portfolio-thumb").hide();
 	$("img."+filter).show();
});

