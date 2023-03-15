import React, { useState } from "react";
import firebase from "../firebase";
import { TextField } from "@material-ui/core";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
const Form = ({ value, setValue, show, setShow }) => {
  const handleOnChange = (e) => {
    console.log(e.target.value)
    setValue({
      ...value,
      title:[e.target.value]
    });
  };
  
  const createTodo = () => {
    const todoRef = firebase.database().ref("Todo");
    const todo = {
      title : value.title ,
      complete: false,
    };
    todoRef.push(todo);
    setValue({title:''});
  };
  const updateValue =()=>{
    console.log(value)
        const todoRef = firebase.database().ref("Todo").child(value.id);
    todoRef.update({ title: value.title });
    setShow(!show)
  }
  return (
    <>
      <div className="form">
        <TextField
          variant="standard"
          label="Add Todo"
          type="text"
          value={value?.title}
          onChange={handleOnChange}
          className="textfield"
          size="medium"
        />
        {!show ? (
          <div className="add">
            {value === "" ? (
              <AddCircleOutlineOutlinedIcon fontSize="large" className="icon" />
            ) : (
              <AddCircleRoundedIcon
                onClick={createTodo}
                fontSize="large"
                className="icon"
              />
            )}
           
          </div>
        ) : 
        <div className="update">
        <button disabled={!value} onClick={updateValue}>
          Update
        </button>
      </div>}
      </div>
    </>
  );
};
export default Form;
