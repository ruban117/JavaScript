let a=fetch("https://goweather.herokuapp.com/weather/Ny")

a.then((response)=>{
    console.log(response.status)
    console.log(response.ok)
    console.log(response.headers)
    return response.json()
}).then((value2)=>{
    console.log(value2)
}).catch((err)=>{
    console.log(err)
})