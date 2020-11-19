const { token, default_prefix } = require("./config.json")
const { config } = require("dotenv");
const discord = require("discord.js") 
const Discord = require('discord.js');
const client = new discord.Client({
  disableEveryone: true
})
const api = require("imageapi.js");

client.commands = new discord.Collection();
client.aliases = new discord.Collection();

client.commands = new discord.Collection()
client.prefix = default_prefix
client.queue = new Map();
client.vote = new Map();


["command"].forEach(handler => { 
  require(`./handlers/${handler}`)(client)
})

client.on("ready",  async (member) => {
client.user.setPresence({
   activity: { name: "Developed By ThunderOP 🖤", type: "PLAYING" },
   status: "online"
});
  console.log('I m ready to Go | Developed By Thunder')

//Global Memes
 setInterval(async function(guild) {
    const channels = client.channels.cache.filter(channel => channel.topic === "Memes").array();
    for(const channel of channels) {
    let subreddits = 
["memes", "dankmemes", "MemeEconomy", "PrequelMemes", "dankmeme"];
    let subreddit = subreddits[Math.floor(Math.random()*(subreddits.length))];
    let img = await api(subreddit)
    const iameme = new Discord.MessageEmbed()
    .setTitle(`Meme`)
    .setColor('RANDOM')
    .setImage(img)
    .setFooter(`Developed by Thunder OP!`)
channel.send(iameme)
    }
}, 120000)

}
)

client.on("message", async message => {
  
if(message.author.bot) return;
  if(!message.guild) return;
  let prefix = default_prefix;

    if (message.mentions.has(client.user.id) && !message.content.includes("@everyone") && !message.content.includes("@here")) {
      let mentionEmbed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(" ")
      .setDescription(`**My prefix  is [  ${prefix}  ]**
      **Type ${prefix}help for commands of the bot**`);
     message.channel.send(mentionEmbed)
      }

  if(!message.content.startsWith(prefix)) return;

     if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
  

    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command) 
        command.run(client, message, args);
  

})

client.login(token)
