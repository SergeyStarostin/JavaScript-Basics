const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const pathJSON = path.join(__dirname, "counter.json");

if (fs.existsSync(pathJSON)) {
  const counters = [
    {
      page: "/",
      count: 0,
    },
    {
      page: "/about",
      count: 0,
    },
  ];
  fs.writeFileSync(pathJSON, JSON.stringify(counters, null, 2), (error) => {
    if (error) return console.log(error);
  });
}

app.get("/", (req, res) => {
  fs.readFileSync(pathJSON, "utf8", (error, data) => {
    if (error) return console.log(error);
    let page = JSON.parse(data, "utf8");
    page[0].count += 1;
    fs.writeFileSync(pathJSON, JSON.stringify(page, null, 2), (error) => {
      if (error) return console.log(error);
    });
    res.send(`
        <h1>Main page</h1>
        <p>Visits ${page[0].count}</p>
        <a href="/about">About</a>`);
  });
});

app.get("/about", (req, res) => {
  fs.readFileSync(pathJSON, "utf8", (error, data) => {
    if (error) return console.log(error);
    let page = JSON.parse(data, "utf8");
    page[1].count += 1;
    fs.writeFileSync(pathJSON, JSON.stringify(page, null, 2), (error) => {
      if (error) return console.log(error);
    });
    res.send(`
        <h1>About</h1>
        <p>Visits ${page[1].count}</p>
        <a href="/">Main page</a>`);
  });
});

app.listen(3000, () => console.log("Server is running on port 3000"));
