import { useState } from "react";

const Calculator = () => {
  const [numbers, setNumbers] = useState("");

  console.log(numbers.length);
  console.log(numbers);
  return (
    <>
      <div className=" flex flex-col   mt-20  bg-slate-400 rounded-md mx-auto max-w-fit">
        {/* display div */}
        <div className="flex flex-col  max-auto  m-2 span bg-blue-200 border-2 rounded-md h-8">
          {numbers}
        </div>

        {/* buttons div */}
        <div>
          <button
            onClick={() => setNumbers((num) => num + "1")}
            className="border-2  mt-2 m-2 rounded bg-gray-200 w-10 hover:bg-yellow-100"
          >
            1
          </button>
          <button
            onClick={() => setNumbers((num) => num + "2")}
            className="border-2  mt-2 m-2 rounded bg-gray-200 w-10 hover:bg-yellow-100"
          >
            2
          </button>
          <button
            onClick={() => setNumbers((num) => num + "3")}
            className=" border-2  mt-2 m-2 rounded bg-gray-200 w-10 hover:bg-yellow-100"
          >
            3
          </button>
          <button
            onClick={() => setNumbers((sig) => sig + "+")}
            className=" border-2  mt-2 m-2 rounded bg-gray-200 w-10 hover:bg-yellow-100"
          >
            +
          </button>
        </div>
        <div>
          <button
            onClick={() => setNumbers((num) => num + "4")}
            className=" border-2  mt-2 m-2 rounded bg-gray-200 w-10 hover:bg-yellow-100"
          >
            4
          </button>
          <button
            onClick={() => setNumbers((num) => num + "5")}
            className=" border-2  mt-2 m-2 rounded bg-gray-200 w-10 hover:bg-yellow-100"
          >
            5
          </button>
          <button
            onClick={() => setNumbers((num) => num + "6")}
            className=" border-2  mt-2 m-2 rounded bg-gray-200 w-10 hover:bg-yellow-100"
          >
            6
          </button>
          <button
            onClick={() => setNumbers((sig) => sig + "-")}
            className=" border-2  mt-2 m-2 rounded bg-gray-200 w-10 hover:bg-yellow-100"
          >
            -
          </button>
        </div>
        <div>
          <button
            onClick={() => setNumbers((num) => num + "7")}
            className=" border-2  mt-2 m-2 rounded bg-gray-200 w-10 hover:bg-yellow-100"
          >
            7
          </button>
          <button
            onClick={() => setNumbers((num) => num + "8")}
            className=" border-2  mt-2 m-2 rounded bg-gray-200 w-10 hover:bg-yellow-100"
          >
            8
          </button>
          <button
            onClick={() => setNumbers((num) => num + "9")}
            className=" border-2  mt-2 m-2 rounded bg-gray-200 w-10 hover:bg-yellow-100"
          >
            9
          </button>
          <button
            onClick={() => setNumbers((num) => num + "/")}
            className=" border-2  mt-2 m-2 rounded bg-gray-200 w-10 hover:bg-yellow-100"
          >
            /
          </button>
        </div>
        <div>
          <button
            onClick={() => setNumbers((num) => num + "0")}
            className=" border-2  mt-2 m-2 rounded bg-gray-200 w-10 hover:bg-yellow-100"
          >
            0
          </button>
          <button
            onClick={() => setNumbers((num) => num + "*")}
            className=" border-2  mt-2 m-2 rounded bg-gray-200 w-10 hover:bg-yellow-100"
          >
            *
          </button>
          <button
            onClick={() => setNumbers("")}
            className=" border-2  mt-2 m-2 rounded bg-gray-200 w-10 hover:bg-yellow-100"
          >
            AC
          </button>
          <button
            onClick={() => setNumbers(numbers.slice(0, -1))}
            className=" border-2  mt-2 m-2 rounded bg-gray-200 w-10 hover:bg-yellow-100"
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
            className="border-2  mt-2 m-2 rounded bg-gray-200 w-10 hover:bg-yellow-100"
          >
            =
          </button>
          <button
            onClick={() => setNumbers((sig) => sig + ".")}
            className="border-2  mt-2 m-2 rounded bg-gray-200 w-10 hover:bg-yellow-100"
          >
            .
          </button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
