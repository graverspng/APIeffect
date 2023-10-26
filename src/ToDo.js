import { useState } from "react";

function ToDo(props) {
    const [checkbox, setcheckbox] = useState(props.check)

    function handleChange(event) {
        setcheckbox(event.target.value);
      }

    return (
        <>
        <input type="checkbox" check={checkbox} onChange={handleChange} />
        </>
    );
  }
  
  export default ToDo;