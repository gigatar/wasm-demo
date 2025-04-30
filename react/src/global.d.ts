// src/global.d.ts

interface Go {
  importObject: WebAssembly.Imports;
  run(instance: WebAssembly.Instance): Promise<void>;
}

interface Window {
  Go: new () => Go; // Declare Go class for WASM
  print: () => void; // Declare the print function added by Go
  sayHello: (name: string) => string; // Declare the sayHello function added by Go
}
