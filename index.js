// ! Running on port 3000 in the browser at  http://localhost:3000/index.html

const express = require("express");
const app = express();

// serve static files from public directory
app.use(express.static("public"));

// create user account simulate. The create function accepts three parameters: name, email, and password. It returns a Promise that resolves after a 2-second delay with an object containing the provided user information. This delay simulates a slow operation, such as creating a user account in a real application.
function create(name, email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve({
          name,
          email,
          password,
        });
      } catch (err) {
        reject(err);
      }
    }, 2000);
  });
}

// create user API. This code defines a route that listens for GET requests at the path "/account/create/:name/:email/:password." It extracts the values for name, email, and password from the URL parameters using req.params. Then, it calls the create function with these parameters. When the Promise resolves, it sends the created user object as a response and logs it. If any errors occur during the user creation process, they are logged as well.
app.get("/account/create/:name/:email/:password", function (req, res) {
  create(req.params.name, req.params.email, req.params.password)
    .then((user) => {
      console.log(user);
      res.send(user);
    })
    .catch((err) => console.log(err));
});

// start server
app.listen(3000, function () {
  console.log("Running on port 3000");
});
