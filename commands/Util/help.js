const Discord = require('discord.js')
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'help',
    category: 'Util',
    aliases: ['help', 'Help', 'HELP'],

    async run (client, message, args) {
            
            message.delete()
    
            const help = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setTitle('`Comandos Disponibles.`📚')
                .setThumbnail('https://cdn.discordapp.com/avatars/974753987918200912/e7eb89e300765ed1fedcda99729a374e.png?size=4096')

                .addField('`📚-Horario`', '`Revisa el Horario General de Cada Pais del Servidor.`')
                .addField('`📚-Info`', '`Revisa la Informacion del Servidor. *Aun en Desarrollo*`')
                .addField('`📚-Ping`', '`Revisa el Ping del Servidor. *Aun en Desarrollo*`')
                .addField('`📚-Invite`', '`Invita a un Amigo a este Servidor. *Aun en Desarrollo*`')

            message.channel.send({embeds: [help]});
                
    }
}