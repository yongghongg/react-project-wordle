import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Form from '../Form/Form';
import Display from '../Display/Display'

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  return (
    <>
      <Display guesses={guesses} answer={answer}/>
      <Form guesses={guesses} setGuesses={setGuesses} answer={answer}/>
    </>
  )
}

export default Game;
