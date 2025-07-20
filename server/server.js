import express from "express";

const app = express();

// Homepage
app.get("/", (req, res) => {
    res.send("Server is ready")
})

// Inventory
app.get("/clothing-products", (req, res) => {
    res.send("Inventory is ready")
})


// Starting the server on port 5000
app.listen(5000, () => {
    console.log("Server started at http://localhost:5000");
})
