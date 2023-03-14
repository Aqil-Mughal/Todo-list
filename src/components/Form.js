import React, { useState } from "react";
import firebase from "../firebase";
import { TextField } from "@material-ui/core";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
const Form = ({ title, setTitle, show, selectedTodo }) => {
  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };
  
  const createTodo = () => {
    const todoRef = firebase.database().ref("Todo");
    const todo = {
      title,
      complete: false,
    };
    const updateTodo = () => {
      const todoRef = firebase.database().ref("Todo");
      if (selectedTodo) {
        todoRef.child(selectedTodo.id).update(todo);
      } else {
        todoRef.plush(todo);
      }
    };
    setTitle("");
  };
  return (
    <>
      <div className="form">
        <TextField
          variant="standard"
          label="Add Todo"
          type="text"
          value={title}
          onChange={handleOnChange}
          className="textfield"
          size="medium"
        />
        {!show ? (
          <div className="add">
            {title === "" ? (
              <AddCircleOutlineOutlinedIcon fontSize="large" className="icon" />
            ) : (
              <AddCircleRoundedIcon
                onClick={createTodo}
                fontSize="large"
                className="icon"
              />
            )}
            <div className="update">
              <button disabled={!title} onClick={() => selectedTodo}>
                Update
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};
export default Form;
