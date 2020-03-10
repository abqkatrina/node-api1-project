
const express = require("express");
const shortid = require("shortid"); 

const server = express();

// let users = [];

server.use(express.json());

server.get("/", (req, res) => {
const users = [
    {
        id: 1,
        username: 'Bob'
    },
    {
        id: 2,
        username: 'Mercutio'
    }]
    res.status(200).json(users)
});

server.post("/api/users", (req, res) => {
  const usersInfo = req.body;

  usersInfo.id = shortid.generate();

  users.push(usersInfo);

  res.status(201).json(usersInfo);
});

server.get("/api/users", (req, res) => {
  res.status(200).json(users);
});


const PORT = 5000;
server.listen(PORT, () =>
  console.log(`\n** API on http://localhost:${PORT} **\n`)
);

