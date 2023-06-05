import React from "react";
import { useState } from "react";

function Calculator() {
  const [display, setDisplay] = useState("");
  const [operationflag, setOperationFlag] = useState(false);
  const [number, setNumber] = useState("");
  const [equationArray, setEquationArray] = useState([]);

  function solve() {
    console.log(display);
    const temparray = display.split("").filter((v) => v != " ");
    let numberarray = [0];
    const oparray = ["+", "-", "/", "x"];
    let temp = "";
    for (const item of temparray) {
      if (oparray.includes(item)) {
        numberarray.push(temp);
        numberarray.push(item);
        temp = "";
      } else {
        temp += item;
      }
    }
    numberarray.push(temp);

    console.log(numberarray);
  }

  function displayEquation(input) {
    setOperationFlag(true);
    setDisplay(`${display} ${input}`);
  }
  return (
    <div className="flex h-[100vh] justify-center items-center">
      <div>
        <p className="mb-2 bg-[#eeeeee] h-[60px] flex justify-end items-end">
          {display}
        </p>

        <div className="grid grid-cols-4 p-4 gap-4 bg-[#d3cdcd]">
          {/* row-1 */}
          <div
            className="w-[50px] h-[40px]  rounded-sm drop-shadow-md hover:bg-white bg-[#e5e4e0] flex justify-center items-center cursor-pointer"
            onClick={(e) => {
              displayEquation(e.target.innerText);
              setNumber((number) => number + e.target.innerText);
            }}
          >
            7
          </div>
          <div
            className="w-[50px] h-[40px] border rounded-sm drop-shadow-md hover:bg-white bg-[#e5e4e0] flex justify-center items-center cursor-pointer "
            onClick={(e) => {
              displayEquation(e.target.innerText);
              setNumber((number) => number + e.target.innerText);
            }}
          >
            8
          </div>
          <div
            className="w-[50px] h-[40px] border rounded-sm drop-shadow-md hover:bg-white bg-[#e5e4e0] flex justify-center items-center cursor-pointer "
            onClick={(e) => {
              displayEquation(e.target.innerText);
              setNumber((number) => number + e.target.innerText);
            }}
          >
            9
          </div>
          <div
            className="w-[50px] h-[40px] hover:text-white cursor-pointer rounded-sm
            bg-[#62b5bd] flex justify-center items-center"
          >
            DEL
          </div>

          {/* row-2 */}
          <div
            className="w-[50px] h-[40px] border rounded-sm drop-shadow-md hover:bg-white bg-[#e5e4e0] flex justify-center items-center cursor-pointer "
            onClick={(e) => {
              displayEquation(e.target.innerText);
              setNumber((number) => number + e.target.innerText);
            }}
          >
            4
          </div>
          <div
            className="w-[50px] h-[40px] border rounded-sm drop-shadow-md hover:bg-white bg-[#e5e4e0] flex justify-center items-center cursor-pointer "
            onClick={(e) => {
              displayEquation(e.target.innerText);
              setNumber((number) => number + e.target.innerText);
            }}
          >
            5
          </div>
          <div
            className="w-[50px] h-[40px] border rounded-sm drop-shadow-md hover:bg-white bg-[#e5e4e0] flex justify-center items-center cursor-pointer "
            onClick={(e) => {
              displayEquation(e.target.innerText);
              setNumber((number) => number + e.target.innerText);
            }}
          >
            6
          </div>
          <button
            disabled={!operationflag}
            className="w-[50px] h-[40px] border rounded-sm drop-shadow-md hover:bg-white bg-[#e5e4e0] flex justify-center items-center cursor-pointer "
            onClick={(e) => {
              displayEquation(e.target.innerText);
              setOperationFlag(false);
            }}
          >
            +
          </button>
          {/* row-3 */}
          <div
            className="w-[50px] h-[40px] border rounded-sm drop-shadow-md hover:bg-white bg-[#e5e4e0] flex justify-center items-center cursor-pointer "
            onClick={(e) => {
              displayEquation(e.target.innerText);
              setNumber((number) => number + e.target.innerText);
            }}
          >
            1
          </div>
          <div
            className="w-[50px] h-[40px] border rounded-sm drop-shadow-md hover:bg-white bg-[#e5e4e0] flex justify-center items-center cursor-pointer "
            onClick={(e) => {
              displayEquation(e.target.innerText);
              setNumber((number) => number + e.target.innerText);
            }}
          >
            2
          </div>
          <div
            className="w-[50px] h-[40px] border rounded-sm drop-shadow-md hover:bg-white bg-[#e5e4e0] flex justify-center items-center cursor-pointer "
            onClick={(e) => {
              displayEquation(e.target.innerText);
              setNumber((number) => number + e.target.innerText);
            }}
          >
            3
          </div>
          <button
            disabled={!operationflag}
            className="w-[50px] h-[40px] border rounded-sm drop-shadow-md hover:bg-white bg-[#e5e4e0] flex justify-center items-center cursor-pointer "
            onClick={(e) => {
              displayEquation(e.target.innerText);
            }}
          >
            -
          </button>

          {/* row-4 */}
          <div
            className="w-[50px] h-[40px] border rounded-sm drop-shadow-md hover:bg-white bg-[#e5e4e0] flex justify-center items-center cursor-pointer "
            onClick={(e) => {
              displayEquation(`${e.target.innerText}`);
              setOperationFlag(false);
            }}
          >
            .
          </div>
          <div
            className="w-[50px] h-[40px] border rounded-sm drop-shadow-md hover:bg-white bg-[#e5e4e0] flex justify-center items-center cursor-pointer "
            onClick={(e) => displayEquation(e.target.innerText)}
          >
            0
          </div>
          <button
            disabled={!operationflag}
            className="w-[50px] h-[40px] border rounded-sm drop-shadow-md hover:bg-white bg-[#e5e4e0] flex justify-center items-center cursor-pointer "
            onClick={(e) => {
              displayEquation(e.target.innerText);
            }}
          >
            /
          </button>
          <button
            disabled={!operationflag}
            className="w-[50px] h-[40px] border rounded-sm drop-shadow-md hover:bg-white bg-[#e5e4e0] flex justify-center items-center cursor-pointer "
            onClick={(e) => {
              displayEquation(e.target.innerText);
            }}
          >
            x
          </button>
          {/* row-5 */}
          <div
            className=" h-[40px] rounded-sm drop-shadow-md hover:text-white bg-[#62b5bd] col-span-2 flex justify-center items-center cursor-pointer "
            onClick={(e) => {
              setDisplay("");
              setEquationArray([]);
            }}
          >
            RESET
          </div>

          <div
            className="col-span-2 h-[40px]  rounded-sm drop-shadow-md hover:text-white bg-[#ff8b39] flex justify-center items-center cursor-pointer "
            onClick={() => {
              solve();
            }}
          >
            =
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
