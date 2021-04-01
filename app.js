// get from document
const myWord = document.querySelector("#word");
const newGameBtn = document.querySelector("#newGame");
const myGuess = document.querySelector("#myGuess");

getApiData((word, err) => {
  function newGame() {
    newGameBtn.classList.add("d-none");
    // create new class game
    h1Class = new HangMan(word);
    console.log(h1Class);
    myWord.innerHTML = `<h3>word : ${word}</h3>`;
  }
  // handle error
  if (err) {
    console.error(err);
  } else {
    // create new class game
    h1Class = new HangMan(word);
    // display to DOM inside myWord div
    myWord.innerHTML = `<h3>word : ${word}</h3>`;
    myGuess.innerHTML = ` <h4>Score: ${h1Class.score} <br/> remaining guses: ${h1Class.remainingGuess} <br/>game status: ${h1Class.gameStatus}</h4>`;
    console.log(h1Class);

    window.addEventListener("keypress", (e) => {
      // used function inside h1Class
      console.log(e.key);
      h1Class.makeGuess(e.key);
      console.log(h1Class);
      myWord.innerHTML = `<h3>word : ${word}</h3>`;

      if (h1Class.gameStatus == "loser") {
        myGuess.innerHTML = `<br/><div class="alert alert-danger role="alert"">Loser!</div>`;
        newGameBtn.classList.remove("d-none");
      } else if (h1Class.gameStatus == "win") {
        newGameBtn.classList.remove("d-none");
        myGuess.innerHTML = `<br/><div class="alert alert-success role="alert"">Win!</div>`;
      } else {
        myGuess.innerHTML = ` <h4>Score: ${h1Class.score} <br/> remaining guses: ${h1Class.remainingGuess} `;
      }
    });
  }
  newGameBtn.addEventListener("click", newGame);
});
