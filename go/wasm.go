package main

import (
	"fmt"
	"syscall/js"
	"time"
) // Lint error expected since this is only available when GOOS=js

func main() {
	js.Global().Set("print", js.FuncOf(print))
	js.Global().Set("sayHello", js.FuncOf(sayHello))
	select {} // Keep app running
}

func print(this js.Value, args []js.Value) interface{} {
	fmt.Printf("%v: Hello from Go\n", time.Now())

	return nil
}

func sayHello(this js.Value, args []js.Value) interface{} {
	name := args[0].String()
	if len(name) == 0 {
		return "Invalid Name"
	}

	return fmt.Sprintf("Hello %v", name)
}
