require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>
{
    res.send("Twitter is ready")
})
app.listen(express.evn.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})