const Discord = require("discord.js")

module.exports = {
  name: "botinfo",
  usage: "botinfo",
  description: "Botinfo",
  category: "info",
  run: async (client, message, args) => {
    const errbed = new Discord.MessageEmbed()
            .setColor("#2F3136")
           .setFooter("Thunder Bot By Team Thunder", "https://cdn.discordapp.com/avatars/700498374063030345/a_9f3853e64f9b55c701177e0f21005981.gif")

            .addFields(
                {
                    name: 'Servers',
                    value: `**Serving ${client.guilds.cache.size} servers.**`,
                    inline: true
                },
                {
                    name: 'Channels',
                    value: `**Serving ${client.channels.cache.size} channels.**`,
                    inline: true
                },
                {
                    name: 'Server Users',
                    value: `**Serving ${client.users.cache.size} users.**`,
                    inline: true
                },
                {
                    name: 'Ping',
                    value: `**${Math.round(client.ws.ping)}ms**`,
                    inline: true
                }
              
            )
      .setFooter("Meme Bot", "https://cdn.discordapp.com/avatars/700498374063030345/a_9f3853e64f9b55c701177e0f21005981.gif?size=256&f=.gif");
      message.channel.send(errbed);
  }
}