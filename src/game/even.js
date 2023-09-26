#!/usr/bin/env node
import getRandomNumber from '../utils.js';
import gamesBase from '../index.js';

const gameTask = `Is number even? Write 'yes' or 'no' `;

const createdQuestionAndAnswer = () => {
  const number = getRandomNumber(0, 100);
  const question = number.toString();
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  return [question, correctAnswer];
};
export default () => gamesBase(gameTask, createdQuestionAndAnswer);
