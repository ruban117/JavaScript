/*Use Javascript to create a game of snake , Water & gun.The game should ask you to enter s,w or g.The 
computer should be able to randomly generate S W & G and declare win or loose using alert use confirm and
prompt whenever requried*/

alert("SNAKE WATER OR GUN GAME!!")

let b=true

let chance=10
let me=0,c=0

const game=(comp,choice)=>{
    if((comp == 'Snake')&&(choice == 'Water')){
        alert("You Loose"+" Your Choice:- "+choice+" Computer's Choice:- "+comp)
        c+=1
    }
    else if((comp == 'Water')&&(choice == 'Snake')){
        alert("You Win "+" Your Choice:- "+choice+" Computer's Choice:- "+comp)
        me+=1
    }
    else if((comp == 'Water')&&(choice == 'Gun')){
        alert("You Loose "+" Your Choice:- "+choice+" Computer's Choice:- "+comp)
        c+=1
    }
    else if((comp == 'Gun')&&(choice == 'Water')){
        alert("You Win "+" Your Choice:- "+choice+" Computer's Choice:- "+comp)
        me+=1
    }
    else if((comp == 'Gun')&&(choice == 'Snake')){
        alert("You Loose "+" Your Choice:- "+choice+" Computer's Choice:- "+comp)
        c+=1
    }
    else if((comp == 'Snake')&&(choice == 'Gun')){
        alert("You Win "+" Your Choice:- "+choice+" Computer's Choice:- "+comp)
        me+=1
    }
    else{
        alert("Draw"+" Your Choice:- "+choice+" Computer's Choice:- "+comp)
    }
}

while((b)&&(chance!=0)){
    let arr=["Snake","Water","Gun"]
    let comp=arr[(Math.floor(Math.random()*arr.length))]
    alert("You Have "+chance+" Chances")
    alert("Computer Has Choosen His Choice It's Your Turn!")
    var choice=prompt("Write Your Choice From Snake Water Or Gun:- ")
    game(comp,choice)
    chance--
    b=confirm("Do you want to continue?")
    
}

if(c>me){
    alert("You Loose"+"Your Score Is "+me+"Computer's Score Is "+c)
}
else if(c==me){
    alert("Drawn"+"Your Score Is "+me+"Computer's Score Is "+c)
}
else{
    alert("You Win"+"Your Score Is "+me+"Computer's Score Is "+c)
}
