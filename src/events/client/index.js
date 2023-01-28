import losers from '../../data.json';

const app = require("express")();
const PORT = process.env.PORT || 3000;

console.log(losers);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));

function handleLoser() {
  let loser = losers[Math.floor(Math.random() * 9)];
  loser.count++;
}

app.get("/", (req, res) => {
  res.send(losers);
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
