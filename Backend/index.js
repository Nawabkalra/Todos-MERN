const express = require("express")
const app = express()

app.use(express.json)

app.get('/todos', (req, res) => {
    
})

app.post('/todo', (req, res) => {
    
})

app.put('/completed', (req, res) => {
    
})

app.delete('/', (req, res) => {
    
})


app.listen(3000)
console.log("Listening on port:3000")

