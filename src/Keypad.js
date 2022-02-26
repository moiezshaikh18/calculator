import React from "react";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";

export const Constant = {
  AC: "AC",
  del: "C",
  per: "%",
  div: "/",
  7: "7",
  8: "8",
  9: "9",
  mul: "*",
  4: "4",
  5: "5",
  6: "6",
  min: "-",
  1: "1",
  2: "2",
  3: "3",
  add: "+",
  calc: <CalculateOutlinedIcon id="calc" fontSize="x-large" />,
  0: "0",
  point: ".",
  equal: "=",
};
export const Keys = [
  "AC",
  "del",
  "per",
  "div",
  "7",
  "8",
  "9",
  "mul",
  "4",
  "5",
  "6",
  "min",
  "1",
  "2",
  "3",
  "add",
  "calc",
  "0",
  "point",
  "equal",
];

const Keypad = ({ onClick }) => {
  return (
    <div className="keypad-div">
      {Keys.map((item, index) => {
        return (
          <button className="btn" id={item} key={index} onClick={onClick}>
            {Constant[item]}
          </button>
        );
      })}
    </div>
  );
};

export default Keypad;
