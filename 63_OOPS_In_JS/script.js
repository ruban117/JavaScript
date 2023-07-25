let obj1={
    name:"Ruban",
    meth:()=>{
        alert("I Am Method 1 from onject 1")
    }
}

let obj2={
    name2:"Soumita",
    meth2:()=>{
        alert("I Am Method 2 from onject 2")
    }
}

obj2.__proto__={
    name3:"Indra"
}

obj1.__proto__=obj2

obj1.meth2()
console.log(obj1.name2)
console.log(obj1.name3)
console.log(obj1.__proto__)