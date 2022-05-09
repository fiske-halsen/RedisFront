import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'

function App() {

const [University, setUniversity] = useState("")
const [Time, setTime] = useState(0)

const getData = () => {
  const start = new Date();
  fetch('https://localhost:7286/University/', {
    crossDomain: true, 
    method: 'GET', 
    headers: {'Content-Type':'application/json'}})
    .then((res) => res.json())
    .then((res) => {
      setUniversity(res)
      const timeTaken= (new Date())-start;
      setTime(timeTaken)
      console.log(timeTaken)
    })
}
  return (
    <div className="App">
    <p>Time Taken to fetch: {Time} </p>
        <button onClick={getData}>My Button</button>
    <p>{JSON.stringify(University)} </p>    
    </div>
  );
}
export default App;
