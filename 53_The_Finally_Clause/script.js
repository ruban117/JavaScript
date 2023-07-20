try{
    console.log("Running Successfully")
}

catch(error){
    console.log(error)
}

finally{
    console.log("I Will Always Executed")
}

try{
    console.log(ruban)
}

catch(error){
    console.log(error)
}

finally{
    console.log("I Will Always Executed")
}

try{
    console.log(soumita)
}

catch(error){
    console.log(error)
    console.log(ruban)
}

finally{
    console.log("I Will Always Executed")
}


const fun=()=>{
    try{
        console.log("Running Successfully")
        return
    }
    
    catch(error){
        console.log(error)
        console.log(ruban)
    }
    
    finally{
        console.log("I Will Always Executed")
    }
}

fun()
console.log("The End")