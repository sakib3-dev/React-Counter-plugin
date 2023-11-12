import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);
  // let count= 0;

  let handlebtn = () => {
    count++;

    setCount(count);
    console.log(count);
  };

  return (
    <>
      <h1 className="title">REACT COUNTER UP PLUGIN</h1>
      <h1 className="heading">{count}</h1>
      <button onClick={handlebtn} className="btn">
        Subscribe
      </button>
    </>
  );
}

export default App;
