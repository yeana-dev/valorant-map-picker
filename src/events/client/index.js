const app = require("express")();
const PORT = 8080;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));

let losers = [
  {
    name: "Shinoong",
    count: 0,
  },
  {
    name: "Yeana",
    count: 0,
  },
  {
    name: "guhny",
    count: 0,
  },
  {
    name: "jaydini",
    count: 0,
  },
  {
    name: "sAnGy",
    count: 0,
  },
  {
    name: "WaaaSabby",
    count: 0,
  },
  {
    name: "Z",
    count: 0,
  },
  {
    name: "BRIVN",
    count: 0,
  },
  {
    name: "Chirido",
    count: 0,
  },
];

function handleLoser() {
  let loser = losers[Math.floor(Math.random() * 9)];
  loser.count++;
}

app.get("/", (req, res) => {
  res.send("Testing");
});

app.get("/loser", (req, res) => {
  res.status(200).send({
    test: 1,
    loser: "Guhny",
  });
});

app.post("/loser", (req, res) => {
  let loser = losers[Math.floor(Math.random() * 9)];
  loser.count++;
  res.status(200).send({
    loser: loser,
  });
});
