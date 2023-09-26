import readlineSync from 'readline-sync';

export default (gameTask, createdQuestionAndAnswer) => {
  const roundCount = 3;
  console.log(gameTask);

  for (let i = 1; i <= roundCount; i++) {
    const [question, correctAnswer] = createdQuestionAndAnswer();
    console.log(question);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer !== correctAnswer) {
      console.log(
        `It's wrong answer!(Correct answer: ${correctAnswer})\nLet's try again`
      );
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations!`);
};
