const express = require("express")
const app = express()
const cors = require('cors')

app.use(cors())

app.get("/", (req, res) => {
    res.json("Welcome to User API")
})

app.get("/users", (req, res) => {
    const users = [
        {
            id: 1,
            name: 'Scott',
            age:45,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Adam',
            age:44,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Tuan',
            age:42,
            skill: 'VueJS'
        },
        {
            id: 4,
            name: 'Uma',
            age:39,
            skill: 'Javascript'
        },
    ]
    res.json(users)
})

const PORT = 3001

app.listen(PORT, () => {
    console.log(`Server is listening at PORT ${PORT}`)
})