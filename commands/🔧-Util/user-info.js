const Discord = require('discord.js')
const moment = require ('moment')
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'user-info',
    category: 'Util',
    aliases: ['user-info', 'User-info', 'USER-INFO'],

    run: async (client, message, args) => {

        var member = message.mentions.members.first() || message.member
        var user = message.mentions.users.first() || message.author 

        const roles = member.roles.cache
        .sort ((a, b) => b.position - a.position)
        .map(role => role.toString())
        .slice(0, -1)
        let displayRoles;

        if(roles.length < 15) {
            displayRoles = roles.join(", ")
        } else {
            displayRoles = "El Miembro tiene demaciados Roles Para Mostrarlos."
        }
        const info = new Discord.MessageEmbed()
        .setColor("blue")
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true , format: 'png' }))
        .setAuthor(member.user.tag, member.user.displayAvatarURL({ dynamic: true , format: 'png' }))
        .addField("ID:", member.user.id, true)
        .addField("Usuario:", member.user.username, true)
        .addField("Tag:", member.user.discriminator, true)
        .addField("Creacion:", moment(member.user.createdAt).format('LL'), true)
        .addField(`Roles:(${roles.length})`, `${displayRoles}`)
        .addField("Cuenta Creada en:", moment(member.joinedAt).format('LL'), true)
        .addField("Pedido por:", `<@${member.user.id}>`, true)

        message.reply({embeds: [info]})
    }
}