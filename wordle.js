const validWords = ["hello", "world"];
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
let row = document.getElementsByClassName("letterOne")
function retrieveWord() {
 //******************** */   
    submit.addEventListener("click", function(){
        
        let chosen = word.value;
        let wordArr = chosen.split("");
        
        for (const letter in wordArr) {
        row[letter].textContent = wordArr[letter];

        if (wordArr[letter] === theWordString[letter]) {
            row[letter].classList.add("sameLetterSamePlace");
        }
        else if (theWordString.includes(wordArr[letter])) {
            row[letter].classList.add("letterExists");
        }
        else { continue }
        }
    })

}
retrieveWord();