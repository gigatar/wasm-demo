import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [hello, setHello] = useState("");
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/wasm_exec.js";
    script.onload = async () => {
      const go = new window.Go();
      const { instance } = await WebAssembly.instantiateStreaming(
        fetch("/main.wasm"),
        go.importObject
      );
      go.run(instance);
    };
    document.body.appendChild(script);
  }, []);

  const handleTest = () => {
    window.print();
  };
  const handleSayHello = () => {
    setHello(window.sayHello(name));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white rounded-2xl shadow-md p-8 space-y-6 w-full max-w-md">
        <div className="flex justify-center">
          <button
            onClick={handleTest}
            className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            Test Go fmt.Print in console
          </button>
        </div>

        <div className="space-y-4">
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Set Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSayHello}
            className="w-full px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
          >
            Say Hello
          </button>
        </div>

        {hello && (
          <div className="mt-6 text-center text-lg text-gray-800 font-medium border-t pt-4">
            {hello}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
