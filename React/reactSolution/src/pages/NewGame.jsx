import React from "react";

function NewGame() {
  return (
    <section className="flex justify-center items-center min-h-[100vh] bg-gray-50">
      <section className="grid grid-cols-3 gap-4">
        <div>
          <img src="../assets/logo.svg" alt="" />
        </div>
        <div>TURN</div>
        <div>Reset</div>
        {/* row-1 */}
        <div className="w-[100px] h-[100px] rounded-md bg-slate-300"></div>
        <div className="w-[100px] h-[100px] rounded-md bg-slate-300"></div>
        <div className="w-[100px] h-[100px] rounded-md bg-slate-300"></div>

        {/* row-2 */}
        <div className="w-[100px] h-[100px] rounded-md bg-slate-300"></div>
        <div className="w-[100px] h-[100px] rounded-md bg-slate-300"></div>
        <div className="w-[100px] h-[100px] rounded-md bg-slate-300"></div>
        {/* row-3 */}
        <div className="w-[100px] h-[100px] rounded-md bg-slate-300"></div>
        <div className="w-[100px] h-[100px] rounded-md bg-slate-300"></div>
        <div className="w-[100px] h-[100px] rounded-md bg-slate-300"></div>
      </section>
    </section>
  );
}

export default NewGame;
