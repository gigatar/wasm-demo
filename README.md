Compile Golang code to WASM and use in a react app

Compile: GOOS=js GOARCH=wasm go build -o ../react/public/main.wasm wasm.go