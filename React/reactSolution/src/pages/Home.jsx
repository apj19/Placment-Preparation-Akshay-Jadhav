import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to={"counter"}>
        <button>Counter</button>
      </Link>
    </div>
  );
}

export default Home;
