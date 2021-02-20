var questionOptions = 65;
var givenAnswer;
var position;
var score = 0;

function questionConstructor(questionItself, answers, correctAnswer){
    this.questionItself = questionItself;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
};
var firstQuestion = new questionConstructor("Is js the coolest?", ["Yes", "No", "Perhaps"], "A");
var secondQuestion = new questionConstructor("Who is your teacher?", ["Me", "You"], "A");

var questionArray = [firstQuestion, secondQuestion];

function randomizer(){
  position = Math.round(Math.random())*1;
  var counter = questionArray[position].answers.length;
    console.log(questionArray[position].questionItself);
    for (var i = 0; i < counter; i++){
      var questionLetter = String.fromCharCode(questionOptions);
        console.log(questionLetter + ": " + questionArray[position].answers[i]);
      questionOptions ++;
    
    };
    givenAnswer = prompt("What's your answer?");
     
};

function checkAnswer() {
    console.log(typeof givenAnswer);
    console.log(typeof questionArray[position].correctAnswer);
    if (givenAnswer === questionArray[position].correctAnswer) {
        score++;
        console.log("Correct! \nScore is now: " + score);
    } else {
        console.log("Wrong!\n Score is now: " + score);
    }
};

while ("exit" !== givenAnswer) {
    questionOptions = 65;
    randomizer();
    checkAnswer();
};