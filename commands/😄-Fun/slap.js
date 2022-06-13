const Discord = require('discord.js')
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'slap',
    category: 'Fun',
    Permissions: "ADMINISTRATOR",
    aliases: ['slap', 'Slap', 'SLAP'],
    
    run: async (client, message, args) => {

        var list = [
            "https://c.tenor.com/iDdGxlZZfGoAAAAC/powerful-head-slap.gif",
            "https://c.tenor.com/GBShVmDnx9kAAAAC/anime-slap.gif",
            "https://c.tenor.com/CvBTA0GyrogAAAAC/anime-slap.gif",
            
        ];
        var perm = message.member.permissions.has("ADMINISTRATOR");
        if(perm === true){

            var rand = list[Math.floor(Math.random() * list.length)];
            let person = message.mentions.members.first() || client.users.cache.get(args[0])
    
            if(!person) return message.channel.send("Debes mencionar a alguien")
    
            const embed = new Discord.MessageEmbed()
            .setTitle("Abofeteado")
            .setColor("RED")
            .setDescription(`${message.author} abofeteado a ${person}`)
            .setImage(rand)
            .setFooter("Abofeteado por: " + message.author.tag)
            .setTimestamp()
    
            message.channel.send({embeds: [embed]})
        }

        if(perm === false){
            message.channel.send('No tienes los Permisos necesarios para ejecutar este comando. `ADMINISTRATOR`')
        }
     }
}