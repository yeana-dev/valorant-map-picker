const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder().setName('map').setDescription('Pick random valorant map!'),
    async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchReply: true
        });

        const maps = ['Pearl','Fracture','Breeze','Icebox','Bind','Haven','Split','Ascent','Lotus'];

        const newMessage = `> Yeana's Bot picked:\n > **${maps[Math.floor(Math.random() * 9)]}**\n Happy Friday :partying_face: `;
        await interaction.editReply({
            content: newMessage
        })
    }
}