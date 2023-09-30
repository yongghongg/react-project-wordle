import React from 'react';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Form({guesses, setGuesses, answer}) {

  const [input, setInput] = React.useState('');
  const [winStatus, setWinStatus] = React.useState(false);

  const checkResult = (guess) => {
    const result = checkGuess(guess, answer);
    for (row of result) {
      if (row.status == 'incorrect' || row.status == 'misplaced') return;
    }
    setWinStatus(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input == '') return;
    const newGuesses = [...guesses];
    newGuesses.push(input);
    setGuesses(newGuesses);
    checkResult(input);
    setInput('');
  }

  return (
    <form 
      className="guess-input-wrapper"
      onSubmit={(e) => handleSubmit(e)}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        id="guess-input" 
        type="text" 
        value={input}
        minLength={5}
        maxLength={5}
        disabled={guesses.length >= NUM_OF_GUESSES_ALLOWED || winStatus}
        onChange={(e) => {
          setInput(e.target.value.toUpperCase());
        }}
      />
      {
        winStatus ? (
          <div class="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {guesses.length} guesses</strong>.
          </p>
          </div>
        ) : guesses.length >= NUM_OF_GUESSES_ALLOWED && ( 
          <div class="sad banner">
            <p>Sorry, the correct answer is <strong>LEARN</strong>.</p>
            </div>
        )
      }
    </form>
  );
}

export default Form;
