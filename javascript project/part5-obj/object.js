const max=prompt("enter maximum number");
const random=Math.floor(Math.random()*max)+1;
let guess =prompt("guess the number");
while(true){
    if(guess=="quit"){
        console.log("game quit");
        break;
    }
    else if (guess == random){
        console.log("you guessed it right");
        break;
    }
    else if(guess<random){
   guess= prompt("hint:your guess is to small try again")
    }else{
        guess=prompt("hint:your guess is big try again")
    }
}