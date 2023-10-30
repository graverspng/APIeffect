import { useState } from "react";
import ToDo from './ToDo.js'

function App() {

  const allChecks = {
    userID: 1,
    id: 1,
    title: "delicious aut autem",
    completed: false,
  };


  return (
    <>
    <ToDo {...allChecks}/>
    </>
  );
}

export default App;
