import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question(`What's your name? `);
  console.log(
    `${name}, choose the game:\nbrain-calc\nbrain-even\nbrain-gcd\nbrain-prime\nbrain-progression`
  );
};
