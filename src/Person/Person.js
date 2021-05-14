import React from 'react';
import './Person.css';
const person = (props) => {
    //output dynamic content by using {}
    //return <p>I am a Person and I am {Math.floor(Math.random()*30)} !</p>
    return (
    <div className = "Person">
         <p onClick = {props.click}>I am {props.name} and I am {props.age} old !</p>
         <p> { props.children } </p>
         <input type = "text" onChange = {props.changed} value = {props.name}/>
    </div>
    )
}

export default person;