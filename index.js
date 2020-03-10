
const express = require("express");
const shortid = require("shortid"); 

const server = express();

let hubs = [];

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "running..." });
});

server.post("/api/hubs", (req, res) => {
  const hubInfo = req.body;

  hubInfo.id = shortid.generate();

  hubs.push(hubInfo);

  res.status(201).json(hubInfo);
});

server.get("/api/hubs", (req, res) => {
  res.status(200).json(hubs);
});


const PORT = 5000;
server.listen(PORT, () =>
  console.log(`\n** API on http://localhost:${PORT} **\n`)
);

