const express = require("express");
const path = require("path")
const fs = require("fs");

const app = express();
const port = process.env.PORT || 8000;


// EXPRESS SPECIFIC STUFF
app.use("/static", express.static('static')); // for serving static files
app.use(express.urlencoded()); // Form Data gulo express obdhi niye asar jonno 

// PUG SPECIFIC STUFF
app.set('view-engine', 'pug'); // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')); // Set the views directory


// END POINTS
app.get("/", (req, res)=> {
    const con = "Hello, world! I am Pritam and I create awesome NodeJs projects.";
    const params = {
        'title': 'NodeJs is an awesome backend language',
        'content': con,
    }
    res.status(200).render("index.pug", params);
})

app.post("/", (req, res)=> {
    // console.log(req.body); // Je data gulo enter kora hoyeche form er moddhe
    formData = req.body;
    enteredName = formData.name;
    age = formData.age;
    gender = formData.gender;
    address = formData.address;
    more = formData.more;

    let outputWrite = `Name: ${enteredName}\nAge: ${age}\nGender: ${gender}\nAddress: ${address}\nMore: ${more}\n\n`;

    fs.appendFileSync("output.txt", outputWrite);
    const con = "Hello, world";
    const params = {
        'title': "Your form has been subbmitted",
        'content': con,
    }
    res.status(200).render("index.pug", params);
})


// START THE SERVER
app.listen(port, ()=> {
    console.log(`This application started successfully on http://127.0.0.1:${port}`);
})