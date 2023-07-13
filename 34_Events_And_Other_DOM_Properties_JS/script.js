/*Console.dir function*/

console.log(document.getElementsByTagName("span")[0])
console.dir(document.getElementsByTagName("span")[0])


/*tag name /node name*/

console.log(document.body.firstChild.nodeName)//text comments tags
console.log(document.body.firstElementChild.nodeName)//only tags


/*innerHTML and outerHTML*/

console.log(document.getElementById("first").innerHTML)//only prints span
console.log(document.getElementById("first").outerHTML)//prints span as well as outer divs

document.getElementById("sp").innerHTML="<span>This Is Not A Span</span>"
//document.getElementById("first").innerHTML="This Is Not A Div"

document.body.firstChild.nodeValue//prints the texts without tag or it is known as text node
document.body.firstChild.data//prints the texts without tag or it is known as text node




/*The Hidden Property*/

document.getElementById("hid").hidden=false//the hidden property disabled
document.getElementById("hid2").hidden=true//the hidden property enabled