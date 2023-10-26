import { useState } from "react";
import ToDo from './ToDo.js'

function App() {

  const allChecks = {
    userID: 1,
    id: 1,
    title: "delicious aut autem",
    completed: false,
  };


  const ToDoJSX = allChecks((checked, indeks) => {
    return <ToDo key={indeks} checked={checked}/>
  });

  return (
    <>
    {ToDoJSX}
    </>
  );
}

export default App;
