try{
    let a=prompt('Enter Your Age:- ')
    if((a>150)||(a<0)){
        throw new ReferenceError("This Is Not A Correct Age")
    }
    else{
        setTimeout
        throw new SyntaxError("Wrong Syntax")
    }
    
}catch(error){
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}