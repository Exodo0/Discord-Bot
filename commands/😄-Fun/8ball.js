const Discord = require('discord.js')
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: '8ball',
    category: 'Fun',
    aliases: ['8ball', '8Ball', '8BALL'],

    run: async (client, message, args) => {

        if(!args[2]) return message.reply('Debes Preguntarme algo!');
        
        const replies = require('../../Data/Replies8.json');

        const result = Math.floor((Math.random() * replies.length));
        const question = args.slice(1).join(" ");

        const embed = new Discord.MessageEmbed()
        .setTitle('🎱 | Tu Pregunta')
        .setFooter(message.author.tag)
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: 'png' }))
        .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYOsdBXgu1iKp9pzmSWMr6dggwzK-A0P4CCw&usqp=CAU')
        .setColor("RANDOM")
        .addField("Pregunta:", question)
        .addField("Respuesta:", replies[result]);

        message.channel.send({embeds: [embed]});
    }
}