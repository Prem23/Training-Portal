import React,{ useState } from 'react';
import Display from './display.js';
import Input from './input.js';
import './App.css';

const App = () =>{
  const events = JSON.parse(localStorage.getItem("events"));
  const [display, setdisplay] = useState();
  const [input, setInput] = useState(false);
  let isEvents = false;
  if(events && events.length){
    isEvents = true;
  }
  return (
    <div className="App">
        <div className={input ? "hide" : "header"}>
          <input type="text" name="search" className="input-box" placeholder="Enter training name to search" onKeyUp={(e) => handleValue(e,setdisplay)} />
          <button className="btn" onClick={() => setInput(true)}>Schedule a Training</button>
        </div>
        {isEvents && !input ? <Display data={events} display={display} input={setInput} /> : <div className="no-training">No Trainings Scheduled</div> }
        {input ? <Input data={events} input={setInput}/> : ""}
    </div>
  );
}

const handleValue = (event,setdisplay) => {
  const value = event.target.value;
  setdisplay(value);
}

export default App;
