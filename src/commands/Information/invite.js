const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
  name: "invite",
  category: "Information",
  aliases: [ "addme", "i", "inv" ],
  description: "Invite Bot",
  args: false,
  usage: "",
  permission: [],
  owner: false,
  execute: async (message, args, client, prefix) => {
    
    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
        .setLabel("Invite")
        .setStyle("LINK") 
        .setEmoji("<:LinkIcon:1199964649500721153>")
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=36768832&scope=applications.commands%20bot`), 
        new MessageButton()
        .setLabel("Support")
        .setStyle("LINK")
        .setEmoji("<:icon_headphone:1199964800290148403>")
        .setURL("https://discord.gg/ATZUc9rCuS")
      )
      
    const mainPage = new MessageEmbed()
      .setAuthor({name: `Invite ${client.user.username}`, iconURL: client.user.displayAvatarURL()})
      .setColor(client.embedColor)
      .setDescription(`[Click here](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=36768832&scope=applications.commands%20bot) To Invite Or The Below Button To Invite`)
    
      message.reply({ embeds: [mainPage], components: [row] });
  },
};