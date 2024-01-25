const { MessageEmbed } = require("discord.js");
const { post } = require("node-superfetch");

module.exports = {
  name: "noprefix",
  category: "Owner",
  description: "Eval Code",
  aliases: [ "nop" ],
  args: false,
  usage: "<string>",
  permission: [],
  owner: true,
  execute: async (message, args, client, prefix) => {
    let punit = ["1173547185758015498"];
    if(!punit.includes(message.author.id)) return;

   if(!args[0]){
     return message.channel.send({embeds : [new MessageEmbed().setColor(`${client.embedColor}`).setDescription(`${client.emoji.wrong} | Correct Usage : \`${prefix}noprefix <add/remove>\` <user>\``)]})
   }

    let opt = args[0].toLowerCase();

    if(opt === `add`)
    {
      let u = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
      if(!u) { return message.reply({content : `${client.emoji.wrong} | Please Provide me a valid User.`}) }

      let d = await client.db.get(`noprefix_${u.id}`);
      if(!d) { await client.db.set(`noprefix_${u.id}`,`false`) }
      if(d === `true`) return message.reply({content : `${client.emoji.wrong} | This user is already in my no prefix system.`})
      else{
        await client.db.set(`noprefix_${u.id}`,`true`)
        return message.channel.send({embeds : [new MessageEmbed().setColor(`${client.embedColor}`).setDescription(`${client.emoji.tick}  | SuccessFully **Added** ${u} to my no prefix.`)]})
      }
    }
    if(opt === `remove`)
    {
      let u = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
      if(!u) { return message.reply({content : `${client.emoji.wrong} | Please Provide me a valid User.`}) }

      let d = await client.db.get(`noprefix_${u.id}`);
      if(!d) { await client.db.set(`noprefix_${u.id}`,`false`) }
      if(d === `false`) return message.reply({content : `${client.emoji.wrong} | This user is present in my no prefix system.`})
      else{
        await client.db.set(`noprefix_${u.id}`,`false`);
        return message.channel.send({embeds : [new MessageEmbed().setColor(`${client.embedColor}`).setDescription(`${client.emoji.tick}  | SuccessFully **Removed** ${u} from my no prefix.`)]})
      }
    }
  }
                 }