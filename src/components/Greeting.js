import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [getText, setGetText] = useState(false);

  const changeTextHandle = () => {
    setGetText(true);
  };

  return (
    <div>
      <h2>Hello World!</h2>
      {!getText && <Output>It's good to see you!</Output>}
      {getText && <Output>Changed!</Output>}
      <button onClick={changeTextHandle}>Change Text!</button>
    </div>
  );
};

export default Greeting;
