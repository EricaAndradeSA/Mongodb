const express= require('express');
const cors = require('cors'); 
const app = express()
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:true}))
const port = 8080
app.listen(port, () => {
    console.log("http://localhost:" + port)
})

module.exports = app;