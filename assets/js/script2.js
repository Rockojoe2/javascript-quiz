var userHighScore = document.getElementById("user-high-score");
var initials = "";


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