import React, { useState } from "react";
import './App.css';

const questions = [
  { question: "What is the capital of India?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"], answer: "Delhi" },
  { question: "Who developed React?", options: ["Google", "Facebook", "Twitter", "Microsoft"], answer: "Facebook" },
  { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Creative Style System", "Color Style Sheet", "Cool Sheet Style"], answer: "Cascading Style Sheets" },
  { question: "Which keyword is used to declare a constant in JavaScript?", options: ["let", "var", "const", "static"], answer: "const" },
  { question: "Which method is used to add an element at the end of an array in JavaScript?", options: ["push()", "pop()", "shift()", "unshift()"], answer: "push()" },
  { question: "How do you write an arrow function in JS?", options: ["function() =>", "() => {}", "{} => ()", "() =>"], answer: "() => {}" },
  { question: "Which hook is used to manage state in a functional React component?", options: ["useState", "useEffect", "useContext", "useRef"], answer: "useState" },
  { question: "What is JSX?", options: ["A JavaScript XML syntax", "A JSON format", "Java Standard XML", "Just XML"], answer: "A JavaScript XML syntax" },
  { question: "Which lifecycle method is used to fetch data in class components?", options: ["componentDidMount", "componentWillMount", "useEffect", "getDerivedStateFromProps"], answer: "componentDidMount" },
  { question: "What does 'useEffect' hook do?", options: ["Performs side effects in function components", "Updates DOM directly", "Adds styles", "Handles state"], answer: "Performs side effects in function components" },
  { question: "What is the default port for React development server?", options: ["3000", "8000", "5000", "8080"], answer: "3000" },
  { question: "Which attribute in HTML is used to include JavaScript code?", options: ["<script>", "<style>", "<js>", "<link>"], answer: "<script>" },
  { question: "Which function converts JSON to JavaScript object?", options: ["JSON.parse()", "JSON.stringify()", "JSON.toObject()", "JSON.convert()"], answer: "JSON.parse()" },
  { question: "How do you pass props in React?", options: ["Using attributes in JSX", "Using Redux", "Using Context API", "Using DOM"], answer: "Using attributes in JSX" },
  { question: "Which keyword is used to define a class in JavaScript?", options: ["class", "object", "function", "define"], answer: "class" },
  { question: "Which React hook is used to refer to DOM elements?", options: ["useRef", "useState", "useDOM", "useCallback"], answer: "useRef" },
  { question: "Which method is used to convert an object to JSON string?", options: ["JSON.stringify()", "JSON.parse()", "toString()", "object.toJSON()"], answer: "JSON.stringify()" },
  { question: "What is the correct way to import React in a file?", options: ["import React from 'react';", "import 'react';", "require('React')", "include React"], answer: "import React from 'react';" },
  { question: "Which array method removes the last element?", options: ["pop()", "push()", "shift()", "unshift()"], answer: "pop()" },
  { question: "Which command creates a new React app?", options: ["npx create-react-app myApp", "react-new myApp", "npm react-create", "create-react myApp"], answer: "npx create-react-app myApp" }
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app" style={{ 
      backgroundImage: 'url(https://images.unsplash.com/photo-1503676260728-1c00da094a0b)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'sans-serif',
      padding: '20px'
    }}>
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '15px', padding: '30px', maxWidth: '600px', width: '100%', textAlign: 'center' }}>
        {showScore ? (
          <div className="score-section">
            <h2 style={{ color: '#333' }}>You scored {score} out of {questions.length}</h2>
            <p style={{ marginTop: '10px' }}>Great job!</p>
          </div>
        ) : (
          <div className="question-section">
            <h2 style={{ marginBottom: '20px', color: '#222' }}>{questions[currentQuestion].question}</h2>
            <div className="answer-section">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerOptionClick(option)}
                  style={{
                    margin: '10px 0',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '10px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    cursor: 'pointer',
                    width: '100%',
                    fontSize: '16px'
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;