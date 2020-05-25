//get random number from 1 to 6
//deduct chance on every submit
//show message dynamically

//selectors
//button submit
let chance = 4;
let rightAnswer = 0;

let displayMessage = document.querySelector(".display-message");
let answer = document.querySelector(".answer");
const submitForm = document.querySelector("form");
const userInput = document.querySelector('input[type="number"]');
let guess = document.querySelector(".guess");
let button = document.querySelector('input[type="submit"]');
let dynamicDangerClass = "alert-danger";
//event on submit

let randomNumber = Math.floor(Math.random() * 6 + 1);
console.log(randomNumber);
submitForm.addEventListener("submit", function (e) {
  e.preventDefault();
  checkAns();

  if (chance < 0) {
    return;
  } else {
    guess.textContent = `Guess Left: ${chance}/5`;
  }

  checkRandomGuess();
  console.log(chance);
  chance--;
});

// function validateMessage() {}
//get user input
function getUserInput() {
  return parseInt(userInput.value);
}

function checkRandomGuess() {
  if (userInput.value === "" || getUserInput() > 6 || getUserInput() < 1) {
    // validateMessage();
    alert("Please enter a valid number...");
  }

  if (getUserInput() === randomNumber) {
    rightAnswer++;

    if (rightAnswer > 5) {
      return;
    } else {
      answer.textContent = `Right Answer: ${rightAnswer} / 5 `;
    }
  } else {
    console.log("you loose");
    console.log(randomNumber, typeof getUserInput());
  }
}

function showSuccess() {
  displayMessage.classList = dynamicDangerClass;
  let innerMessage = document.createElement("div");
  innerMessage.innerHTML = `
      <div class="alert alert-success " role="alert">
       Congratulation You Won the game!!!
      </div>
      `;
  displayMessage.appendChild(innerMessage);

  displayMessage.display = "none";
  // displayMessage.remove(displayMessage);
}

function showDanger() {
  displayMessage.classList = dynamicDangerClass;
  let innerMessage = document.createElement("div");
  innerMessage.innerHTML = `
      <div class="alert alert-danger " role="alert">
       Sorry You Lost The Game!!!
      </div>
      `;
  displayMessage.appendChild(innerMessage);

  displayMessage.display = "none";
  // displayMessage.remove(displayMessage);
}

// displayMessage.classList = dynamicDangerClass;
// function newMessage() {
//     let innerMessage = document.createElement("div");
//     innerMessage.innerHTML = `
//       <div class="alert alert-danger " role="alert">
//         Sorry you loose!!!
//       </div>
//       `;
//     return displayMessage.appendChild(innerMessage);

//   setTimeout(() => {
//     // displayMessage.display = "none";
//     // displayMessage.remove(displayMessage);
//    displayMessage.className = 'none'
//   }, 2000);

// }

function checkAns() {
  if (rightAnswer >= 2 && chance <= 0) {
    // alert("right");
    // setTimeout(() => {}, 1000);
    showSuccess();
    button.setAttribute("disabled", "true");

    setTimeout(() => {
      alert("Refresh the page to play the game again");
    }, 2000);
  } else if (rightAnswer <= 2 && chance <= 0) {
    showDanger();
    button.setAttribute("disabled", "true");
    setTimeout(() => {
      alert("Refresh the page to play the game again");
    }, 2000);
  }
  console.log(rightAnswer);
}
// showMessage()
