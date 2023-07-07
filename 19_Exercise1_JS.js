/*write a javascript program to generate a random number and store it in a variable the program then
takes an input from the user to tell them wheather the guess is correct,greater than or less than
the original number
100 numbers of guesses is the scope of the user the program is expected to terminate once the 
number is guessed.Number should be between 1-100*/

var rand=Math.floor(Math.random()*101)
guess=100
while(guess!=0){
    let n=prompt("Guess the number:- ")
    n=Number.parseInt(n)
    if(n == rand){
        break
    }
    else if(n>rand){
        alert("Your Entered Number Is Greater Than The Gussing Number")
        guess--
        alert(`Try Again and you have ${guess} guesses left`)
    }
    else if(n<rand){
        alert("Your Entered Number Is Less Than The Gussing Number")
        guess--
        alert(`Try Again and you have ${guess} guesses left`)
    }
}
if(guess>=90){
    alert(`Outstanding Guess!!! the number was ${rand}`)
}
else if((guess>=80)&&(guess<90)){
    alert(`Excellient Guess!!! the number was ${rand}`)
}
else if((guess>=70)&&(guess<80)){
    alert(`Best Guess!!! the number was ${rand}`)
}
else if((guess>=60)&&(guess<70)){
    alert(`Better Guess!!! the number was ${rand}`)
}
else if((guess>=50)&&(guess<60)){
    alert(`Good Guess!!! the number was ${rand}`)
}
else if((guess>=40)&&(guess<50)){
    alert(`Average Guess!!! the number was ${rand}`)
}
else if(guess<40){
    alert(`Dull Guess!!! the number was ${rand}`)
}
else{
    alert("You have health issues go and learn BA CS not for you!")
}