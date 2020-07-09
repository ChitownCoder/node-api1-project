const express = require('express');
const shortid = require('shortid');

const server = express();

//? THIS IS WHERE I WILL BE ADDING MY GIT REQUEST




const PORT = 5000;

server.listen(PORT, () => {
	console.log(`listening on http://localhost:${PORT}`);
});
