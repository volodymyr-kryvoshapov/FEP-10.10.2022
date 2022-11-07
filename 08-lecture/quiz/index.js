const RIGHT_ANSWER = 10;
const WRONG_ANSWER = 0;
const QUIZ = [
  {
    question: 'Сколько хромосом у здорового человека?',
    answer: '46',
    ask: getAnswerString,
  },
  {
    question: 'Путин - хуйло?',
    answer: true,
    ask: getAnswerBoolean,
  },
  {
    question: 'Сколько хромосом у Путина?',
    answer: '47',
    ask: getAnswerString,
  },
];

let score = runQuiz(QUIZ);

alert(score);


function runQuiz(questions) {
  let score = WRONG_ANSWER;

  for (const {question, answer, ask} of questions) {
    if (ask(question) === answer) {
      score += RIGHT_ANSWER;
    }
  }

  return score;
}

function getAnswerString() {
  return prompt; // nice modal window
}

function getAnswerBoolean() {
  return confirm; // nice modal window
}