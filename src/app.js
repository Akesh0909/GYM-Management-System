const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");


require("./db/conn");
const Register = require("./models/register");
const Question = require("./models/question");

const port = process.env.PORT || 8000;
const static_path = path.join(__dirname,"../public");
const templates_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set('views', templates_path);
hbs.registerPartials(partials_path);

// Routing
app.get("/",(req,res) => {
    res.render("index");
});
app.get("/about",(req,res) => {
    res.render("about");
});
app.get("/abs",(req,res) => {
    res.render("abs");
});
app.get("/arms",(req,res) => {
    res.render("arms");
});
app.get("/back",(req,res) => {
    res.render("back");
});
app.get("/chest",(req,res) => {
    res.render("chest");
});
app.get("/contact",(req,res) => {
    res.render("contact");
});

//questions in database
app.post("/contact",async (req,res) => {
    try {
        
        const question = new Question({
            name : req.body.aname,
            email : req.body.aemail,
            Phoneno : req.body.aPhoneno,
            subject : req.body.asubject,
            question : req.body.aquestion
        })
        const ques = await question.save();
        res.status(201).render("contact",{
            success: true
        });
    } catch (e) {
        console.log(e);
        res.status(400).render("errorpage",{
            error : "Error 404"
        });
    }
});
app.get("/diet",(req,res) => {
    res.render("diet");
});
app.get("/joinus",(req,res) => {
    res.render("joinus");
});
//create a user in database
app.post("/joinus",async (req,res) => {
    try {
        
        const registerUser = new Register({
            name : req.body.name,
            age : req.body.age,
            email : req.body.email,
            address : req.body.address,
            gender : req.body.gender,
            phone : req.body.Phoneno,
            branch : req.body.branch
        })
        const registered = await registerUser.save();
        res.status(201).render("joinus",{
            success: true
        });
        

    } catch (e) {
        res.status(400).render("errorpage",{
            error : "Please enter right and all details"
        });
    }
});
app.get("/legs",(req,res) => {
    res.render("legs");
});
app.get("/shoulders",(req,res) => {
    res.render("shoulders");
});

app.get("*", (req,res) => {
    res.render("errorpage",{
        error : "404 error"
    });
})

app.listen(port, () => {
    console.log(` Server is running at http://localhost:8000/ `);
});