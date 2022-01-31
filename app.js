const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req, res) => {
    console.log(req.body.firstName + " " + req.body.email);
    if (req.body.firstName && req.body.email){
        res.sendFile(__dirname + "/success.html");
    }else{
        res.sendFile(__dirname + "/failure.html");
    }
})

app.listen(process.env.PORT || port, () => {
    console.log("Server listening at port " + port);
});