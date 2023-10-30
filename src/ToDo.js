import { useState } from "react";

function ToDo(props) {
    const [checkbox, setcheckbox] = useState(props.completed)

    function handleChange(event) {
        setcheckbox(event.target.value);
      }

    return (
        <>
        <p>UserID: {props.userID}</p>
        <p>id: {props.id}</p>
        <p>{props.title}</p>
        <input type="checkbox" check={checkbox} onChange={handleChange}></input>
        </>
    );
  }
  
  export default ToDo;