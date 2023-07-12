/*1> Create a navbar and change the color of it's first element red*/

document.getElementsByTagName("ul")[0].firstElementChild.style.color="red"


/*2> Create a table without tbody now use "view page source" button to check wheather it has a tbody
or not*/


//Answer Is NO


/*3> create an element with 3 children now change the color of 1st and last element to green*/

document.getElementsByClassName("child")[0].firstElementChild.style.color="green"
document.getElementsByClassName("child")[0].lastElementChild.style.color="green"


/*4> Write a Js Code to change background of all <li> tags to cyan*/

Array.from(document.getElementsByTagName("li")).forEach((element)=>{
    element.style.background="cyan";
})

/*5> which of the following is used to look for the farthest ancestor that matches a given css selector*/

/*A) Matches  B) Closest C) Contains D) None Of Thease    Ans:- D*/