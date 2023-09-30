import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

function Display({guesses, answer}) {
  return (
    <div className='guess-results'>
      {
        range(0, NUM_OF_GUESSES_ALLOWED).map((_, row) => {
          const result = guesses.length > row ? checkGuess(guesses[row], answer) : [];
          return (
            <p className='guess' key={row}>
              {
                range(0, 5).map((_, ind) => {
                  if (guesses.length > row) {
                    return (
                      <span className={`cell ${result[ind].status}`} key={ind}>
                        {guesses[row][ind]}
                      </span>
                    )
                  } else {
                    return <span className='cell' key={ind}></span>
                  }
                })
              }
            </p>
        )})
      }
    </div>
  );
}

export default Display;
