var req=new XMLHttpRequest();

req.onreadystatechange = function(){
	
		console.log("Called");
		console.log(req.readyState);
		if(req.readyState===4){
		var p = document.createElement("p");
		console.log(req);
		console.log(req.response);
		var t = document.createTextNode(req.response);
		console.log(t);
		p.appendChild(t);
		document.getElementById("main").appendChild(p);
	}
};

req.open('GET',"simple.txt",true);
req.send(null);



//document.getElementById("mainT").className= "highlight";
jQuery("#mainT").addClass("highlight");
jQuery("li").addClass("back");
//jQuery("li:last").addClass('highlight');
$("p:contains('first')").addClass('back');
//$('p').hide(1000);
//$('p').show(1000);
//$("p").slideDown("slow");
//$("p").fadeTo("slow",0.15);
$("#clicked").click(function(){
	$(this).text("You clicked me");	
});

$(document).ready(function(){
	$("#listed").css("color","blue");
});
