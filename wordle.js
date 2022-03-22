const validWords = ["hello"];
//************** */
function wordString() {
    const randomIndex = Math.floor(Math.random() * validWords.length);
    const chosenWord = validWords[randomIndex];
    theWordString = chosenWord.split("");
    console.log(theWordString);
    return theWordString;
}
wordString();
//************** */
let word = document.getElementById("word");
let submit = document.getElementById("submit");
let theRow = document.getElementsByClassName("1");
let rowNumber = 0;
gameStatus = false;
 //******************** */ 
function updateRow() {
    
    rowNumber = rowNumber + 1;
    classAdd = rowNumber.toString();
    console.log(classAdd);
    theRow = document.getElementsByClassName(classAdd);
}




 //********* */
function retrieveWord() {
  
    submit.addEventListener("click", function(){
        
        chosen = word.value;
        wordArr = chosen.split("");
        
        if (wordArr.length !== 5) {
            alert("Not acceptable")
        }
        else {
            updateRow();
            update();
        }


    })
}
function update() {
    for (const letter in wordArr) {
        theRow[letter].textContent = wordArr[letter];

    if (wordArr[letter] === theWordString[letter]) {
        theRow[letter].classList.add("sameLetterSamePlace");
    }
    else if (theWordString.includes(wordArr[letter])) {
        theRow[letter].classList.add("letterExists");
    }
    else { continue }
    }  

}

retrieveWord();


