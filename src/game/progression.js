#!/usr/bin/env node
import getRandomNumber from '../utils.js';
import gamesBase from '../index.js';

const gameTask = `Complete arithmetic progression`;

const createProgression = (start, diff) => {
  const progression = [];
  for (let i = 0; i <= 10; i++) {
    progression.push(start + diff * i);
  }
  return progression;
};

const createdQuestionAndAnswer = () => {
  const number = getRandomNumber(0, 100);
  const difference = getRandomNumber(1, 10);
  const progression = createProgression(number, difference);
  let correctAnswer = progression[getRandomNumber(0, 9)];
  progression[progression.indexOf(correctAnswer)] = '..';
  correctAnswer = correctAnswer.toString();
  const question = progression.join(' ');
  return [question, correctAnswer];
};
export default () => gamesBase(gameTask, createdQuestionAndAnswer);
