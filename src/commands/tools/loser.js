const { SlashCommandBuilder } = require("discord.js");
const axios = require("axios");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("loser")
    .setDescription("Let's see who's a loser"),
  async execute(interaction, client) {
    const message = await interaction.deferReply({
      fetchReply: true,
    });

    let loser;
    let newMsg;

    await axios
      .post("https://yeana-discord-bot.herokuapp.com/loser", {})
      .then(function (res) {
        loser = res.data;
        newMsg = `**${loser.name}** is a loser\n${loser.name}'s been a loser ${loser.count} times\nSee the list: https://yeana-discord-bot.herokuapp.com/loser`;
        console.log(res.data);
      })
      .catch(function (err) {
        console.error(err);
      });

    await interaction.editReply({
      content: newMsg,
    });
  },
};
