/*MAP FILTER and REDUCE FUNCTION*/

/*MAP FUNCTION*/

var arr=[12,45,87,96,63]

var new_arr=arr.map((index,number,array)=>{
    console.log(index,number,array)
    return number+index
})

console.log(new_arr)


/*FILTER FUNCTION*/

var arr=[78,45,41,15,36]

const fil=(num)=>{
    return num>10
}

var new_arr=arr.filter(fil)
console.log(new_arr)


/*REDUCE FUNCTION*/

var arr=[88,45,69,71,10]

const red=(a,b)=>{
    return a+b
}

var arr_new=arr.reduce(red)

console.log(arr_new)