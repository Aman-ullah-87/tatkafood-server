const express = require('express')
const app = express()
const port = process.env.PORT || 7000
const chefData = require('./data/Data.json')

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/chef', (req, res) => {
    res.send(chefData)
})
app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = chefData.find(n => n.id === id);
    res.send(selectedNews)
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})