const app = require("express")();
const PORT = process.env.PORT || 3000;
const { losers } = require("../../data.json");

app.listen(PORT, () => console.log(`listening on port ${PORT}`));

app.get("/", (req, res) => {
  res.send("<h3>Testing</h3>");
});

app.get("/loser", (req, res) => {
  res.status(200).send(losers);
});

app.post("/loser", (req, res) => {
  let loser = losers[Math.floor(Math.random() * losers.length)];
  loser.count++;
  res.status(200).send(loser);
});

app.post("/loser/:name", (req, res) => {
  const { name } = req.params;
  let exist = false;
  losers.forEach((loser) => {
    if (loser.name === name) {
      exist = true;
    }
  });
  if (exist) {
    res.status(418).send({ message: "This user already exists" });
  } else {
    losers.push({ name: name, count: 0 });
    res.status(200).send({ message: `${name} has been added` });
  }
});
