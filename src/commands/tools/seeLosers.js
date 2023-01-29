const { SlashCommandBuilder } = require("discord.js");
const axios = require("axios");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("alllosers")
    .setDescription("See the current list of losers"),
  async execute(interaction, client) {
    const message = await interaction.deferReply({
      fetchReply: true,
    });

    let losers;

    await axios
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

    await interaction.editReply({
      content: losers,
    });
  },
};
