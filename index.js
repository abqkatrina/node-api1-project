
const express = require("express");
const shortid = require("shortid"); 

const server = express();

let users = [];

server.use(express.json());


//GET THE ARRAY OF USERS
server.get("/users", (req, res) => {
// const users = [
//     {
//         id: 1,
//         username: 'Bob'
//     },
//     {
//         id: 2,
//         username: 'Mercutio'
//     }]
   res.status(200).json(users)
});


//GET A SINGLE USER BY ID
server.get("/users/:id", (req, res) => {

    users.map(user => {
        if(user.id === req.body.id){
            res.status(200).json(user)
        } else {
            res.status(404).json({error: "that id# is m.i.a."})
        }
    })
});

//ADD A NEW USER
server.post("/users", (req, res) => {
  const usersInfo = req.body;

  usersInfo.id = shortid.generate();

  users.push(usersInfo);

  res.status(201).json(usersInfo);

  if (req.body.name || req.body.bio === undefined){
      res.status(400).json({error: "need a name and bio, yo."})
  }
});

//EDIT AN EXISTING USER
server.patch("/users/:id", (req, res) => {
    const changedUser = req.body;
    if(changedUser.id === user.id){
        res.status(200).json(changedUser)
    }else{
        res.status(500).json({error: "could not modify. sorry, boo."})
    }
})

//DELETE AN EXISTING USER
server.delete("/users/:id",(req, res) =>{
    res.send(204);
    if (req.body.name || req.body.id != user.name || user.id){
        res.status(500).json({error: "cannot delete atm. try again, maybe."})
    }
})


const PORT = 5000;
server.listen(PORT, () =>
  console.log(`\n** Check out this sweet API on http://localhost:${PORT} **\n`)
);

