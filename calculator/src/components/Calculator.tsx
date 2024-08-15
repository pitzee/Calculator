import { useState } from "react";

const Calculator = () => {
  const [numbers, setNumbers] = useState("");

  console.log(numbers.length);
  return (
    <>
      <div className="card">
        <div className="card-body">{numbers}</div>
      </div>
      <div>
        <button
          onClick={() => setNumbers((num) => num + "1")}
          className="btn btn-primary"
        >
          1
        </button>
        <button
          onClick={() => setNumbers((num) => num + "2")}
          className="btn btn-primary"
        >
          2
        </button>
        <button
          onClick={() => setNumbers((num) => num + "3")}
          className="btn btn-primary"
        >
          3
        </button>
        <button
          onClick={() => setNumbers((sig) => sig + "+")}
          className="btn btn-primary"
        >
          +
        </button>
      </div>
      <div>
        <button
          onClick={() => setNumbers((num) => num + "4")}
          className="btn btn-primary"
        >
          4
        </button>
        <button
          onClick={() => setNumbers((num) => num + "5")}
          className="btn btn-primary"
        >
          5
        </button>
        <button
          onClick={() => setNumbers((num) => num + "6")}
          className="btn btn-primary"
        >
          6
        </button>
        <button
          onClick={() => setNumbers((sig) => sig + "-")}
          className="btn btn-primary"
        >
          -
        </button>
      </div>
      <div>
        <button
          onClick={() => setNumbers((num) => num + "7")}
          className="btn btn-primary"
        >
          7
        </button>
        <button
          onClick={() => setNumbers((num) => num + "8")}
          className="btn btn-primary"
        >
          8
        </button>
        <button
          onClick={() => setNumbers((num) => num + "9")}
          className="btn btn-primary"
        >
          9
        </button>
        <button
          onClick={() => setNumbers((num) => num + "/")}
          className="btn btn-primary"
        >
          /
        </button>
      </div>
      <div>
        <button
          onClick={() => setNumbers((num) => num + "0")}
          className="btn btn-primary"
        >
          0
        </button>
        <button
          onClick={() => setNumbers((num) => num + "*")}
          className="btn btn-primary"
        >
          *
        </button>
        <button onClick={() => setNumbers("")} className="btn btn-primary">
          AC
        </button>
        <button
          onClick={() => setNumbers(numbers.slice(0, -1))}
          className="btn btn-primary"
        >
          c
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            try {
              setNumbers(eval(numbers));
            } catch (error) {
              console.error("inavlid expression", error);
            }
          }}
          className="btn btn-primary"
        >
          =
        </button>
      </div>
    </>
  );
};

export default Calculator;
