package main

import (
	"fmt"
	"net/http"
)

func main() {
	fmt.Println("L2E CodeStudy Platform server is starting...")

	http.Handle("/", http.FileServer(http.Dir("homepage")))

	fmt.Println("Open your browser and go to http://localhost:8080")
	http.ListenAndServe(":8080", nil)
}
