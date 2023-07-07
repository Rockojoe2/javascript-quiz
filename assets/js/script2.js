//Script 2 page for the second index.html, the high score page.

var userHighScore = document.getElementById("user-high-score");
var initials = "";


//Function to show the previous score by retrieving it from the local storage.

function receivedHighScore(){

    var storedHighScore = JSON.parse(localStorage.getItem("userScore"));

    if(storedHighScore !== null){

        document.getElementById("initials").innerHTML = storedHighScore.initials;
        document.getElementById("user-high-score").innerHTML = storedHighScore.score;
        // highScore = storedHighScore;
        // userHighScore.textContent = highScore;
        // console.log(highScore);
    }
  }

  receivedHighScore();