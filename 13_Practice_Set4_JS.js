/*1> what will following print in js*/
console.log("Ruba\"".length)

/*2> Explore the include,starts with and ends with functions of a string*/
var str="Players Unknown Battlegrounds Mobile"
console.log(str.includes("players"))//it searches inside the string if matched then returns true else false

var str="To be, or not to be, that is the question."
console.log(str.startsWith("To be"))//it searches the value we entered is starts with in the string
console.log(str.endsWith("question."))//it searches the value we entered is ends with in the string


/*3> program to convert a given string to lowercase*/

var n="Ruban"
console.log(n.toLowerCase())


/*4> Extract the ammount out of this string
    "Please Give Rupees 1000*/

var str="Please Give Rupees 1000"

consolw.log(str.slice(19))


/*5> try to change the 4th character of a string if you able to do it*/

var s="Ruban Pathak"
s[5]="G"
console.log(s)//because strings are immutable so we can't change any character directly