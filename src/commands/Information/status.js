const { MessageEmbed, MessageActionRow, MessageButton, version } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const os = require('os')
const si = require('systeminformation');

module.exports = {
    name: "status",
    category: "Information",
    aliases: [ "stats", "st" ],
    description: "Show status bot",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    execute: async (message, args, client, prefix) => {
       const duration1 = moment.duration(message.client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
        const cpu = await si.cpu();
        const about = message.client.emoji.about;
        let ccount = client.channels.cache.size;
        let scount = client.guilds.cache.size;
        let mcount = 0; 
client.guilds.cache.forEach((guild) => {
    mcount += guild.memberCount 

})
      let fck = client.ws.ping
        const embed = new MessageEmbed()
          .setAuthor({name : `${client.user.username}'s Information:`,iconURL : client.user.displayAvatarURL()})
.setColor(client.embedColor)
.setDescription('A Next-Generation Discord Music Bot With Many Awesome Features, Buttons, Menus, a Context Menu, and Customizable Settings')
.setThumbnail(client.user.displayAvatarURL())
.addFields({ name: '• | Servers', value: `${scount}`, inline: false },
           { name: '• | Channels', value: `${ccount}`, inline: false },
           { name: '• | Users', value: `${mcount}`, inline: false },
           { name: '• | Discord.js', value: `${version}`, inline: false },
           { name: '• | Node', value: `${process.version}`, inline: false },
           { name: '• | Platform', value: `${os.type}`, inline: false },
           { name: '• | Uptime', value: `${duration1}`, inline: false },
           { name: '• | Ping', value: `${client.ws.ping}ms`, inline: false },
           { name: '• | Cores', value: `${cpu.cores}`, inline: false },
           { name: '• | Model', value: `${os.cpus()[0].model}`, inline: false },
           { name: '• | Speed', value: `${os.cpus()[0].speed}MHz`, inline: false })
.setImage('')
          .setFooter({text : `Made With 💖 By TEC` , iconURL : client.user.displayAvatarURL()});

      const But1 = new MessageButton().setLabel(`${scount} Servers`).setCustomId("s").setStyle("DANGER").setDisabled();
      const But2 = new MessageButton().setLabel(`${mcount} Members`).setCustomId("m").setStyle("DANGER").setDisabled();
      const But3 = new MessageButton().setLabel(`Discord.js ${version}`).setCustomId("v").setStyle("DANGER").setDisabled();
      const But4 = new MessageButton().setLabel(`Uptime ${duration1}`).setCustomId("u").setStyle("DANGER").setDisabled();
      const row = new MessageActionRow().addComponents(But1, But2, But3, But4);
message.reply({ embeds: [embed], components: [row] });
    }
}