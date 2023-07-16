/*1> Write a program to show different alerts whenever different buttons are clicked*/


alert1.addEventListener('click',function(e){
    alert("Alert1")
})

alert2.addEventListener('click',function(e){
    alert("Alert2")
})

alert3.addEventListener('click',function(e){
    alert("Alert3")
})


/*3> Bookmarks using add event listeners*/

google.addEventListener('click',function(e){
    window.location="https://google.com"
})
fb.addEventListener('click',function(e){
    window.location="https://fb.com"
})
twitter.addEventListener('click',function(e){
    window.location="https://twitter.com"
})


/*4> Write a js programs to keep fetching contents from a website(Every 5 seconds)*/

/*setInterval(async function(){
    let url="https://jsonplaceholder.typicode.com/todos/1"
    console.log(await fetchContent(url))
},5000)*/

