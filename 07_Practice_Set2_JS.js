/*Q1> use logical operators to find wheather the age of a person lies between 10 and 20*/

age=prompt("Enter Your Age:- ")
age=Number.parseInt(age)
if(age<0){
    alert("Invalid Age")
}
else if((age>=10)&&(age<=20)){
    alert("your age lies between 10 and 20")
}
else if(age<10){
    alert("Underage")
}

else{
    alert("your age is exceed greater than 20")
}

/*Q2> demonstrate the use of switch case statement in javascript*/

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
        console.log(num1,"+",num2,"=",(num1+num2))
        break
    case '-':
        console.log(num1,"-",num2,"=",(num1-num2))
        break
    case '*':
        console.log(num1,"*",num2,"=",(num1*num2))
        break
    case '/':
        console.log(num1,"/",num2,"=",(num1/num2))
        break
    default:
        console.log("Enter valid expression")
}


/*Q3> js program to find a number is divisibled by 2 and 3*/

num=prompt("Enter Any Number:- ")
num=Number.parseInt(num)
if((num%2==0)&&(num%3==0)){
    alert("The Number Is Divisibled by 2 and also 3")
}
else if(num%2==0){
    alert("The Number is divisibled by 2")
}

else if(num%3==0){
    alert("The Number is divisibled by 3")
}
else{
    alert("The Number is not divisibled by either 2 or 3")
}

/*/*Q4> js program to find a number is divisibled by either 2 and 3*/
num3=prompt("Enter Any Number:- ")
num3=Number.parseInt(num3)
if((num3%2==0)||(num3%3==0)){
    alert("The Number Is Divisibled by either 2 or 3")
}
else if(num3%2==0){
    alert("The Number is divisibled by 2")
}

else if(num3%3==0){
    alert("The Number is divisibled by 3")
}
else{
    alert("The Number is not divisibled by either 2 or 3")
}

/*Q5> print "You can drive" or "You cannot drive" based on age greater than 18 using ternary operator*/

age1=prompt("Enter your age:- ")
age1=Number.parseInt(age1)
console.log("You Can ",age1<18?"Not Drive":"Drive");