import { useState } from "react";
import { motion } from "framer-motion";
import Form from "./Form";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [value, setValue] = useState({title:''});
  const [show, setShow] = useState(false);


  return (
    <>
      <motion.div className="todoapp">
        <h1>Todo App</h1>
        <Form value={value} setValue={setValue} show={show} setShow={setShow} />
        <TodoList setValue={setValue} show={show} setShow={setShow}/>
      </motion.div>
    </>
  );
};

export default TodoApp;
