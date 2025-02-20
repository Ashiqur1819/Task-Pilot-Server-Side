const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 3000

// Middleware
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("Server is running successfully!")
})

app.listen(port, () => {
    console.log("Server is running successfully!")
})