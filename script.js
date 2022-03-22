let width = 5; //the amount of collumns, and also letters per word 
let height = 6; // the amount of rows and also the amount of attempts in the game

let row = 0; //current position regarding attempts
let column = 0; // current position regarding the letter I am in for that attempt 

let gameStatus = false //you always want to define that the game is not over, and then it will be over 

let currentWord = "hello";


let submit = document.getElementById("submit");
let wordTyped = document.getElementById("word");

console.log(wordTyped);

function buttonClicked() {
submit.addEventListener("click", function() {
   wordArray =  wordTyped.value.split("");
   if (wordArray.length === 5) {
        runUpdate();
   }
   else {
       alert("try again");
   }
});
}

function runUpdate() {
    for (const charecter in wordArray) {
        letter = wordArray[charecter];
    }
    
    let correct = 0;
    for (const c in width) {
        let currentTile = document.getElementById(row.toString() + "-" + column.toString());

    }

}
