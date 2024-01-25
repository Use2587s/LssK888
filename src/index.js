const MusicBot = require("./structures/MusicClient");
const Topgg = require("@top-gg/sdk")
const client = new MusicBot();
client.topgg = new Topgg.Api("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk0NTAwMzkzNzU0NTcyODAyMSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjQ4Mzg2MTA4fQ.Yfbrnwfy1SwNIFyZjt5JtOzFiDEFRbkVxyr62PM3VEs")
client.connect()

module.exports = client; 
var http = require('http'); http.createServer(function (req, res) { res.write("I'm alive"); res.end(); }).listen(8080); 

const { MessageEmbed } = require('discord.js')

  client.on('interactionCreate', async interaction => {
    if (!interaction.isSelectMenu()) return;
    
    let options = interaction.values;
    const funny = options[0]

    if(funny === 'first') {
        const embed1 = new MessageEmbed()
          .setColor(client.embedColor)
          .setThumbnail(`https://images-ext-2.discordapp.net/external/xT7h21HiofHO0u_YC-9UDiDIz_vGp4iScm6dF-wveks/https/cdn.discordapp.com/emojis/1107838954046238773.png`)      
          .setDescription(`${client.emoji.arrow} \`:\` Help\n${client.emoji.arrow} \`:\` Invite\n${client.emoji.arrow}\`:\` Afk\n${client.emoji.arrow} \`:\` Ping\n${client.emoji.arrow} \`:\` Node\n${client.emoji.arrow} \`:\` Stats\n${client.emoji.arrow} \`:\` Uptime\n${client.emoji.arrow} \`:\` Vote`)
         .setAuthor({name : `Information Commands`,iconURL : client.user.displayAvatarURL()})              .setColor(client.embedColor)
         .setFooter({ text: `Quality Music By : ${client.user.username}`, iconURL: client.user.displayAvatarURL() })
         //.setImage(client.emoji.banner)   
        interaction.reply({ embeds: [embed1], ephemeral: true })
        return
    }

if(funny === 'fourth') {
        const embed2 = new MessageEmbed()
        .setThumbnail(`https://images-ext-2.discordapp.net/external/n2eAoqcWDKZaMZJ80vxajlNhmUfYRexypafr4qPxLV0/https/cdn.discordapp.com/emojis/1083428865512312923.gif`)
        .setDescription(`${client.emoji.arrow} \`:\` Eval\n${client.emoji.arrow} \`:\` Noprefix\n${client.emoji.arrow} \`:\` Serverlist\n${client.emoji.arrow} \`:\` Leaveserver`)
        .setAuthor({name : `Owner Commands`,iconURL : client.user.displayAvatarURL()})
        .setColor(client.embedColor)
        .setFooter({ text: `Quality Music By : ${client.user.username}`, iconURL: client.user.displayAvatarURL() })
        //.setImage(client.emoji.banner)   
        interaction.reply({ embeds: [embed2], ephemeral: true })
        return
    }

if(funny === 'second') {
        const embed4 = new MessageEmbed()
        .setThumbnail(`https://images-ext-1.discordapp.net/external/lq0y_8Piohw6inqY8n3mYZcXplDk7v1mT9TiXy5vUG0/https/cdn.discordapp.com/emojis/1107834014036930742.png`) 
        .setDescription(`${client.emoji.arrow} \`:\` AutoPlay\n${client.emoji.arrow} \`:\` Clearqueue\n${client.emoji.arrow} \`:\` Join\n${client.emoji.arrow} \`:\` Leave\n${client.emoji.arrow} \`:\` Loop\n${client.emoji.arrow} \`:\` Nowplaying\n${client.emoji.arrow} \`:\` Pause\n${client.emoji.arrow} \`:\` Play\n${client.emoji.arrow} \`:\` Volume\n${client.emoji.arrow} \`:\` Destroy\n${client.emoji.arrow} \`:\` Queue\n${client.emoji.arrow} \`:\` Resume\n${client.emoji.arrow} \`:\` Shuffel\n${client.emoji.arrow} \`:\` Skip\n${client.emoji.arrow} \`:\` Stop`)
        .setAuthor({name : `Music Commands`,iconURL : client.user.displayAvatarURL()})
        .setColor(client.embedColor)
        .setFooter({ text: `Quality Music By : ${client.user.username}`, iconURL: client.user.displayAvatarURL() })
       //.setImage(client.emoji.banner)   
        interaction.reply({ embeds: [embed4], ephemeral: true })
        return
    }

if(funny === 'fifth') {
        const embed5 = new MessageEmbed()
        .setThumbnail(`https://images-ext-1.discordapp.net/external/ijxyBg-PLuUyFEUQuEPkW87bFlFv2ITNrFdrLpfvrNw/https/cdn.discordapp.com/emojis/1107839037286400120.png`)
        .setDescription(`${client.emoji.arrow} \`:\` 24/7\n${client.emoji.arrow} \`:\` Setprefix\n${client.emoji.arrow} \`:\` Destroy`)
        .setAuthor({name : `Config Commands`,iconURL : client.user.displayAvatarURL()})
        .setColor(client.embedColor)
        .setFooter({ text: `Quality Music By : ${client.user.username}`, iconURL: client.user.displayAvatarURL() })
        //.setImage(client.emoji.banner)   
  interaction.reply({ embeds: [embed5], ephemeral: true })
        return
}

  if(funny === 'sixth') {
        const embed6 = new MessageEmbed()
        .setThumbnail(`https://images-ext-1.discordapp.net/external/djsA6443-a3oD3hP66OKIPtRiMMp8dVn9MOsO8T1mis/https/cdn.discordapp.com/emojis/1082447369607598131.png`)
        .setDescription(`${client.emoji.arrow} \`:\` Avatar\n${client.emoji.arrow} \`:\` Serverinfo\n${client.emoji.arrow} \`:\` Servericon\n${client.emoji.arrow} \`:\` Membercount\n${client.emoji.arrow} \`:\` Firstmsg\n${client.emoji.arrow} \`:\` Listroles\n${client.emoji.arrow} \`:\` Listemojis`)
        .setAuthor({name : `Utility Commands`,iconURL : client.user.displayAvatarURL()})
        .setColor(client.embedColor)
        .setFooter({ text: `Quality Music By : ${client.user.username}`, iconURL: client.user.displayAvatarURL() })
        //.setImage(client.emoji.banner)   
  interaction.reply({ embeds: [embed6], ephemeral: true })
        return
          }

if(funny === 'third') {
        const embed3 = new MessageEmbed()
          .setThumbnail(client.user.displayAvatarURL())
          .addField(`${client.emoji.about}┃Information Commands`,"`help, invite, afk, ping, node, stats, uptime, vote`")
          .addField(`${client.emoji.music}┃Music Commands`,"`autoplay, clearqueue, join, leave, loop, nowplaying, pause, play, volume, destroy, queue, resume, shuffle, skip, stop`")
          .addField(`${client.emoji.owner}┃Owner Commands`,"`Eval`, `Noprefix`, `Serverlist`, `Leaveserver`")
          .addField(`${client.emoji.utility}┃Utility Commands`,"`avatar, server-icon, serverinfo, membercount, firstmsg, list-roles, list-emojis`")
          .addField(`${client.emoji.config}┃Config Commands`,"`24/7, setprefix, destroy`")
        .setAuthor({name : `All Commands`,iconURL : client.user.displayAvatarURL()})
        .setColor(client.embedColor)
        .setFooter({ text: `Quality Music By : ${client.user.username}`, iconURL: client.user.displayAvatarURL() })
        //.setImage(client.emoji.banner)   
  interaction.reply({ embeds: [embed3], ephemeral: true })
        return
}

})
