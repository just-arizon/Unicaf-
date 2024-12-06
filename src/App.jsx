import { useState } from 'react'




  //Button Component
  const Button = (props) => {
    const {handleClick, text} = props
    return(
      <button onClick={handleClick}>{text}</button>
    )
  }

function App() {
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)

  // HandleClick Functions
  const handleClickGood = () => {
    const updatedFeedback = good + 1
    setGood(updatedFeedback)
    setAll(updatedFeedback + neutral + bad)
    
    
  }
  const handleClickBad = () => {
    const updatedFeedback = bad + 1
    setBad(updatedFeedback)
    setAll(good + neutral + updatedFeedback)
    

    
  }
  const handleClickNeutral = () => {
    const updatedFeedback = neutral + 1
    setNeutral(updatedFeedback)
    setAll(good + updatedFeedback + bad)
    
    
  }

  return (
    <>
      <h1>give feedback</h1>
      
      {/* button components*/}
      <Button handleClick={handleClickGood} text='good'/>
      <Button handleClick={handleClickNeutral} text='neutral'/>
      <Button handleClick={handleClickBad} text='bad'/>


      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
    </>
  )
}

export default App
