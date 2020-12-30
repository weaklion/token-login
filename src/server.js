const express    = require('express');
const jwt        = require('jsonwebtoken');
const cors       = require('cors');
const bodyParser = require('body-parser');
const fs         = require('fs');
const users      = require("./db/user.json");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req,res) => {
  res.json({
    message : "response API"
  })
});

app.get("/result", verifyToken, (req,res) => {

  jwt.verify(req.token, 'let_it_go', error => {
    if(error) {
      res.sendStatus(401);
    } else {
      res.json({
        name : users.name
      })
    }
  })
});

app.post("/register", (req,res) => {
  if(req.body) {
    const user = {
      name    : req.body.name,
      email   : req.body.email,
      password: req.body.password
    };

    const data = JSON.stringify(user, null, 2);
    const userEmail = users.email;
    const errorArray = [];
    const secret_key = "let_it_go";

    if( userEmail === req.body.email) {
      errorArray.push('an account with this email already exists.');
    }

    console.log(req.body);
    
    if ( req.body.password.length < 5 ){
      errorArray.push("Password must be at least 5 characters ");
    }

    if(errorArray.length > 0) {
      res.status(400).json({
        error : errorArray
      })
    }
    else {
      fs.writeFile("./src/db/user.json", data, (error) => {
        if(error) {
          console.log(error + data);
        } else {
          const token = jwt.sign( {user}, secret_key);
          res.json(({
            token,
            email : user.email,
            name  : user.name
          }))
        }
      })
    }
  } else {

  }
});

app.post("/login", (req, res) => {
  const userDB = fs.readFileSync("./src/db/user.json");
  const userInfo = JSON.parse(userDB);
  const secret_key = "let_it_go";
  if(
    req.body && req.body.email === userInfo.email &&
    req.body.password === userInfo.password
  ) {
    const token = jwt.sign({userInfo}, secret_key);
    res.json({
      token,
      email : userInfo.email,
      name :  userInfo.name
    })
  } else {
    res.status(401).json({
      error : 'Invalid Login. please try again'
    });
  }
});

function verifyToken(req, res, next) {

  console.log(req.headers);

  const header = req.headers["authorization"];

  if(typeof header !== "undefined") {
    const bearer = header.split(" ");
    const token = bearer[1];
    req.token = token;
    next();   
  } else {
    res.sendStatus(401);
  }
}

app.listen(3000, () => {
  console.log("started on port 3000");
});