import React from 'react';

const Quiz = ({ questions }) => {
  if (!questions || questions.length === 0) {
    return <p>No questions available.</p>;
  }

  return (
    <div>
      <h2>Quiz</h2>
      {questions.map((question, index) => (
        <div key={index}>
          <h3>{question.question}</h3>
          {question.options.map((option, i) => (
            <div key={i}>
              <input type="radio" id={`${index}-${i}`} name={`question-${index}`} />
              <label htmlFor={`${index}-${i}`}>{option}</label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Quiz;
