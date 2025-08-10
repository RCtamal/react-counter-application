import { Component } from "react";

export class ClassCounter extends Component {
  constructor(props:any) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = (value = 1) => {
    this.setState((prevState) => ({
      count: Math.min(100, prevState.count + value),
    }));
  };

  decrement = (value = 1) => {
    this.setState((prevState) => ({
      count: Math.max(0, prevState.count - value),
    }));
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl shadow-2xl p-6 h-[28rem] border border-white/20 hover:scale-105 transition-all duration-300">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
          <h2 className=" text-white text-center mb-6 bg-black/30 rounded-xl py-3 px-4">
            Class Component Counter
          </h2>

          <div className="text-center">
            <div className="bg-white/95 rounded-2xl p-8 mb-6 shadow-inner">
              <span className="text-7xl font-black text-gray-800 drop-shadow-lg block">
                {this.state.count}
              </span>
            </div>

            {/* Button Grid */}
            <div className="grid grid-cols-5 gap-3 mb-4">
              <button
                onClick={() => this.decrement(10)}
                disabled={this.state.count < 10}
                className={`w-16 h-16 rounded-circle text-lg font-bold shadow-lg transform transition-all duration-200 border-2 border-white/40 ${
                  this.state.count < 10
                    ? "bg-gray-400 cursor-not-allowed opacity-50"
                    : "bg-red-600 hover:bg-red-700 hover:scale-105 active:scale-95 text-white"
                }`}
              >
                -10
              </button>

              <button
                onClick={() => this.decrement(1)}
                disabled={this.state.count === 0}
                className={`w-16 h-16 rounded-circle text-lg font-bold shadow-lg transform transition-all duration-200 border-2 border-white/40 ${
                  this.state.count === 0
                    ? "bg-gray-400 cursor-not-allowed opacity-50"
                    : "bg-red-500 hover:bg-red-600 hover:scale-105 active:scale-95 text-white"
                }`}
              >
                -1
              </button>

              <button
                onClick={() => this.increment(1)}
                disabled={this.state.count === 100}
                className={`w-16 h-16 rounded-circle text-lg font-bold shadow-lg transform transition-all duration-200 border-2 border-white/40 ${
                  this.state.count === 100
                    ? "bg-gray-400 cursor-not-allowed opacity-50"
                    : "bg-green-500 hover:bg-green-600 hover:scale-105 active:scale-95 text-white"
                }`}
              >
                +1
              </button>
              <button
                onClick={() => this.increment(10)}
                disabled={this.state.count > 90}
                className={`w-16 h-16 rounded-circle text-lg font-bold shadow-lg transform transition-all duration-200 border-2 border-white/40 ${
                  this.state.count > 90
                    ? "bg-gray-400 cursor-not-allowed opacity-50"
                    : "bg-green-600 hover:bg-green-700 hover:scale-105 active:scale-95 text-white"
                }`}
              >
                +10
              </button>

              <button
                onClick={this.reset}
                className="w-16 h-16 bg-yellow-500 hover:bg-yellow-600 text-white font-bold text-lg rounded-circle shadow-lg transform hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white/40"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
