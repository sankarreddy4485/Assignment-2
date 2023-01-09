import React, { useState,useNavigate } from 'react'
import questionsarr from '../Services/Questions'
const Question = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
 
  const handleClick = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questionsarr.length) {
      setCurrentQuestion(nextQuestion);
      
    } 
  };
  return (
    <>
    <section className='section'>
      <div className='questions'>
        <h1>
          Question {currentQuestion + 1}/{questionsarr.length}
        </h1>
        <p>{questionsarr[currentQuestion].questionText}</p>

      </div>
    </section>
   
     <section className='answer-section'>
     
      
       {questionsarr[currentQuestion].answerOptions.map((item) => (
              
              <p>{item.answerText}</p>))}
             

   </section>
   <button type='submit' className='btn-block' onClick={() => handleClick()}>
          Next
        </button>
   </>
  )
}

export default Question