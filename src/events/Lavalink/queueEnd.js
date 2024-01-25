const delay = require("delay");
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const ms = require('ms');
const i18n = require("../../utils/i18n");

module.exports = async (client, player) => {

  const channel = client.channels.cache.get(player.textChannel);
  const emojiwarn = client.emoji.warn;

  const tmkc = new MessageActionRow()
    .addComponents(
      new MessageButton()
        .setLabel("Invite")
        .setStyle("LINK")
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=36768832&scope=applications.commands%20bot`),
    )

  let thing = new MessageEmbed()
    .setColor(client.embedColor)
    .setDescription(`Queue has been ended. Add more songs to keep the party going`)
    .setAuthor({ name: `${client.user.username}`, iconURL: client.user.displayAvatarURL() });
  channel.send({ embeds: [thing], components: [tmkc] });
}