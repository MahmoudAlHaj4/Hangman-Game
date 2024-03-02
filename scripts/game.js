const randomWords = ["helol", "bye", "Welcome"];
const randomIndex = Math.floor(Math.random() * randomWords.length);
const Word = randomWords[randomIndex];



let dashes = document.getElementById("answer-section")
 

let dashedWord = '';

for (let i = 0; i < Word.length; i++) {

    dashedWord += '-';
}
dashes.innerHTML = dashedWord;