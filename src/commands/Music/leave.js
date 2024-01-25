const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "leave",
    aliases: ["dc"],
    category: "Music",
    description: "Leave voice channel",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    player: true,
    inVoiceChannel: true,
    sameVoiceChannel: true,
 execute: async (message, args, client, prefix) => {
       
        const player = message.client.manager.get(message.guild.id);
   const { channel } = message.member.voice;

        player.destroy();
        
        let thing = new MessageEmbed()
            .setColor(message.client.embedColor)
            .setDescription(`${client.emoji.leave} | **Successfully Leaved From Here <#${channel.id}>**`)
          return message.reply({embeds: [thing]});
	
    }
};