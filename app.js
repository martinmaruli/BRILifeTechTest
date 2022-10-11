const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const router = require('./routes');

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.status(200).json({
        status : "App running good",
        time : new Date().toLocaleString()
    })
})

app.use('/api/v1', router)

app.listen(port, ()=> {
    console.log(`Server listen on Port : ${port}`);
})