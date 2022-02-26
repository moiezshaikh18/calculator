import React, { useState } from "react";
import Keypad, { Constant } from "./Keypad";

const Calculation = () => {
  const [input, setInput] = useState("");

  const onChangeListner = (e) => {
    let val = e.target.value;
    setInput(input + val);
  };

  const onClickListener = (e) => {
    let id = e.target.id;
    let val = input;

    switch (id) {
      case "AC": {
        val = "";
        break;
      }
      case "del": {
        let len = val.length;
        val = val.slice(0, len - 1);
        break;
      }
      case "equal": {
        val = eval(val.replace(/%/g, "*1/100"));
        break;
      }
      case "calc": {
        val = val;
        break;
      }

      default: {
        val += Constant[id];
        break;
      }
    }
    setInput(val);
  };

  return (
    <>
      <div className="container">
        <div className="input-div">
          <input disabled onChange={onChangeListner} value={input}></input>
        </div>
        <div className="num-container">
          <Keypad onClick={onClickListener} />
        </div>
      </div>
    </>
  );
};

export default Calculation;
