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
var updatetitle = document.getElementById("title").innerHTML;
document.


//Retrieve the value of the id attribute on h1 using firstElementChild and the element property id and log it to the console//



//Change the value of the id attribute on h1 to “new-title” using firstElementChild and the element property id//