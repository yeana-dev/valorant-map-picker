const { SlashCommandBuilder } = require("discord.js");
const axios = require("axios");
let losers;

axios
  .get("https://yeana-discord-bot.herokuapp.com/loser")
  .then((res) => {
    losers = res.data;
    console.log(res.data);
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
