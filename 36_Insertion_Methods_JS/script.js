let a=document.getElementsByTagName('div')[0]
a.innerHTML=a.innerHTML + '<h1>Hello World!</h1>'




let b=document.createElement('div')//creating new element inside div
b.className='new-class'//sets class name
b.innerHTML='<b>Rubu 0</b>'//sets the val of innerHTML
a.appendChild(b)//append as a child of 1st div

//creating all the elements using for loops
for(let i=1;i<=5;i++){
    let c=document.createElement('div')//creating new element inside div
    c.className='new-class'//sets class name
    c.innerHTML=`<b>Rubu ${i}</b>`//sets the val of innerHTML
    a.appendChild(c)//append as a child of 1st div
}


a.append(b)
a.prepend(b)
a.before(b)
a.after(b)
a.replaceWith(b)
