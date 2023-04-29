package main

import (
    "log"
    "net/http"
)

func main() {
    http.Handle("/", http.FileServer(http.Dir(".")))

    log.Printf("Servinga on port 8080")
    log.Fatal(http.ListenAndServe(":8080", nil))
}
