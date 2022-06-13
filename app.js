const path = require("path");
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) =>{
    res.render("welcome");
})

app.get("/music", (req, res) => {
    res.render("home");
})

const PORT = process.env.PORT || 3040;
app.listen(PORT, () => console.log(`Listening in ${PORT}`));