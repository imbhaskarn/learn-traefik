const express = require('express')
const {resolve}= require('path')
const app = express()

app.get('/', (req, res) =>{
    res.sendFile(resolve('./index.html'), (err, data) =>{
    })
})

app.listen(8082, ()=> console.log('running second'))