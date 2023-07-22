const TodoApi=async (todos)=>{

    let option={
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body: JSON.stringify(todos)
    }
    let p=await fetch('https://jsonplaceholder.typicode.com/posts',option)
    let response= await p.json()
    return response

}
const getid=async (id)=>{
    let r=await fetch('https://jsonplaceholder.typicode.com/posts/1'+id)
    return await r.json()
}

const MainFunc=async ()=>{
    try{
        let todos={
            title: 'foo',
            body: 'bar',
            userId: 10,
        }
        let todo=await TodoApi(todos)
        console.log(todo)
        console.log(await getid(7))
    }catch(error){
        console.log("Some Error Occured")
    }
}

MainFunc()
    