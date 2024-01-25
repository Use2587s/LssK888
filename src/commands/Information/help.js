const { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js");

module.exports = {
  name: "help",
  category: "Information",
  aliases: [ "h" ],
  description: "Get Help Menu",
  args: false,
  usage: "",
  permission: [],
  owner: false,
  execute: async (message, args, client, prefix) => {
    const lawde = new MessageActionRow()
      .addComponents(
        new MessageButton()
        .setLabel("Invite")
        .setStyle("LINK")
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=36768832&scope=applications.commands%20bot`), 
        new MessageButton()
        .setLabel("Support")
        .setStyle("LINK")
        .setURL("https://discord.gg/ATZUc9rCuS"),
        /*new MessageButton()
        .setLabel("Vote")
        .setStyle("LINK")
        .setURL(`https://discord.gg`),*/
      ) 

    let helpmenu = new MessageEmbed()
      .setAuthor({name : `${client.user.username} Help Menu;`,iconURL : client.user.displayAvatarURL()})
      .setThumbnail(client.user.displayAvatarURL())
      .setDescription(`> <:flowerblue:1199964491748741261> Prefix for this server is:  **${prefix}**\n > <:flowerblue:1199964491748741261>Total Commands: ${client.commands.size}\n\n 
      **__All Modules:__**\n${client.emoji.about} : **Info**\n${client.emoji.music} : **Music**\n${client.emoji.utility} : **Utility**\n${client.emoji.config} : **Config**\n${client.emoji.allcmd} : **All Commands**`)
      .setFooter({text : `Thanks For Using ${client.user.username}!` , iconURL : client.user.displayAvatarURL()}).setThumbnail(client.user.displayAvatarURL({dynamic : true}))
      .setColor(client.embedColor)
      .setImage(client.emoji.banner)
      
    const row = new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
        .setCustomId('help')
        .setPlaceholder('Select Module To Get Help For That Module')
        .addOptions([
          {
            label: 'Info',
            description: 'Show You Information Commands',
            value: 'first',
            emoji: `${client.emoji.about}`
          },
          {
            label: 'Music',
            description: 'Show You Music Commands',
            value: 'second',
            emoji: `${client.emoji.music}`
          },   
          {
            label: 'Utility',
            description: 'Show You Utility Commands',
            value: 'sixth',
            emoji: `${client.emoji.utility}`
          },         
          {
            label: 'Config',
            description: 'Show You Configuration Commands',
            value: 'fifth',
            emoji: `${client.emoji.config}`
          },
          {
            label: 'All Commands',
            description: 'Show You All Commands',
            value: 'third',
            emoji: `${client.emoji.allcmd}`
          }
        ])
      )
      if (!args[0]) return message.reply({embeds: [helpmenu], components: [row,lawde]});
  }
}