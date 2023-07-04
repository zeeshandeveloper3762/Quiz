import React from 'react'

const ShowResult = ({score, totalScore, tryAgain}) => {
  return (
    <>
    <div className='show-score'>
      <p>your score : {score} </p>
      <p>Total score : {totalScore}</p>
    </div>
    <button id="next-button" onClick={tryAgain}> Play Again</button>

    </>

  )
}

export default ShowResult