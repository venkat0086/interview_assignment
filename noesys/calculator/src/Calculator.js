import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState("");
  const [visible, setVisible] = useState(false);

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleEqualButtonClick = () => {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(input);
      setHistory((prevHistory) => [
        ...prevHistory,
        { expression: input, result },
      ]);
      setInput(result);
    } catch (error) {
      console.error("Invalid input!");
    }
  };

  const handleHistory = () => {
    setVisible(!visible);
  };

  return (
    <div className="container mx-auto p-4 max-w-[480px]">
      <div className="grid grid-cols-4 gap-4 text-base">
        <textarea
          type="text"
          className="col-span-4 p-2 bg-gray-200 rounded"
          value={input}
        />

        <button
          className="p-2 text-2xl font-bold bg-gray-200 rounded-full w-[80px] h-[80px]"
          onClick={() => setInput("")}
        >
          C
        </button>
        <button className="p-2 bg-gray-200 rounded-full text-2xl font-bold w-[80px] h-[80px]">
          +/-
        </button>
        <button
          className="p-2 bg-gray-200 rounded-full text-2xl font-bold w-[80px] h-[80px]"
          onClick={() => handleButtonClick("%")}
        >
          %
        </button>
        <button
          className="p-2 bg-yellow-500 text-white rounded-full text-2xl font-bold w-[80px] h-[80px]"
          onClick={() => handleButtonClick("/")}
        >
          /
        </button>

        <button
          className="p-2 bg-gray-200 w-[80px] h-[80px] rounded-full text-2xl font-bold"
          onClick={() => handleButtonClick("7")}
        >
          7
        </button>
        <button
          className="p-2 bg-gray-200 w-[80px] h-[80px] rounded-full text-2xl font-bold"
          onClick={() => handleButtonClick("8")}
        >
          8
        </button>
        <button
          className="p-2 bg-gray-200 w-[80px] h-[80px] rounded-full text-2xl font-bold"
          onClick={() => handleButtonClick("9")}
        >
          9
        </button>
        <button
          className="p-2 bg-yellow-500 text-white rounded-full text-2xl font-bold w-[80px] h-[80px]"
          onClick={() => handleButtonClick("*")}
        >
          X
        </button>
        <button
          className="p-2 bg-gray-200 w-[80px] h-[80px] rounded-full text-2xl font-bold"
          onClick={() => handleButtonClick("4")}
        >
          4
        </button>
        <button
          className="p-2 bg-gray-200 w-[80px] h-[80px] rounded-full text-2xl font-bold"
          onClick={() => handleButtonClick("5")}
        >
          5
        </button>
        <button
          className="p-2 bg-gray-200 w-[80px] h-[80px] rounded-full text-2xl font-bold"
          onClick={() => handleButtonClick("6")}
        >
          6
        </button>
        <button
          className="p-2 bg-yellow-500 text-white rounded-full text-2xl font-bold w-[80px] h-[80px]"
          onClick={() => handleButtonClick("-")}
        >
          -
        </button>
        <button
          className="p-2 bg-gray-200 w-[80px] h-[80px] rounded-full text-2xl font-bold"
          onClick={() => handleButtonClick("1")}
        >
          1
        </button>
        <button
          className="p-2 bg-gray-200 w-[80px] h-[80px] rounded-full text-2xl font-bold"
          onClick={() => handleButtonClick("2")}
        >
          2
        </button>
        <button
          className="p-2 bg-gray-200 w-[80px] h-[80px] rounded-full text-2xl font-bold "
          onClick={() => handleButtonClick("3")}
        >
          3
        </button>
        <button
          className="p-2 bg-yellow-500 text-white rounded-full text-2xl font-bold w-[80px] h-[80px]"
          onClick={() => handleButtonClick("+")}
        >
          +
        </button>

        <button
          className="p-2 cols-span-2 bg-gray-200 rounded-full text-2xl font-bold w-[80px] h-[80px]"
          onClick={() => handleButtonClick("0")}
        >
          0
        </button>
        <button
          className="p-2 bg-gray-200 w-[80px] h-[80px] rounded-full text-2xl font-bold"
          onClick={() => handleButtonClick(".")}
        >
          .
        </button>

        <button
          className="p-2 w-[80px] h-[80px] bg-yellow-500 text-white rounded-full text-2xl font-bold"
          onClick={handleEqualButtonClick}
        >
          =
        </button>

        <button
          className="p-2 w-[80px] h-[80px] bg-yellow-500 text-base rounded-full text-white font-bold"
          onClick={handleHistory}
        >
          History
        </button>
      </div>

      {visible && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold text-white">History</h2>
          <ul className="mt-2">
            {history.map((item, index) => (
              <li key={index} className="mb-1 text-white">
                <span className="font-semibold text-white">
                  {item.expression}
                </span>{" "}
                = {item.result}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Calculator;
