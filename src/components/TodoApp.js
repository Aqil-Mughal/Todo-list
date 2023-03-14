import { useState } from "react";
import { motion } from "framer-motion";
import Form from "./Form";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [title, setTitle] = useState("");
  const [show, setShow] = useState(false);


  return (
    <>
      <motion.div className="todoapp">
        <h1>Todo App</h1>
        <Form title={title} setTitle={setTitle} show={show} />
        <TodoList setTitle={setTitle} show={show} setShow={setShow}/>
      </motion.div>
    </>
  );
};

export default TodoApp;
