import React from 'react';
import './App.css';

const Display = props => {
    return (
        <div className="event-container">
            <h3>Trainings Scheduled : </h3>
            <div key={"header"} className="event-item underline">
                <span>Name</span>
                <span>Department</span>
                <span>Room</span>
                <span>Duration</span>
                <span>Description</span>
                <span>DateTime</span>
                <span>Edit Training</span>
            </div>
            {
                props.data.map((item, index) => {
                    return <div key={index} className={props.display && props.display.toUpperCase() === item.Name.toUpperCase() ? "event-item highlight":"event-item"}>
                        <span>{item.Name}</span>
                        <span>{item.Department}</span>
                        <span>{item.Room}</span>
                        <span>{item.Duration}</span>
                        <span>{item.Description}</span>
                        <span>{item.DateTime}</span>
                        <button className="edit-btn" onClick = {() => handleClick(props)}>edit</button>
                    </div>
                })
            }
        </div>
    )
}

const handleClick = props => {
    props.input(true);
}

export default Display;