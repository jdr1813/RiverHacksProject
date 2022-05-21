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
    questionCount++;
    newAnswer.type = "text";
    newAnswer.id = `answer${questionCount}`;
    newAnswer.required = true;
    newAnswer.placeholder = "Answer here";
    let parent = document.getElementById("answers-container");
    parent.appendChild(newAnswer);
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
    correctAnswers = ["fizzbuzz", "20", "9"];
    answerText = answer.value.toLowerCase();
    if (answerText == correctAnswers[questionCount]) {
      answer.style.color = "green";
    } else {
      answer.style.color = "red";
    }
  }
};

// const makeReadOnly = () => {
//   if (questionCount == 1) {
//     document.getElementById("answer" + questionCount).makeReadOnly;
//   }
// };

const checkForEmpty = () => {
  if (document.getElementById(`answer${questionCount}`).value == "") {
    alert("Enter a value");
  }
};
