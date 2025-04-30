# 🧩 Golang + WASM + React Integration

This project demonstrates how to compile Go code to WebAssembly (WASM) and use it in a React application.

---

## ⚙️ Compile Go Code to WASM

Run the following command from your Go source directory:

```bash
GOOS=js GOARCH=wasm go build -o ../react/public/main.wasm wasm.go