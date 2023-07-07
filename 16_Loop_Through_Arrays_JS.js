/*Here are some examples of array looping methods*/

/*classical for loop*/

var arr=[10,20,30,40,50]
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}

/*FOR-EACH LOOP*/

var arr=[54,45,69,25,36]
arr.forEach((item)=>{
    console.log(item*item)
})


/*FOR-OF LOOP*/

var arr=[58,78,14,56,39]
for(let i of arr){
    console.log(i)
}

/*FOR-IN LOOP*/

var arr=[65,74,12,35,89]
for(let i in arr){
    console.log(arr[i])
}


/*ARRAY........FROM*/

let s="RUBAN"
var arr=Array.from(s)
console.log(arr)