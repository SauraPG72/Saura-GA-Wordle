# Saura-GA-Wordle
Wordle is a web-based word game created and developed by Welsh software engineer Josh Wardle, and owned and published by The New York Times Company since 2022.

# My features
Below is an example implementation of the duplicate algorithm in JavaScript:
```javascript
function update() {

    console.log(wordArr);

        if (wordArr.toString() == theWordString.toString()) {
            modalBox.classList.add("open");
            modalHeader.textContent = "You Win!!!";
            modalText.textContent = "Wanna play again?";
            let playAgain = document.createElement("button");
            playAgain.classList.add("playagain");
            playAgain.textContent = "Play Again?"
            modalText.appendChild(playAgain);
            playAgain.addEventListener("click", function() {
                location.reload();
            })
    }


    let letterCount = {}; //keep track of letter frequency, ex) HELLO -> {H:1, E:1, L:2, O: 1}
    for (let i in theWordString) {
        let theWordletter = theWordString[i];
        if (letterCount[theWordletter]) {
           letterCount[theWordletter] += 1;
        } 
        else {
           letterCount[theWordletter] = 1;
        }
    }

    console.log(letterCount);
   
    for (let letter in wordArr) {
        theRow[letter].textContent = wordArr[letter];
        let currentLetter = document.getElementById(wordArr[letter].toLowerCase());

        let letterCharecter = wordArr[letter];

        if (wordArr[letter] === theWordString[letter]) {
            theRow[letter].classList.add("sameLetterSamePlace");
            currentLetter.classList.add("sameLetterSamePlace");
            letterCount[letterCharecter] -= 1
        }
    }

    for (let letter in wordArr) {
            theRow[letter].textContent = wordArr[letter];
            let currentLetter = document.getElementById(wordArr[letter].toLowerCase());
            let letterCharecter = wordArr[letter];

            if (!theRow[letter].classList.contains("sameLetterSamePlace")) {
                if (theWordString.includes(wordArr[letter]) && letterCount[letterCharecter] > 0) {
            theRow[letter].classList.add("letterExists");
            currentLetter.classList.add("letterExists");
            letterCount[letterCharecter] -= 1;
                }   
            else { 
                theRow[letter].classList.add("incorrect");
                if (currentLetter) {
                currentLetter.classList.add("incorrect");
                }
                else {
                    alert("Not Valid")
                }
            }     
        }         
    }  
    console.log(letterCount);
}
```
Below is an example implementation of the modal dialogue in HTML then CSS:
```html
 <div id="result">
        <div id="modal">
            <button id="modal-button">Close</button>
            <h1 id="modal-header"></h1>
            <div id="modal-text">Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. Dolor esse sed, 
                eum dolorum laboriosam dicta minus, mollitia ea distinctio eiu
                s culpa repellendus nisi error ab sint expedita? 
                Quam, quas qui!</div>
            
        </div>
    </div>

```

```css 

#result {
    box-sizing: border-box;
    font-family: 'Fjalla One', sans-serif;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    pointer-events: none;
}
#result.open {
    pointer-events: auto;
    opacity: 1;
}

#modal {
    background-color: #fff;
    width: 400px;
    max-width: 100%;
    padding: 30px 50px;
    border-radius: 20px;
    margin-left: 150px;
    
}

#modal-button {
    font-family: 'Fjalla One', sans-serif;
    text-decoration: dashed;
    float: right;
    width: 40px;
    height: 40px;
    border-radius: 20px;
}

#modal-text {
    display: flex;
    justify-content: center;
    margin: auto;
}
.playagain {
    display: flex;
    justify-content: center;
    font-family: 'Fjalla One', sans-serif;
    text-decoration: dashed;
    margin: auto;
}

```

