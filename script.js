/*Add your JavaScript here*/

var morningScore = 0; //   Store the morning score
var nightScore = 0; // Store the night score

var questionCount = 0; // Store the number of answers clicked on

// // Store HTML elements using the DOM
var result = document.getElementById("result");
var displayResult = document.getElementById("displayResult");
var restart = document.getElementById("restart");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");


// Listen for click on answer buttons and call function if clicked
q1a1.addEventListener("click", morning);
q1a2.addEventListener("click", night);

q2a1.addEventListener("click", night);
q2a2.addEventListener("click", morning);

q3a1.addEventListener("click", morning);
q3a2.addEventListener("click", night);

// Listen for click on restart button and call function if clicked
restart.addEventListener("click", restartQuiz);

// Track morning score and check if quiz is complete
function morning() {
morningScore += 1;
questionCount += 1;

  console.log("questionCount = " + questionCount + "morningScore = " + morningScore);


  if (questionCount == 3) {
  console.log("The quiz is done!")
    updateResult();
    
}
  
}

// Track night score and check if quiz is complete
function night() {
  nightScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + "nightScore = " + nightScore);

if (questionCount == 3) {
  console.log("The quiz is done!")
  updateResult();
     
} 
}

// Update quiz results
function updateResult(){
     if (morningScore >= 2){
       result.innerHTML = "You are a morning person!";
          console.log("You are a morning person!");
          } else if (nightScore >= 2){
        result.innerHTML = "You are a night person!";
          console.log("You are a night person!");
          }  
}

// Restart quiz
function restartQuiz() {
  result.innerHTML = "You are a...";
  questionCount = 0;
  morningScore = 0;
  nightScore = 0;
  console.log("questionCount = " + questionCount + "\t" + "nightScore = " + nightScore + "\t" + "morningScore = " + morningScore);
  enableQuestions();
}