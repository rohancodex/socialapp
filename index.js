const express = require('express')
const app = express()
const port = 3000 || process.env.PORT

app.get('/', (req, res) =>{
 res.status(200).send("<h1>Hello home</h1>")

})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))