let url = "https://kontests.net/api/v1/all"

let response = fetch(url)

response.then((v) => {
    return v.json()
}).then((v2) => {
    let arr = [`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkyaNnfsDiDghMlRc4Fs665Yqghe0AmxO-Sw&usqp=CAU`
        , `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlJa1HuRbtzOE0ThpEJGhEYuA_Pkz1e8lE3w&usqp=CAU`
        , `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-zeZxJaTv2q2Yi2VOcUZB3cN1BqpKOa36Mw&usqp=CAU`]
    console.log(v2)
    ihtml = ""
    for (item in v2) {
        console.log(v2[item])
        ihtml += `
            <div class="card" style="width: 22rem;">
                <img src="${Math.floor(Math.random() * arr.length)}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        `
    }
    let a = document.getElementById('card-container')
    a.innerHTML = ihtml
})

