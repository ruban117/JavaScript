/*Q1-   JS Program to store name phone number and marks of a student*/

const a = {
    name: "Soumita Das",
    pno: 9883760672,
    marks: 8.27
}

console.log(a)

/*Q2- Create a variable of type string and try to add a number in it*/

a1 = "Ruban"
b = 117
console.log(a1 + b)

/*Q3- Use type of operator to find the datatype of the string*/
console.log(typeof (a1 + b))

/*Q4-  Create a const object in javascript can you change it to hold a number later? *//*[NO]*/

const a2 = {
    a: 50,
    b: 60
}

//a2=78//Error

a2['c'] = 70
console.log(a2)

/*Q5- Create a javascript programe to create a word meaning dictionary of 5 words*/

const word = {
    noctilucent: "visible during the short night of the summer.",
    Stygian: "dark or gloomy.",
    sewellel: "a small, burrowing rodent of the Pacific coastal region of North America, also known as the mountain beaver.",
    miasma:"a poisonous cloud of vapor produced by decaying organic matter.",
    derecho:"a widespread and severe windstorm that moves rapidly along a fairly straight path and is associated with bands of rapidly moving thunderstorms."
}

console.log(word)