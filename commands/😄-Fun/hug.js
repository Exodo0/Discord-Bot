const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'hug',
    category: 'Fun',
    aliases: ['hug', 'Hug', 'HUG'],
    
    run : async (client, message, args) => {

        var list= [
            'https://i.pinimg.com/originals/bb/84/1f/bb841fad2c0e549c38d8ae15f4ef1209.gif',
            'https://c.tenor.com/FYKsVaNI7lkAAAAC/anime-hug.gif',
            'https://c.tenor.com/1T1B8HcWalQAAAAM/anime-hug.gif'
        ];
        
        var rand = list[Math.floor(Math.random() * list.length)];
        let person = message.mentions.members.first() || client.users.cache.get(args[0]);

        if(!person) return message.channel.send(`:x: | ${message.author} Menciona a alguien Primero!`);

        const embed = new Discord.MessageEmbed()
        .setTitle('🤗 | Abrazo')
        .setDescription(`${message.author} **Le dio un abrazo a ${person}**`)
        .setImage(rand)
        .setColor('RANDOM')
        .setTimestamp()
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: 'png' }))
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true, format: 'png' }))

        message.channel.send({embeds: [embed]});
    }
}