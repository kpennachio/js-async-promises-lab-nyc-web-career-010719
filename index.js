const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;
let questionContainer = document.querySelector(".question-container")
// console.log(questionContainer)
// console.log(questions)

function appendQuestion(question) {
  questionContainer.innerHTML = question["questionText"]
}

function askQuestionThen(time) {
  question = questions[0]
  appendQuestion(question)
  return new Promise(function(resolve) {
    setTimeout(function () {
      resolve(question)
    }, time)
  })
}


function removeQuestion() {
  return new Promise(function() {
      questionContainer.innerHTML = ""
      toggleTrueAndFalseButtons()
  })
}

function askQuestionThenRemoveQuestion(time) {
  return askQuestionThen(time).then(removeQuestion)
}

function trueAndFalseButtons() {
  return document.querySelector(".true-false-list").querySelectorAll(".btn")
}

function toggleTrueAndFalseButtons() {
  trueAndFalseButtons().forEach(button => button.classList.toggle("hide"))
}

function displayQuestionOnClick() {
  button = document.querySelector("a")
  button.addEventListener("click", function () {
    toggleTrueAndFalseButtons()
    askQuestionThenRemoveQuestion(10000)
  })
}
