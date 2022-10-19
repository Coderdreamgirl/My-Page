/*Add your JavaScript here*/
//variable for adventure and romantic score//
var advScore = 0;
var romScore = 0;

//question number values, keeps the number value of how many questions are answered
var questionCount = 0;

//getting elements addressed and linked thru DOM method.
var result = document.getElementById("result")

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
//end of the dom method

//listen for click, and call functions
q1a1.addEventListener("click", adventure);
q1a2.addEventListener("click", romantic);

q2a1.addEventListener("click", adventure);
q2a2.addEventListener("click", romantic);

q3a1.addEventListener("click", romantic);
q3a2.addEventListener("click", adventure)

q4a1.addEventListener("click", romantic);
q4a2.addEventListener("click", adventure);

q5a1.addEventListener("click", adventure);
q5a2.addEventListener("click", romantic);

function romantic(){
  romScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + "romScore = " + romScore);
  if (questionCount == 5) {
  console.log("The quiz is done");
    updateResult();
}
}

function adventure(){
  advScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + "advScore = " + advScore);
  if (questionCount == 5) {
  console.log("The quiz is done");
  updateResult();
  }
}
function updateResult(){
  if (advScore >= 3){
    result.innerHTML = "You are an Adventurous person!!! "
    console.log("You are an adventurous person!!!!");
    }else if (romScore >= 3){
    result.innerHTML = "You are a Romantic person"
    console.log("You are a cat person!!!!");
    }
}




