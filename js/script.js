
var a="5";
function add(a){
	return(a+a);
}

alert('Value is :'+add(a));

var player1= new Object();
player1.name="Sid";
player1["roll"]=12;
var player2={name:"Kal"};
player2.roll=21;

function display(){
	console.log(this.name+ " has roll :"+this.roll);
}
// function assotiation with methods
player1.logdisplay=display;
player2.logdisplay=display;
// calling object methods
player1.logdisplay();
player2.logdisplay();

var m = document.getElementById("mainT");
console.log(mainT.nodeType);
mainT.setAttribute("align","center");
var anchor = document.getElementsByTagName("li");
console.log("Total <li> are :"+anchor.length);

var p1 =document.getElementById("para1");
console.log(p1.innerHTML);

var u1= document.getElementById("listed");
var temp = document.createElement("li");
var text = document.createTextNode("4");
temp.appendChild(text);
u1.appendChild(temp);
//Event Handling
document.onclick=function(){
	alert("You clicked on page");
};
