const Discord = require('discord.js')
const { MessageEmbed } = require("discord.js");
module.exports = {
    name: 'ping',
    category: 'Util',
    aliases: ['ping', 'Ping', 'PING'],

    run: async (client, message, args) => {
        message.reply('Calculando el Ping.....').then((resultMessage)=> {
            const ping = resultMessage.createdTimestamp - message.createdTimestamp

            const embed = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setTitle('`Pong!`🏓')
            .addField('`Latencia del Bot:`', `${ping}ms`)
            .addField('`Latencia de la API:`', `${Math.round(client.ws.ping)}ms`)	

            message.reply({embeds: [embed]})
        })
    }
}
