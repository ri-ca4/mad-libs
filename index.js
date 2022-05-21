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
    return res.send(req.body);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})