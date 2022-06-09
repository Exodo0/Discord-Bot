const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js')

module.exports = {
    name: 'Horario',
    category: '😎-Grupo',
    aliases: ['HR', 'Hr', 'hr'],

    async run (client, message, args) {

        message.delete()

        const Mexico = new Discord.MessageEmbed()

            .setColor("GREEN")
            .setTitle('`Horarios de Apertura del Servidor.`🕠')
            .setThumbnail('https://cdn.discordapp.com/avatars/926707785046036480/7b1ca21016abde6000d12bcb1eb4670c.webp?size=1024')
            .setImage('https://thumbs.gfycat.com/DiligentSplendidBrahmanbull-size_restricted.gif')
            .setDescription('Horario en Renovacion \n\n Codigo para unirse: Kepgm')

            .addField('`Ciudad De México:`', '5:30 PM', inline = true)
            .addField('`Baja California:`', '3:30 PM', inline = true)
            .addField('`Baja California Sur:`', '4:30 PM', inline = true)
            .addField('`La Paz México:`', '4:30 PM', inline = true)
            .addField('`Venezuela:`', '6:30 PM', inline = true)
            .addField('`Colombia:`', '5:30 PM', inline = true)
            .addField('`Paraguay:`', '6:30 PM', inline = true)
            .addField('`Peru:`', '5:30 PM', inline = true)
            .addField('`Bolivia:`', '6:30 PM', inline = true)
            .addField('`Chile:`', '6:30 PM', inline = true)
            .addField('`Republica Dominicana:`', '6:30 PM', inline = true)
            .addField('`Costa Rica:`', '4:30 PM', inline = true)
            .addField('`Puerto Rico:`', '6:30 PM', inline = true)
            .addField('`España:`', '12:30 AM', inline = true)
            .addField('`Argentina:`', '7:30 PM', inline = true)
            .addField('`Ecuador:`', '5:30 PM', inline = true)
            .addField('`Texas:`', '5:30 PM', inline = true)
            .addField('`Honduras:`', '4:30 PM', inline = true)
            .addField('`Guatemala:`', '4:30 PM', inline = true)
            .addField('`uruguay:`', '7:30 PM', inline = true);
        message.channel.send({embeds: [Mexico]});

        const tuto = new Discord.MessageEmbed()
            .setTitle('Tutorial Para Unirte')
            .setDescription('Algunas veces Esto puede Estar desactualizado por Cambio de codigo.')
            .setImage('https://media.discordapp.net/attachments/960632581458653204/960983353815883877/2022-04-03_23-46-41.gif');
        message.channel.send({embeds: [tuto]});



    }
}