const express = require("express");
const fs = require("fs");
const path = require("path");
const Joi = require("joi");

const schema = Joi.object({
  firstName: Joi.string().min(3).max(30).required(),
  lastName: Joi.string().min(3).max(30).required(),
  age: Joi.number().integer().min(0).required(),
  city: Joi.string().min(1).max(30),
});

let uniqueId = 1;
const app = express();
const pathDB = path.join(__dirname, "users.json");

app.get("/users", (req, res) => {
  const users = JSON.parse(fs.readFileSync(pathDB, "utf8"));
  res.send({ users });
});

app.get("/users/:id", (req, res) => {
  const users = JSON.parse(fs.readFileSync(pathDB, "utf8"));
  const user = users.find((user) => user.id === Number(req.params.id));
  if (user) {
    res.send({ user });
  } else {
    res.sendStatus(404);
    req.send({ message: "User not found" });
  }
});

app.post("/users", (req, res) => {
  const users = JSON.parse(fs.readFileSync(pathDB, "utf8"));
  uniqueId++;

  users.push({ id: uniqueId, ...req.body });
  fs.writeFileSync(pathDB, JSON.stringify(users, null, 2));
  res.send({ id: uniqueId });
});

app.put("/users/:id", (req, res) => {
  const result = schema.validate(req.body);
  if (result.error) {
    return res.status(404).send({ error: result.error.message });
  }
  const users = JSON.parse(fs.readFileSync(pathDB, "utf8"));
  let user = users.find((user) => user.id === Number(req.params.id));

  if (user) {
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.age = req.body.age;
    user.city = req.body.city;
    fs.writeFileSync(pathDB, JSON.stringify(users, null, 2));
    res.send({ user });
  } else {
    res.sendStatus(404);
    req.send({ message: "User not found" });
  }
});

app.delete("/users/:id", (req, res) => {
  const users = JSON.parse(fs.readFileSync(pathDB, "utf8"));
  let user = users.find((user) => user.id === Number(req.params.id));

  if (user) {
    const userIndex = users.indexOf(user);
    users.splice(users.indexOf(user), 1);
    fs.writeFileSync(pathDB, JSON.stringify(users, null, 2));
    res.send({ user });
  } else {
    res.sendStatus(404);
    req.send({ message: "User not found" });
  }
});

const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
