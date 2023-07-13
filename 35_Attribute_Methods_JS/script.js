let a=document.getElementById("id1")

console.log(a.hasAttribute("class"))//returns true or false

console.log(a.getAttribute("class"))//returns the name of the class of that given id

/*console.log(a.setAttribute("hidden","true"))*///sets hidden attribute

//console.log(a.setAttribute("class","ruban"))//sets a class name if class attr exists it overrids in it

//console.log(a.removeAttribute("class")) //removes the class

console.log(a.attributes)//returns how many attributes it has


console.log(a.dataset.rubu)//gets your custom attribute's value
