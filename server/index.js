const PORT = 3100
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const server = app.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`)
})
const {Server} = require('socket.io')
const io = new Server(server, {
    cors: {
        origin: '*'
    }
})


io.on('connection', (socket) => {
    console.log(`a user connected: ${socket.id}`)

    socket.on('message', (message) => {
        socket.broadcast.emit('message', `Message from server: ~${message}~ sender => ${socket.id}`)
    })

})


app.use(cors())
app.use(bodyParser.json())

app.get('/', (req,res) => {
    res.status(200).send({msg:"ok 200"})
})

