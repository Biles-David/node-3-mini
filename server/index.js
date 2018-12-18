require('dotenv').config()
const express = require('express');
const axios = require('axios');
const { json } = require('body-parser');
const { getAllMessages, createMessage } = require('./messagesCtrl')


let { SERVER_PORT } = process.env;
const app = express()

app.use(json())

app.get('/api/messages', getAllMessages)
app.post('/api/messages', createMessage)

app.listen(SERVER_PORT, () => console.log(`Listening on part ${SERVER_PORT}`))