import './App.css';
import { useEffect, useState } from 'react';

import { ALL_QUESTIONS } from './constants.js';

function App() {

  const [questions, setQuestions] = useState([]);
  const [currQuestion, setCurrQuestion] = useState('');

  useEffect(() => {
    selectQuestion();
  }, [questions]);

  const selectQuestion = () => {
    const index = Math.floor(Math.random() * questions.length);
    setCurrQuestion(questions[index]);
    questions.splice(index, 1);
    if (questions.length === 0) {
      setCurrQuestion('');
    }
  }

  const newGame = () => {
    setQuestions([...ALL_QUESTIONS]);
  }

  console.log(questions)
  console.log(currQuestion);

  return (
    <div className="App">
      {
        questions.length === 0 && (
          <div className="card start">
            <div className="logo">
              <div>
                <p className="title">AKYT?</p>
                <p className="title">(askit)</p>
              </div>
            </div>
            <div className="description">
              <div>
                <p className="description-text"> A couple's question game inspired by our relationship. Created by Anthony and Yutong. Happy 6 months babe!</p>
                <button className="btn new-game" onClick={newGame}>New Game</button>
              </div>
            </div>
          </div>
        )
      }
      {
        questions.length > 0 && (
          <div className="card flip-horizontal-bottom">
            <p className="question">{currQuestion}</p>
            <button className="btn bottom-right" onClick={selectQuestion}>Next</button>
          </div>
        )
      }
    </div>
  );
}

export default App;
