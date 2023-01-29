const { SlashCommandBuilder } = require("discord.js");
const axios = require("axios");

let losers = [
  {
    name: "Shinoong",
    count: 13,
  },
  {
    name: "Yeana",
    count: 9,
  },
  {
    name: "guhny",
    count: 12,
  },
  {
    name: "jaydini",
    count: 9,
  },
  {
    name: "sAnGy",
    count: 9,
  },
  {
    name: "WaaaSabby",
    count: 16,
  },
  {
    name: "Z",
    count: 15,
  },
  {
    name: "BRIVN",
    count: 5,
  },
  {
    name: "Chirido",
    count: 0,
  },
];

axios
  .get("https://yeana-discord-bot.herokuapp.com/loser")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  })
  .then(() => {
    console.log("Completed GET request");
  });

module.exports = {
  data: new SlashCommandBuilder()
    .setName("loser")
    .setDescription("Let's see who's a loser"),
  async execute(interaction, client) {
    const message = await interaction.deferReply({
      fetchReply: true,
    });

    let loser = losers[Math.floor(Math.random() * 9)];
    loser.count++;

    const newMessage = `**${loser.name}** is a loser\n${loser.name}'s been a loser ${loser.count} times`;
    await interaction.editReply({
      content: newMessage,
    });
  },
};
