const randomWords = ["helol", "bye", "Welcome"];
const randomIndex = Math.floor(Math.random() * randomWords.length);
const Word = randomWords[randomIndex];



let dashes = document.getElementById("answer-section")
 

let dashedWord = '';

for (let i = 0; i < Word.length; i++) {

    dashedWord += '-';
}
dashes.innerHTML = dashedWord;

const letter = document.querySelector(".letters");

letter.addEventListener("click", function (event) {
    if (event.target.classList.contains("letter")) {
        const clickedLetter = event.target.textContent.toLowerCase();
        console.log("Letter:", clickedLetter);
        console.log("Word:", Word);
    }
});