/* 1> create an array of numbers and take input from the user to add numbers to the array*/


var arr=[14,45,89,63,21,39]
var a=prompt("Enter Any Number to Add in the array:- ")
a=Number.parseInt(a)
arr.push(a)
console.log(arr)

/* 2> keep adding numbers in the array in question 1 until 0 is added to the array*/


do{
    var x=prompt("Enter Any Number to Add in the array:- ")
    x=Number.parseInt(x)
    arr.push(x)
}while(x!=0)

console.log(arr)

/* 3> filter for numbers divisibled by 10 from a given array*/

const fill=(num)=>{
    return num%10==0
}

var new_arr=arr.filter(fill)
console.log(new_arr)

/* 4> Create an array of squre of given numbers*/

const m=(num)=>{
    return num*num
}
var new_arr=arr.map(m)
console.log(new_arr)


/* 5> use reduce to calculate factorial of a given number from an array of first n natural numbers*/

var arr=[]
var n=prompt("Enter the n th number:- ")
n=Number.parseInt(n)
for(i=0;i<n;i++){
    arr[i]=i+1
}

const red=(a,b)=>{
    return a*b
}

var new_arr=arr.reduce(red)
console.log(new_arr)