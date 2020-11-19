const Discord = require("discord.js")

module.exports = {
  name: "hautomemes",
  usage: "meme",
  description: "Memes",
  category: "memes",
  run: async (client, message, args) => {

    const Embed = new Discord.MessageEmbed()
    .setTitle(`Setup Auto-Memes in Your Server :smile: `)
    .setFooter("Follow The picture ⭐ | Made By - T H U N Đ Ξ Я 🖤")
    .setColor('#2F3136')
    .setDescription("```How to Setup Auto-Memes``` ```Set the channel topic to 'Memes'. This channel will be the one where the bot will send Global Memes after every 2 Minutes.```")
    .setImage("https://cdn.discordapp.com/attachments/739793781641183292/758291216789143572/unknown.png")


    message.channel.send(Embed)
  }
}