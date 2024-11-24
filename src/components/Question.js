// src/components/Question.js
import React, { useState } from 'react';
import './Question.css';

const Question = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="question-container">
      <div className="question-header" onClick={toggleAnswer}>
        <h3>{question}</h3>
        <span>{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && <div className="answer">{answer}</div>}
    </div>
  );
};

export default Question;
