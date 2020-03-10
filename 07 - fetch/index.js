const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3000
const path = require('path');


app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
})); 



app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/public/fetch.html')))
app.use('/', express.static(__dirname + '/public'));


// for our sample get request
app.get('/testGet', (req, res) => {
    res.json({
        message: "Hello, GET!",
        queryParams: req.query
    })
})

// for our sample post request
app.post('/testPost', (req, res) => {

    // set timeout to simulate server delay
    setTimeout(() => {
        res.json({
            message: "Post updated",
            body: req.body,
        })
    }, 2000)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})