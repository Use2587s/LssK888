const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "vote",
    category: "Information",
    aliases: [ "v", "vo" ],
    description: "Vote The Bot",
    args: false,
    usage: "",
    permission: [],
    owner: false,
   execute: async (message, args, client, prefix) => {
const row = new MessageActionRow().addComponents(
      new MessageButton()
        .setLabel("Vote")
        .setStyle("LINK")
        .setEmoji("<:arrow_up:1199965180986146867>")
        .setURL(`https://discord.gg/ATZUc9rCuS`)
        )
     const embed = new MessageEmbed()
      .setAuthor({name: `Vote ${client.user.username}`, iconURL: client.user.displayAvatarURL()})
      .setDescription(`[Click Here](https://discord.gg/ATZUc9rCuS) or On The Below Button To Vote Me`)
      .setColor(`${client.embedColor}`)
      return message.reply({ 
        embeds: [embed],
        components: [row]
      });
  },
};
