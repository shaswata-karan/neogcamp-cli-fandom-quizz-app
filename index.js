// quiz.mjs
import readlineSync from "readline-sync";
import chalk from "chalk";

let score = 0;

function welcome() {
  const userName = readlineSync.question("What's your name? ");
  console.log(
    chalk.bgYellowBright.black.bold(`Welcome ${userName} to the Quiz Game!`)
  );
}

function play(question, answer) {
  const userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("Right!"));
    score += 1;
  } else {
    console.log(
      chalk.red(`Wrong! The correct answer is: ${chalk.bold(answer)}`)
    );
  }
  console.log(chalk.blue("Current score: ", score));
  console.log(chalk.yellowBright("-------------"));
}

const questions = [
  {
    question: "What is the capital of France? ",
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet? ",
    answer: "Mars",
  },
  {
    question: "What is the largest mammal in the world? ",
    answer: "Blue Whale",
  },
  {
    question: "How many continents are there in the world? ",
    answer: "7",
  },
  {
    question: "What is the chemical symbol for gold? ",
    answer: "Au",
  },
];

function game() {
  for (let i = 0; i < questions.length; i++) {
    const currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);
  }
}

function showScores() {
  console.log(chalk.bgYellowBright.black.bold("YAY! You completed the quiz!"));
  console.log(
    chalk.bgBlueBright.black.bold(
      `Your final score is: ${score} out of ${questions.length}`
    )
  );
}

welcome();
game();
showScores();