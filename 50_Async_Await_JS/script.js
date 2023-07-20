async function Ruban(){
    let naihatiWeather=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Naihati Weather Is 30 degree")
        },4000)
    })
    let ChuchuraWeather=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Chuchura Weather Is 25 degree")
        },9000)
    })
    console.log("Fetching The Naihatiweather Please Wait......")
    let Nw=await naihatiWeather
    console.log("Naihatiweather Fetched Successfully "+Nw)
    console.log("Fetching The Chuchuraweather Please Wait......")
    let Cw=await ChuchuraWeather
    console.log("Chuchuraweather Fetched Successfully "+Cw)
    return [Nw,Cw]
}

const fun2=async()=>{
    console.log("Bye")
}


const main1=async()=>{
    let a= await Ruban()
    let b= await fun2()
}


main1()