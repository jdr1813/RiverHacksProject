let questionCount = 0;

const imgHandler = () => {
  validIMGs = ["fizz.png", "list.png", "tricky.png"];
  let img = document.getElementById("q");
  img.src = validIMGs[questionCount];
};

const addNewAnswerField = () => {
  let oldAnswer = document.getElementById(`answer${questionCount}`);
  if (checkGameCount() && oldAnswer.value != "") {
    let newAnswer = document.createElement("input");
    let newForm = document.createElement("form");
    questionCount++;
    newForm.id = `myForm${questionCount}`;
    newForm.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    newAnswer.type = "text";
    newAnswer.id = `answer${questionCount}`;
    newAnswer.required = true;
    newAnswer.placeholder = "Answer here";
    let parent = document.getElementById("answers-container");
    newForm.appendChild(newAnswer);
    parent.appendChild(newForm);
  }
  oldAnswer.setAttribute("readonly", true);
};

const checkGameCount = () => {
  if (questionCount < 2) {
    return true;
  }
  return false;
};

const validateAnswer = () => {
  let answer = document.getElementById(`answer${questionCount}`);
  if (answer.value != "") {
    correctAnswers = ["fizzbuzz", "9", "20"];
    answerText = answer.value.toLowerCase();
    if (answerText == correctAnswers[questionCount]) {
      answer.style.color = "green";
    } else {
      answer.style.color = "red";
    }
  }
};

const checkForEmpty = () => {
  if (document.getElementById(`answer${questionCount}`).value == "") {
    alert("Enter a value");
  } else {
    return;
  }
};

document.addEventListener("submit", (e) => {
  e.preventDefault();
  checkForEmpty();
  validateAnswer();
  addNewAnswerField();
  imgHandler();
});