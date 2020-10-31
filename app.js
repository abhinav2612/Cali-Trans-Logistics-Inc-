var express = require("express"),
    app = express(),
    mongoose = require('mongoose'),
    path = require('path');
    
mongoose.connect("mongodb://localhost:27017/cali-trans", { useNewUrlParser: true, useUnifiedTopology: true }); 

app.use(express.static(__dirname + "/public"));
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get("/",function(req,res){
    res.render("navbar.html")
})
app.get("/about",function(req,res){
    res.render("about.html");
})
app.get("/footer",function(req,res){
    res.render("footer.html");
})
app.get("/contact",function(req,res){
    res.render("contact.html");
})
app.get("/workwithus",function(req,res){
    res.render("workwithus.html");
})

const PORT = process.env.PORT || 3000;
app.listen(PORT);
