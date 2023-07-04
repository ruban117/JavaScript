//code for valid age check
let age=prompt("Enter Your Age:- ")
age=Number.parseInt(age)
if(age<0){
    alert("Invalid Age")
}
else if((age>9)&&(age<18)){
    alert("You can drive after 18")
}
else if((age<9)){
    alert("You are a kid and you can't even think of driving")
}
else{
    alert("You are 18 years old you can drive")
}

/*trenary operator*/

console.log("You Can ",age<18?"Not Drive":"Drive");


/*Homework use of switch case*/

let num1=prompt("Enter the 1st number:- ")
num1=Number.parseInt(num1)
let num2=prompt("Enter the 2nd number:- ")
num2=Number.parseInt(num2)
console.log("Enter + to addition")
console.log("Enter - to subtraction")
console.log("Enter * to multiplication")
console.log("Enter / to divition")
a=prompt("Enter any operator:- ")
switch(a){
    case '+':
        console.log(a,"+",b,"=",(a+b))
        break
    case '-':
        console.log(a,"-",b,"=",(a-b))
        break
    case '*':
        console.log(a,"*",b,"=",(a*b))
        break
    case '/':
        console.log(a,"/",b,"=",(a/b))
        break
    default:
        console.log("Enter valid expression")
}