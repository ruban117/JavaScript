/*1> write a program to print the marks of a student in an object using for loop*/

obj={
    Ruban:117,
    Soumita:96,
    Altab:88,
    Shobhan:85
}

for(var i=0;i<Object.keys(obj).length;i++){
    console.log("The Marks Of "+Object.keys(obj)[i]+" Is "+obj[Object.keys(obj)[i]])
}

/*2> write the program in question 1 using for in loop*/

obj={
    Ruban:117,
    Soumita:96,
    Altab:88,
    Shobhan:85
}

for(let i in obj){
    console.log("The Marks Of "+i+" Is "+obj[i])
}

/*3> write a program to print "try again" until the user put the correct number*/

cn=4
a=true
while(a){
    num=prompt("Enter That Number:- ")
    if(num==cn){
        a=false;
    }
}

console.log("Correct Number")

/*4> using function find mean of 5 numbers*/

const mean=(a,b,c,d,e)=>{
    return (a+b+c+d+e)/5
}

