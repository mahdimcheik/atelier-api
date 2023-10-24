const express = require("express");
const app = express();
const port = 5000;

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else
    console.log(
      "Leslie is the best  and the server is lesting to the port 5000"
    );
});

const users = [
  {
    id: 1,
    name: "Mathieu",
    location: "Bordeaux",
  },
  {
    id: 2,
    name: "Annael",
    location: "Bordeaux",
  },
  {
    id: 3,
    name: "Timon",
    location: "Bordeaux",
  },
  {
    id: 4,
    name: "Pumba",
    location: "Bordeaux",
  },
  {
    id: 5,
    name: "Raph",
    location: "Talence",
  },
  {
    id: 6,
    name: "Dimitri",
    location: "Lormont",
  },
  {
    id: 7,
    name: "Nassime",
    location: "Cenon",
  },
  {
    id: 8,
    name: "Adam",
    location: "Bègles",
  },
  {
    id: 9,
    name: "Nelia",
    location: "Talence",
  },
  {
    id: 10,
    name: "Sylvain",
    location: "Bordeaux",
  },
  {
    id: 11,
    name: "Cassioppé",
    location: "Bordeaux",
  },
  {
    id: 12,
    name: "Claire",
    location: "Talence",
  },
];

app.get("/users", (req, res) => {
  let limit = +req.query.limit;
  let location = req.query.location;
  let usersLocations = [];
  if (location)
    usersLocations = users.filter((user) => user.location === location);
  else usersLocations = users;
  ///////////////////////

  if (limit) {
    res.status(200).json(usersLocations.slice(0, limit));
  } else {
    res.status(200).json(usersLocations.slice(0, 10));
  }
});

app.get("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  let user = users.find((user) => user.id === userId);
  if (user) res.status(200).json(user);
  else res.status(404).send("Not Found MF");
});
