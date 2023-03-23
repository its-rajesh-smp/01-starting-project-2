import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');

  const [isValue,setisValid]=useState(true)

  const goalInputChangeHandler = event => {
    setisValid(true)
    setEnteredValue(event.target.value);
  };


  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length===0){
      setisValid(false)
      return
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValue ? "invalid":""} `}>
        <label>Course Goal</label>
        <input  type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button isValue={isValue} type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
