import { useState } from "react";

//Button Component
const Button = (props) => {
  const { handleClick, text } = props;
  return <button onClick={handleClick}>{text}</button>;
};

// Statistic Component
const Statistics = (props) => {
  console.log("properties are", props);

  const { good, neutral, bad, all, average, positive } = props;
  
  if(props.all == 0){
    return(
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  } 
  return (

    <>
      <h1>statistics</h1>
        <table>
          <tr>good {good}</tr>
          <tr>neutral {neutral}</tr>
          <tr>bad {bad}</tr>
          <tr>all {all}</tr>
          <tr>average {average}</tr>
          <tr>positive {positive}</tr>
        </table>
    </>
  );
};

function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  // Average Function
  const updateAverage = (updatedGood, updatedNeutral, updatedBad) => {
    const updatedAll = updatedGood + updatedNeutral + updatedBad;
    setAll(updatedAll);

    if (updatedAll === 0) {
      setAverage(0);
    } else {
      const avg = (updatedGood - updatedBad) / updatedAll;
      setAverage(avg);

      // positive Function
      const positive = (updatedGood / updatedAll) * 100;
      setPositive(positive);
    }
  };

  // HandleClick Functions
  const handleClickGood = () => {
    const updatedGood = good + 1;
    updateAverage(updatedGood, neutral, bad);
    setGood(updatedGood);
  };
  const handleClickBad = () => {
    const updatedBad = bad + 1;
    updateAverage(good, neutral, updatedBad);
    setBad(updatedBad);
  };
  const handleClickNeutral = () => {
    const updatedNeutral = neutral + 1;
    updateAverage(good, updatedNeutral, bad);
    setNeutral(updatedNeutral);
  };

  return (
    <>
      <h1>give feedback</h1>

      {/* button components*/}
      <Button handleClick={handleClickGood} text="good" />
      <Button handleClick={handleClickNeutral} text="neutral" />
      <Button handleClick={handleClickBad} text="bad" />
      {/* Statistics */}
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        average={average}
        all={all}
        positive={positive}
      />
    </>
  );
}

export default App;
