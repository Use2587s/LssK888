const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "ping",
    category: "Information",
    description: "Check Ping Bot",
    args: false,
    usage: "",
    permission: [],
    voteonly: false,
    owner: false,
    execute: async (message, args, client, prefix) => {
      
  

  const Chup = new MessageEmbed()
    .setAuthor({ name : `| Ping: ${client.ws.ping}ms`, iconURL : client.user.displayAvatarURL() })
.setColor(client.embedColor)
    
message.reply({ embeds: [Chup] }) 
  
  
 }
 }
