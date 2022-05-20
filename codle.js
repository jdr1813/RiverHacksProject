let questionCount = 0;

const imgHandler = () => {
  validIMGs = ["fizz.png", "list.png", "tricky.png"];
  let img = document.getElementById("q");
  img.src = validIMGs[questionCount];
};

const addNewAnswerField = () => {
  if (checkGameCount() == true) {
    let newAnswer = document.createElement("input");
    newAnswer.type = "text";
    newAnswer.id = "answer";
    newAnswer.placeholder = "Answer here";
    let parent = document.getElementById("answers-container");
    parent.appendChild(newAnswer);
    questionCount++;
  }
};

const checkGameCount = () => {
  if (questionCount < 2) {
    return true;
  }
  return false;
};
