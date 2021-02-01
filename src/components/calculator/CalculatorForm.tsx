import React, { useEffect, useState } from 'react';
import axios from 'axios'

export default function CalculatorForm() {
    const [prob, setProb] = useState("1")
    const [occ, setOcc] = useState("0")
    const [outcome, setOutcome] = useState("")
    const [error, setError] = useState("")


    useEffect(() => {
        console.log('effected')
      }, []);
  // Declare a new state variable, which we'll call "count"

  const handleProb = (probValue: string) => {
      const probAsNumber = parseInt(probValue)  
      if (probAsNumber >= 0 && probAsNumber <= 1) {
          setProb(probValue)
      } else {
          setError("PROBABILITY CAN'T BE LESS THAN 1")
      }
  }

  const handleClick = () => {
      const object = {
          prob: prob,
          reps: occ
      }
      axios.post('http://localhost:3001/calculate', object)
      .then(data => {setOutcome(data.data.requestBody)})
  }
  

  return (
    <div>
      <form>
        <label>
          Probabilities:
          <input type="number" value={prob} onChange={e => handleProb(e.target.value)} />
        </label>
          Occurrences:
        <input type="number" value={occ} onChange={e => setOcc(e.target.value)} />
        <p onClick={handleClick}>Submit</p>
        <p>{outcome}</p>
      </form>
    </div>
  );
}