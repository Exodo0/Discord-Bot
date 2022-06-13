const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'kiss',
    category: 'Fun',
    aliases: ['kiss', 'Kiss', 'KISS'],
    
    
    run : async (client, message, args) => {

        var list= [
            'https://c.tenor.com/7T1cuiOtJvQAAAAC/anime-kiss.gif',
            'https://c.tenor.com/UQwgkQbdp48AAAAC/kiss-anime.gif',
            'https://tenor.com/view/anime-couple-val-ally-kiss-gif-24860682'
        ];
        
        var rand = list[Math.floor(Math.random() * list.length)];
        let person = message.mentions.members.first() || client.users.cache.get(args[0]);

        if(!person) return message.channel.send(`:x: | ${message.author} Menciona a alguien Primero!`);

        const embed = new Discord.MessageEmbed()
        .setTitle('🌹 | Kiss')
        .setDescription(`${message.author} **Te le a dado un beso a ${person}**`)
        .setImage(rand)
        .setColor('RANDOM')
        .setTimestamp()
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: 'png' }))
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true, format: 'png' }))

        message.channel.send({embeds: [embed]});
    }
}