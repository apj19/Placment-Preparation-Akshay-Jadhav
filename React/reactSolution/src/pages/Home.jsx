import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center mt-16">
      <Link to={"counter"}>
        <button
          type="button"
          className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Counter App
        </button>
      </Link>

      <Link to={"calculator"}>
        <button
          type="button"
          className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Calculator App
        </button>
      </Link>
    </div>
  );
}

export default Home;
