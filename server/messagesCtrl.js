const allMessages = [];

function getAllMessages (req, res, next){
  res.json( allMessages )
}

function createMessage (req, res, next) {
  let newMessage = {
    username: req.body.username,
    message: req.body.message
  }
  allMessages = {...allMessages, newMessage}
  res.json( allMessages )
}


module.exports = {
  getAllMessages,
  createMessage
}