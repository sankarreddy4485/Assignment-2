import React from 'react'
import { useParams,useState } from 'react-router'
import questionsarr from '../Services/Questions'
const SingleQuestion = () => {
    // const [currentQuestion, setCurrentQuestion] = useState(0);
    console.log(useParams);
    const { questionId } = useParams();
    const question = questionsarr.find((question) => question.questionId === questionId);
  return (
    <>
    <section className='section'>
      <div className='questions'>
        <h1>
          Question {question.questionId}/{questionsarr.length}
        </h1>
        <p>{question.questionText}</p>

      </div>
    </section>
    </>
  )
}

export default SingleQuestion