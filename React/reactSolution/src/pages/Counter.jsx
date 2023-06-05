import React from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-16">
        <p className="text-blue-500 text-2xl mb-8">Counter</p>
        <div>
          <span className="inline-flex text-xl overflow-hidden rounded-md border bg-white shadow-sm">
            <button
              className="inline-block border-e p-3 text-red-700 hover:bg-gray-50 focus:relative"
              onClick={() =>
                setCount((count) => {
                  if (count === 0) {
                    return 0;
                  } else {
                    return count - 1;
                  }
                })
              }
            >
              -
            </button>
            <p className="inline-block  border-e p-3"> {count}</p>

            <button
              className="inline-block p-3 text-green-700 hover:bg-gray-50 focus:relative"
              onClick={() => setCount((count) => count + 1)}
            >
              +
            </button>
          </span>
        </div>
      </div>
    </>
  );
}

export default Counter;
