//Traverse the Dom// 
//Use the firstElementChild property to print the h2 in the section to the console//
var printh2 = document.getElementById("content").firstElementChild.innerHTML
console.log(printh2);

//Use the lastElementChild property to log the last paragraph in the section to the console//
var lastp = document.getElementById("content").lastElementChild.innerHTML
console.log(lastp);

//Use the parentNode property to log the h2’s parent section to the console//
var getparent = document.getElementById("section-h2").parentNode.nodeName;
console.log(getparent);

//Use the children property to log the group of child elements of the section to the console//
var getchild = document.getElementById("content").children
console.log(getchild);

//Target Nodes and Change Content / Attributes://
//Retrieve the content of the h1 node using innerHTML and log the content to the console//
var geth1 = document.getElementById("title").parentNode.innerHTML;
console.log(geth1);

//Change the content actually shown on the page for the h1 node to “Updated Page Title” using innerHTML//
var updatetitle = "Updated Page Title";
var updateditem = document.getElementById("title").innerHTML = updatetitle;


//Retrieve the value of the id attribute on h1 using firstElementChild and the element property id and log it to the console//
var idvalue = document.getElementById("site-header").firstElementChild;
var getattrib2 = idvalue.getAttribute('id');
console.log(getattrib2);


//Changing Items in the DOM://
//Use the appendChild method to add a new <p> node inside the section.//
var node = document.getElementById("content");
var inner_p = document.createElement("p");
var inner_p_text = document.createTextNode("this is a new p");
inner_p.appendChild(inner_p_text);
inner_p.title = "new-p-node";
node.appendChild(inner_p);


//Use the removeChild method to remove the <p> node in the aside.//
var remove = document.getElementById("tangent");
remove.removeChild(remove.firstElementChild);

//Use the replaceChild method to replace a the h2 in the section with an h3 with the value “New Heading”//
var h3 = document.getElementById("section-h2");
var innerh3 = document.createTextNode("New Heading");
h3.appendChild(innerh3);
node.replaceChild(innerh3,h3);
