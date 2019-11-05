import React from 'react';
import './App.css';

const Input = props => {
  return (
    <div className="new-event">
      <form onSubmit={(e) => handleSubmit(e, props)}>
        <h3>Schedule New Training / Edit Existing Training </h3>
        <div className="input-container">
          <label className="label-box">Training Name</label>
          <input type="text" className="input-box" name="Name" placeholder="React/Angular/Vue" />
        </div>
        <div className="input-container">
          <label className="label-box">Training Description</label>
          <input type="text" className="input-box" name="Description" placeholder="asdasdadsas" />
        </div>
        <div className="input-container">
          <label className="label-box">Training Department</label>
          <input type="text" className="input-box" name="Department" placeholder="UI" />
        </div>
        <div className="input-container">
          <label className="label-box">Training Duration</label>
          <input type="text" className="input-box" name="Duration" placeholder="1 hour" />
        </div>
        <div className="input-container">
          <label className="label-box">Training Date and Time</label>
          <input type="text" className="input-box" name="DateTime" placeholder="01 Nov 10:00 " />
        </div>
        <div className="input-container">
          <label className="label-box">Training Room</label>
          <input type="text" className="input-box" name="Room" placeholder="abc" />
        </div>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
}

const handleSubmit = (e, props) => {
  e.preventDefault();
  let data = {};
  let boxdata = document.querySelectorAll(".input-container .input-box");
  if(boxdata && boxdata.length){
    for(let i = 0; i < boxdata.length; i++){
      data[boxdata[i].name] = boxdata[i].value;
    }
    let olddata = props.data;
    olddata.push(data);
    localStorage.setItem("events", JSON.stringify(olddata));
    props.input(false);
  }
}

export default Input;
