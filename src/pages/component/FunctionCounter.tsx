import { useState } from "react";

const FunctionCounter = () => {
  const [count, setCount] = useState(0);

  const increment = (value = 1) => {
    setCount((prevCount) => Math.min(100, prevCount + value));
  };

  const decrement = (value = 1) => {
    setCount((prevCount) => Math.max(0, prevCount - value));
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <div className="bg-gradient-to-br from-green-500 to-blue-600 rounded-3xl shadow-2xl p-6 h-[28rem] border border-white/20 hover:scale-105 transition-all duration-300">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
          <h3 className="text-white text-center mb-6 bg-black/30 rounded-xl py-3 px-4">
            Function Component Counter
          </h3>

          <div className="text-center">
            <div className="bg-white/95 rounded-2xl p-8 mb-6 shadow-inner">
              <span className="text-7xl font-black text-gray-800 drop-shadow-lg block">
                {count}
              </span>
            </div>

            {/* Button Grid */}
            <div className="grid grid-cols-5 gap-3 mb-4">
              <button
                onClick={() => decrement(10)}
                disabled={count < 10}
                className={`h-16 w-16 rounded-circle text-lg font-bold shadow-lg transform transition-all duration-200 border-2 border-white/40 ${
                  count < 10
                    ? "bg-gray-400 cursor-not-allowed opacity-50"
                    : "bg-red-600 hover:bg-red-700 hover:scale-105 active:scale-95 text-white"
                }`}
              >
                -10
              </button>

              <button
                onClick={() => decrement(1)}
                disabled={count === 0}
                className={`h-16 w-16 rounded-circle text-lg font-bold shadow-lg transform transition-all duration-200 border-2 border-white/40 ${
                  count === 0
                    ? "bg-gray-400 cursor-not-allowed opacity-50"
                    : "bg-red-500 hover:bg-red-600 hover:scale-105 active:scale-95 text-white"
                }`}
              >
                -1
              </button>

              <button
                onClick={() => increment(1)}
                disabled={count === 100}
                className={`h-16 w-16 rounded-circle text-lg font-bold shadow-lg transform transition-all duration-200 border-2 border-white/40 ${
                  count === 100
                    ? "bg-gray-400 cursor-not-allowed opacity-50"
                    : "bg-green-500 hover:bg-green-600 hover:scale-105 active:scale-95 text-white"
                }`}
              >
                +1
              </button>
              <button
                onClick={() => increment(10)}
                disabled={count > 90}
                className={`h-16 w-16 rounded-circle text-lg font-bold shadow-lg transform transition-all duration-200 border-2 border-white/40 ${
                  count > 90
                    ? "bg-gray-400 cursor-not-allowed opacity-50"
                    : "bg-green-600 hover:bg-green-700 hover:scale-105 active:scale-95 text-white"
                }`}
              >
                +10
              </button>

              <button
                onClick={reset}
                className="h-16 w-16 bg-yellow-500 hover:bg-yellow-600 text-white font-bold text-lg rounded-circle shadow-lg transform hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white/40"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FunctionCounter;
