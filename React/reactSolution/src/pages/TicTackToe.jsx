import React, { useState } from "react";

function TicTackToe() {
  const [select, setSelect] = useState(true);

  return (
    <section className="flex justify-center items-center min-h-[100vh] bg-gray-50">
      <main className="flex flex-col justify-center items-center">
        <img src="./assets/logo.svg" alt="" />
        <div>
          <p>PLAYER 1'S MARK</p>
          <div className="flex gap-4">
            <div
              className={`px-4 py-2 ${select ? "bg-slate-500" : ""}`}
              onClick={() => setSelect(!select)}
            >
              <img
                className="w-[35px] h-[35px]"
                src="./assets/icon-x-silver.svg"
                alt=""
              />
            </div>
            <div
              className={`px-4 py-2 ${select ? "" : "bg-slate-500"}`}
              onClick={() => setSelect(!select)}
            >
              <img
                className="w-[35px] h-[35px]"
                src="./assets/icon-o-silver.svg"
                alt=""
              />
            </div>
          </div>

          <p>REMEMBER X GOES First</p>
        </div>

        <button className="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 ">
          <span className="absolute inset-y-0 left-0 w-[2px] bg-indigo-600 transition-all group-hover:w-full group-active:bg-indigo-500"></span>

          <span className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
            New Game
          </span>
        </button>
      </main>
    </section>
  );
}

export default TicTackToe;
