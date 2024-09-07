import { useState } from "react";

const Calculator = () => {
  const [numbers, setNumbers] = useState("");

  console.log(numbers.length);
  console.log(numbers);
  return (
    <>
      {/* main div */}
      <div className=" flex flex-col mt-20  bg-slate-400 rounded-md mx-auto max-w-fit">
        {/* display div */}
        <div className="flex flex-col  max-auto  m-2 span bg-blue-200 border-2 rounded-md h-10 items-end">
          {numbers}
        </div>

        {/* name div */}
        <p className="flex text-black justify-end pr-2 font-bold">casio</p>

        {/* buttons div */}
        <div className="flex flex-col">
          <div>
            <button
              onClick={() => setNumbers((num) => num + "1")}
              className="button"
            >
              1
            </button>
            <button
              onClick={() => setNumbers((num) => num + "2")}
              className="button"
            >
              2
            </button>
            <button
              onClick={() => setNumbers((num) => num + "3")}
              className="button"
            >
              3
            </button>
            <button
              onClick={() => setNumbers((sig) => sig + "+")}
              className="button"
            >
              +
            </button>
          </div>
          <div>
            <button
              onClick={() => setNumbers((num) => num + "4")}
              className="button"
            >
              4
            </button>
            <button
              onClick={() => setNumbers((num) => num + "5")}
              className="button"
            >
              5
            </button>
            <button
              onClick={() => setNumbers((num) => num + "6")}
              className="button"
            >
              6
            </button>
            <button
              onClick={() => setNumbers((sig) => sig + "-")}
              className="button"
            >
              -
            </button>
          </div>
          <div>
            <button
              onClick={() => setNumbers((num) => num + "7")}
              className="button"
            >
              7
            </button>
            <button
              onClick={() => setNumbers((num) => num + "8")}
              className="button"
            >
              8
            </button>
            <button
              onClick={() => setNumbers((num) => num + "9")}
              className="button"
            >
              9
            </button>
            <button
              onClick={() => setNumbers((num) => num + "/")}
              className="button"
            >
              /
            </button>
          </div>
          <div>
            <button
              onClick={() => setNumbers((num) => num + "0")}
              className="button"
            >
              0
            </button>
            <button
              onClick={() => setNumbers((num) => num + "*")}
              className="button"
            >
              *
            </button>
            <button onClick={() => setNumbers("")} className="button">
              AC
            </button>
            <button
              onClick={() => setNumbers(numbers.slice(0, -1))}
              className="button"
            >
              c
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                try {
                  const result = String(eval(numbers));
                  setNumbers(result);
                } catch (error) {
                  console.error("inavlid expression", error);
                }
              }}
              className="button"
            >
              =
            </button>
            <button
              onClick={() => setNumbers((sig) => sig + ".")}
              className="button"
            >
              .
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
