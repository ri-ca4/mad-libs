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

app.post("/result", (req, res) => {
    //res.send(req.body)
    res.render('result', {
        story: req.body.story,
        noun: req.body.noun,
        verb: req.body.verb,
        adj: req.body.adj
    })
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});