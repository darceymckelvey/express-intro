// express is consiodered middleware

const express = require('express')
const app = express()
const port = 3000

function custom_middleware(req, res, next) {
  console.log("custom middleware");
  next();
}

app.use(custom_middleware);

// middleware for encoded data
app.use(express.urlencoded({
    extended: true,
  }))

// RestfullAPI
// stands for representational state Transfer
//  API stands for Application Programming Interface
//  a way to design your urls to make it easier to interact with your server

//  API's use HTTP methods to interact with the server
// GET method is used to get data from the server
// POST method is used to send data to the server
// PATCH method is used to update data on the server
// PUT methosd is used to overwrite data objects on a server
// DELETE method is used to delete data from the server

// HTTP Status Codes
//  These are codes used to represent status of the request/response
// 200 = succesful
// 201 = Created
// 404 = Not Found
// 400 = Bad request - invalid or malformed request
// 500 = Interal Server Error

const users = [
  {id: 0, name: "Andrew", age: 30},
  {id: 1, name: "Darcey", age: 30},
];

// get method
app.get('/users', (req, res) => {
  res.send(users, 200);
});

// get method to get specific user
app.get('/users/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let user = user.find((user) => user.id == id);

  if(!user) {
    // send 404 status code
res.send("User not found.", 404);
  }


app.post('/users', (req, res) => {
  console.log(req.body);
  // get data from request body
  let user = {
    id: users.length + 1,
    name: req.body.name,
    age: req.body.age
  }
  users.push(user);
  res.send(user, 201);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});