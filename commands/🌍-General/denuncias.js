const Discord = require('discord.js')
const MessageEmbed = require('discord.js')

module.exports = {
    name: 'denuncias',
    description: 'Envía una denuncia a los desarrolladores',
    aliases: ['denuncia','report','reportar'] ,
    
    run: async (client, message, args) => {

        const reason = args.join(" ")
        if (!reason) return message.channel.send("Debes escribir una denuncia")

        if(!args[0]) return message.channel.send("Debes especificar un usuario.");
        
        const user = message.mentions.users.first() || client.users.cache.get(args[0]);
        if(!user) return message.channel.send("Debes mencionar a alguien.");

        message.delete()
        const embed = new Discord.MessageEmbed()
        .setTitle("Denuncia")
        .setDescription(`${message.author} ha denunciado a ${user} por: ${reason}`)
        .setColor("RANDOM")
        .setThumbnail(message.author.avatarURL())
    
        .setFooter("Denuncia enviada por: " + message.author.tag)
        .setTimestamp();
        client.channels.cache.get("737466045996073041").send({embeds: [embed]});
    }
}