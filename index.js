const express = require('express')
const app = express()
const port = 3000 || process.env.PORT
const format = require('date-format')

app.get('/', (req, res) =>{
 res.status(200).send("<h1>Hello home</h1>")

})

app.get('/api/v1/instagram',(req,res)=>{
    const instaSocial = {
        username: "rohan",
        followers: 69,
        follows: 420,
        date: format.asString("dd-MM-yyyy hh:mm:ss",new Date()),    }

    res.status(200).json(instaSocial)
})


app.get('/api/v1/facebook',(req,res)=>{
    const instaSocial = {
        username: "rohan",
        followers: 69,
        follows: 420,
        date: format.asString("dd-MM-yyyy hh:mm:ss",new Date()),    }

    res.status(200).json(instaSocial)
})


app.get('/api/v1/linkedin',(req,res)=>{
    const instaSocial = {
        username: "rohan",
        followers: 69,
        follows: 420,
        date: format.asString("dd-MM-yyyy hh:mm:ss",new Date()),
    }

    res.status(200).json(instaSocial)
})

app.get('/api/v1/:token',(req,res)=>{
    
    let token = req.params.token
    res.status(200).json({"token":token})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))