import React, { useState } from 'react'
import { QuizData } from '../Data/QuizData'
import QuizResult from './QuizResult';


const Quiz = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selected, setSelected] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult]= useState(false);

    const changeQuetion = () => {
        updateScore();
        if (currentQuestion <QuizData.length-1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelected(0)

        }else{
            setShowResult(true)

        }
    }
    const updateScore = ()=>{
        if (selected===QuizData[currentQuestion].answer){
            setScore(score+1)

        }
    }

    const resetAll = ()=>{
        setCurrentQuestion(0)
        setScore(0)
        setSelected(0)
        setShowResult(false)
    }
    


    return (
        <>
            <p className="heading-txt">Quiz App</p>

            <div className="container">
                {showResult ?( <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll} />) 
                :( 
                <>
                <div className="question">
                    <span className='question-number'> {currentQuestion + 1} .</span>
                    <span className='question-txt'>{QuizData[currentQuestion].question}</span>
                </div>
                <div className="option-container">
                    {QuizData[currentQuestion].options.map((options, i) => {
                        return (
                            <button className={`option-btn ${selected==i+1?"checked": null}`}
                             key={i} onClick={()=>setSelected(i+1)}
                               >
                                {options}


                            </button>
                        )
                    })}

                </div>
                <input type="button" value='Next' id="next-button" onClick={changeQuetion} />
                </>)}


            </div>
        </>

    )
}

export default Quiz