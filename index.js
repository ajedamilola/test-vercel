const express = require("express");
const app = express();
const file = require("express-fileupload")
app.use(file())
app.get("/", (req, res) => { res.send("Express on Vercel"); });
app.get("/about", (req, res) => { res.send("Another page Vercel"); });
app.post("/", (req, res) => {
    res.json({ file: req.files.image.name })
})
const PORT = process.env.PORT || 5000; app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });
module.exports = app;