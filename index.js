const app = require('./app')

const port = 3000

app.get('/', (req, res) => {
    res.send("Hello world!!!!")
})

app.listen(port, () => {
    console.log(`Server Listening on Port http://localhost:${port}`)
})