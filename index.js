const express = require('express');
const shortid = require('shortid');

const server = express();


//? CREATING ARRAYS FOR PROJECT
let users = [
  {
    id: shortid.generate(),
    name: 'Kevin',
    bio: 'Kevin is just an ordinary fella who likes to code',
  },
  {
    id: shortid.generate(),
    name: 'Arlene',
    bio: 'Arlene Loves to cause problems.',
  },
  {
    id: shortid.generate(),
    name: 'Todd',
    bio: 'Takes up space and lays around.',
  },
];

//? THIS IS WHERE I WILL BE ADDING MY GET REQUEST
server.get('/', (req, res) => {
  res.json({message: 'Hello World!'});
});

server.get('/api/users', (req, res) => {
	res.status(200).json(users);
});
//? CALLING USER BY SPECIFIED ID
server.get('/api/users/:id', (req, res) => {
  const { id } = req.params;

  const found = users.find(hub => hub.id === id);
  if (found) {
      hubs = users.filter(hub => hub.id !== id);
      res.status(200).json(found);
  } else {
      res.status(404).json({ message: "user not found" });
  }

});






const PORT = 5000;

server.listen(PORT, () => {
	console.log(`listening on http://localhost:${PORT}`);
});
