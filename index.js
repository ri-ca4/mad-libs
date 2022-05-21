const { response } = require('express');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;


app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render('index');
});

app.post("/story1", (req, res) => {
    //res.send(req.body)
    res.render('story1', {
        story: req.body.story,
        noun: req.body.noun,
        verb: req.body.verb,
        adj: req.body.adj
    })
});

app.post("/story2", (req, res) => {
    //res.send(req.body)
    res.render('story2', {
        story: req.body.story,
        noun: req.body.noun,
        verb: req.body.verb,
        adj: req.body.adj
    })
});

app.post("/story3", (req, res) => {
    //res.send(req.body)
    res.render('story3', {
        story: req.body.story,
        noun: req.body.noun,
        verb: req.body.verb,
        adj: req.body.adj
    })
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});