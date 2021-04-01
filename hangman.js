// class
class HangMan {
  // fire new construct
  constructor(word) {
    this.word = word.toLowerCase().split("");
    this.remainingGuess = word.length + 3;
    this.guess = [];
    this.score = 0;
    this.gameStatus = "still play";
  }
  makeGuess(letter) {
    if (this.gameStatus === "still play") {
      let l1 = this.word.length;
      this.word = this.word.filter((w) => {
        return w != letter;
      });
      let l2 = this.word.length;
      if (l1 == l2) {
        this.remainingGuess -= 1;
        if (this.remainingGuess == 0) this.gameStatus = "loser";
      } else {
        // this.word.splice(ind,1)
        this.score += l1 - l2;
        if (this.word.length == 0) this.gameStatus = "win";
      }
    }
  }
}
