const express = require('express')

const app = express()

const apiPort = 5000


app.get('/user', (req, res) => {
    res.send('Hello World!')
})

app.listen(apiPort, () => console.log(`Server running on port : ${apiPort}`));