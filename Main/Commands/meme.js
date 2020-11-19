const Discord = require("discord.js")
const api = require("imageapi.js");

module.exports = {
  name: "meme",
  usage: "meme",
  description: "Memes",
  category: "memes",
  run: async (client, message, args) => {
    let subreddits = 
["memes", "dankmemes", "MemeEconomy", "PrequelMemes", "dankmeme"];
    let subreddit = subreddits[Math.floor(Math.random()*(subreddits.length))];
    let img = await api(subreddit)
    const Embed = new Discord.MessageEmbed()
    .setTitle(`Global Meme`)
    .setColor('RANDOM')
    .setImage(img)
    message.channel.send(Embed)
}
}