#!/usr/bin/env node
import getRandomNumber from '../utils.js';
import gamesBase from '../index.js';

const gameTask = `Is number prime? Write 'yes' or 'no' `;

const isPrime = (number) => {
  if (number <= 1) {
    return true;
  }
  for (let i = 2; i <= number / 2; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const createdQuestionAndAnswer = () => {
  const number = getRandomNumber(0, 100);
  const question = number.toString();
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};
export default () => gamesBase(gameTask, createdQuestionAndAnswer);
