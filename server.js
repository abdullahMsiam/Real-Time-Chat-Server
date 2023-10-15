const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const { chats } = require('./fake-data/fake-data');

const app = express();

//middleware 
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Hello from server")
})

app.get("/api/chat", (req, res) => {
    res.send(chats);
})

app.get("/api/chat/:id", (req, res) => {
    // console.log(req.params.id);
    const singleChat = chats.find(c => c._id === req.params.id);
    res.send(singleChat);
})


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("server is running")
})