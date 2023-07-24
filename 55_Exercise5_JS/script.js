let arr=[
    "Initializing Hack Tools",
    "Connecting To Facebook",
    "Connecting To Server 1",
    "Connecting failed . Retrying.......",
    "Connecting To Server 2",
    "Connected Successfully",
    "Username soumitadas",
    "Trying Brute Force",
    "200K passwords tried...",
    "Match not found",
    "Another 200K passwords tried...",
    "Match not found",
    "Another 200K passwords tried...",
    "Match not found",
    "Another 200K passwords tried...",
    "Match not found",
    "Applying special passwords....",
    "Password matched",
    "Accessing Account",
    "Hack Successful...."
]

const sleep=async(sec)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(true)
        },sec*1000)
    })
}

const hack=async(messages)=>{
    await sleep(2)
    let a=document.getElementsByClassName('outer')[0]
    a.innerHTML=a.innerHTML+messages+"<br>"+"<br>"
}

const main1=async()=>{
    for(i=0;i<arr.length;i++){
        await hack(arr[i])
    }
}


main1()


