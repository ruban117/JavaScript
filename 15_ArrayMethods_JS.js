/*Here is some example of some useful array methods*/


/*TOSTRING METHOD*/
var arr=[1,2,3]
console.log(arr.toString())

/*JOIN METHOD*/

var arr=[5,6,7]
console.log(arr.join("_"))

/*POP METHOD*/

var arr=[7,8,5]
console.log(arr.pop())//returns the last element of the array

/*PUSH METHOD*/

var arr=[6,4,2]
console.log(arr.push(45))//returns the updated length of the array 
console.log(arr)

/*SHIFT METHOD*/

var arr=[10,18,15]
console.log(arr.shift())//removes the 1st element of the array

/*UNSHIFT METHOD*/

var arr=[87,45,96]
console.log(arr.unshift(23))//add element to the beginning and returns the length of the list
console.log(arr)

/*DELETE*/

var arr=[7,8,9,10]
delete arr[0]
console.log(arr)//delets the item but the size of the array is same
console.log(arr.length)

/*CONCAT METHOD*/

var a1=[1,2,3]
var a2=[4,5,6]
var a3=[9,8,7]
console.log(a1.concat(a2,a3))

/*SORT METHOD*/

var a=[222,1,111,555,54,444,47,7,9,8]
console.log(a.sort())
const compare=(a,b)=>{  //sort in ascending order b-a to sort decending order
    return a-b
}
console.log(a.sort(compare))

/*SPLICE METHOD*/
const a=[1,2,3,4,5]
console.log(a.splice(2,3,44,45,46,49))
console.log(a)

/*SLICE METHOD*/

const a=[1,2,3,4]
console.log(a.slice(2))


/*REVERSE METHOD*/

var a=[1,2,3,4]
console.log(a.reverse())