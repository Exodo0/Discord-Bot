const Discord = require('discord.js')
const MessageEmbed = require('discord.js')


module.exports = {
    name: 'sugerencias',
    description: 'Envía una sugerencia a los desarrolladores',
    aliases: ['sugerencia'],

    run: async (client, message, args) => {
        let sugerencia = args.join(" ")
        if (!sugerencia) return message.channel.send("Debes escribir una sugerencia")
        message.delete()
        let embed = new Discord.MessageEmbed()
            .setTitle("Sugerencia")
            .setDescription(`${message.author} ha enviado una sugerencia: ${sugerencia}`)
            .setThumbnail(message.author.avatarURL())
            .setColor("RANDOM")
            .setFooter("Sugerencia enviada por: " + message.author.tag)
            .setTimestamp()
        client.channels.cache.get("831289658713178162").send({embeds: [embed]})

        message.channel.send('Tu sugerencia ha sido enviada')
        .then(msg => {
            msg.delete({ timeout: 5000 })
        })
    }
}