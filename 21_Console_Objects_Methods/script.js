/*LOG method*/
console.log("This is my journey no 2")

/*TIME method*/
console.time()
for(i=0;i<10;i++){
    console.log(i)
}
console.timeEnd()
console.time()
var i=0
while(i!=10){
    console.log(i)
    i++
}
console.timeEnd()

/*Assert method*/

//console.assert(10<9)//false so gives error
console.assert(10>9)

/*CLEAR method*/

console.clear()

/*TABLE method*/

obj={
    Ruban:117,Soumita:96,Altab:88,Shobhan:85,Samarpita:151,Souvik:108,Sushmita:109
}

console.table(obj)

/*Warning Method*/

console.warn("This Is A Warning")

/*error method*/

console.error("This Is an Error")

/*INFO method*/

console.info("This Is An INformation")