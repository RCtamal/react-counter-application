import { ClassCounter } from "./component/ClassCounter";
import FunctionCounter from "./component/FunctionCounter";

const index = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4">
        <div className="container mx-auto max-w-7xl">
          {/* Main Heading */}
          <div className="text-center mb-12 pt-8">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-2xl tracking-tight">
              Assignment-2 Counter Application
            </h1>
            <div className="w-40 h-2 bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 mx-auto rounded-full shadow-lg"></div>
            <p className="text-white/80 text-lg mt-4 font-medium">
              React Class vs Function Components with Enhanced Controls
            </p>
          </div>
          {/* Counters Container */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
            <div className="flex justify-center">
              <ClassCounter />
            </div>
            <div className="flex justify-center">
              <FunctionCounter />
            </div>
          </div>

          {/* Features Section */}
          <div className="mt-16 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">
                Enhanced Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-white/90">
                <div className="bg-white/5 rounded-xl p-4">
                  <span className="font-semibold">✨ Beautiful UI</span>
                  <p className="text-sm mt-1">
                    Modern gradients with smooth animations
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <span className="font-semibold">🔒 Range Control</span>
                  <p className="text-sm mt-1">Counter stays between 0-100</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <span className="font-semibold">⚡ Quick Actions</span>
                  <p className="text-sm mt-1">±1, ±10, and Reset buttons</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <span className="font-semibold">⚛️ Class Component</span>
                  <p className="text-sm mt-1">Traditional React class syntax</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <span className="font-semibold">🪝 Function Component</span>
                  <p className="text-sm mt-1">Modern React hooks approach</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <span className="font-semibold">🎯 Smart Buttons</span>
                  <p className="text-sm mt-1">Auto-disable at limits</p>
                </div>
              </div>
            </div>
          </div>
          {/* Footer */}
          <div className="text-center mt-12 pb-8">
            <p className="text-white/60 text-sm">
              Built with ❤️ using React, Tailwind CSS & Enhanced Controls
            </p>
            <p className="text-white/60 text-sm">
              Create by Tamal Roy Chowdhury
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
