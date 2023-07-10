/*1> Write a program using prompt function to take input of age as a value from user and use alert 
to tell him if he can drive or not*/

let runagain=true;


while(runagain){


    var a=prompt("Enter Your Age:- ")
    if((a<9)&&(a>=0)){
        alert("You can not even think of driving!!")
    }
    else if((a>=9)&&(a<18)){
        alert("You can drive after 18")
    }

/*3> in the previous use console.error to log the error if the age is entered negative*/

    else if(a<0){
        console.error("Negative Age Is Not Possible")
    }

    else{
        alert("Yes!! You are greater than 18 so you can drive!")
    }

/*2> In Q1 Confirm the user if he wants to see the prompt again*/

    runagain=confirm("Do you want to see the prompt again?:- ")
}


/*4> write a program to change the url to Google.com(Redirection) if the user enters a number greater than 4*/

let b=prompt("Enter A number:- ")
b=Number.parseInt(b)
if(b>4){
    location.href="https://www.google.com/"
}


/*5> Change the background of the page to yellow or red or any other color based on user input through prompt*/

let color=prompt("Enter Any Color:- ")

document.body.style.background=color


