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
let wrongLetter = 0

letter.addEventListener("click", function (event) {
    if (event.target.classList.contains("letter")) {
        const clickedLetter = event.target.textContent.toLowerCase();
        console.log("Letter:", clickedLetter);
        console.log("Word:", Word);
        const letterInWord = Word.toLowerCase().includes(clickedLetter)
        console.log("letter in word is:" , letterInWord)

        if(letterInWord == true){
            for (let i = 0; i < Word.length; i++) {
            const currentLetter = Word[i].toLowerCase();

        if (currentLetter === clickedLetter) {
            dashedWord = dashedWord.substring(0, i)  + clickedLetter + dashedWord.substring(i + 1);
            dashes.innerHTML = dashedWord;
        }
        
        }
        }
        else if(letterInWord == false){
            wrongLetter +=1 
            console.log(wrongLetter)
            head()
            if(wrongLetter == 2){
                console.log(wrongLetter)
                body()
            }
            else if(wrongLetter == 3){
                console.log(wrongLetter)
                leftHand()

            }
            else if(wrongLetter == 4){
                console.log(wrongLetter)
                rightHand()

            }
            else if(wrongLetter == 5){
                console.log(wrongLetter)
                leftLeg()

            }
            else if(wrongLetter == 6){
                console.log(wrongLetter)
                rightLeg()
                
            }
            else if(wrongLetter == 7){
                
                alert("you lost")
            }
        }
    }
});