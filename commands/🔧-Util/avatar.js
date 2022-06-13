const Discord = require('discord.js')
const { MessageEmbed } = require("discord.js");

module.exports ={
    name: 'avatar',
    description: 'Muestra tu avatar',
    aliases: ['avatar'],

    run: async (client, message, args) => {

        let person = message.mentions.members.first() || message.author
        let avatar = person.user.displayAvatarURL()
        const embed = new Discord.MessageEmbed()
            .setTitle("Avatar User")
            .setDescription(`Es la foto de ${person}`)
            .setImage(avatar)
            .setFooter("pedido por: " + message.author.tag)
            .setTimestamp()
        message.channel.send({embeds: [embed]})

    }
}