console.clear();
const Discord = require('discord.js');
const fs = require('fs')
const mongoose = require('mongoose');
const db = require('quick.db');
const dotenv = require('dotenv');
dotenv.config()

const prefix = process.env.prefix;

const client = new Discord.Client({
    intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES]
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();



client.on("messageCreate", (msg) => {
    if (msg.author.bot)
        return console.log(`Mensaje del Bot: ${msg.author.username}`);
    const embed = new Discord.MessageEmbed()
        .setTitle('Auto Responser')
        .setDescription('Soy el Jefe de JACK')
        .setImage('https://tr.rbxcdn.com/d9dd115e8784ff669b6c19217b70f33e/150/150/AvatarHeadshot/Png')
        .setColor('RED')
        .setTimestamp()

    if (msg.content.endsWith("JMC"))
        return msg.reply({ embeds: [embed] })
    //embed end
    const embed2 = new Discord.MessageEmbed()

        .setTitle('Auto Responser')
        .setDescription('Bolox')
        .setImage('https://c.tenor.com/N50XeT-PNbYAAAAd/gato-bailando.gif')
        .setColor('PURPLE').setTimestamp()

    if (msg.content.endsWith("panri"))
        return msg.reply({ embeds: [embed2] })

    //embed2 end

    const embed3 = new Discord.MessageEmbed()

        .setTitle('Auto Responser')
        .setDescription('Soy el Pony Mas sepsi del Mundo')
        .setImage('https://cdn.discordapp.com/attachments/976671106486394911/977386118301487124/unknown.png')
        .setFooter('Phantom entiende, Pony si brilla o no?')
        .setColor('LUMINOUS_VIVID_PINK')
        .setTimestamp()

    if (msg.content.endsWith("pony"))
        return msg.reply({ embeds: [embed3] })

    //emebed 3 end

    const embed4 = new Discord.MessageEmbed()

        .setTitle('Auto Responser')
        .setDescription('Un ñao OwO')
        .setColor('LUMINOUS_VIVID_PINK')
        .setThumbnail('https://tr.rbxcdn.com/90a6724fdddaeff9e1c9661167add51e/150/150/AvatarHeadshot/Png')
        .setImage('https://cdn.discordapp.com/avatars/512853125594349568/8aff45422705543d4b0f06bb5e253873.png?size=4096')
        .setTimestamp()
    if (msg.content.endsWith("kary"))
        return msg.reply({ embeds: [embed4] })

    //emebed 4 end

    const embed5 = new Discord.MessageEmbed()
        .setTitle('Auto Responser')
        .setDescription('Robo Nombres y Fotos')
        .setColor('RANDOM')
        .setImage('https://cdn.discordapp.com/avatars/789547661799063572/93a4774e82c63c4976d495c352fe1869.png?size=4096')
        .setTimestamp()
    if (msg.content.endsWith("nuberto"))
        return msg.reply({ embeds: [embed5] })

    //emebed 5 end

    const embed6 = new Discord.MessageEmbed()
        .setTitle('Auto Responser')
        .setDescription('Robo Roles UwU')
        .setColor('RANDOM')
        .setImage('https://cdn.discordapp.com/avatars/819330319529410580/cb64db72bc40639d866fa72941084ae9.png?size=4096')
        .setTimestamp()
    if (msg.content.endsWith("emiks"))
        return msg.reply({ embeds: [embed6] })


    //emebed 6 end

    const embed7 = new Discord.MessageEmbed()
        .setTitle('Auto Responser')
        .setDescription('Soy Hetero :angry:')
        .setColor('RANDOM')
        .setImage('https://c.tenor.com/_4YgA77ExHEAAAAd/rick-roll.gif')
        .setTimestamp()
    if (msg.content.endsWith("soyunpibe"))
        return msg.reply({ embeds: [embed7] })

    //embed 7 end 

    const embed8 = new Discord.MessageEmbed()
        .setTitle('Auto Responser')
        .setDescription('Quiero un Comando UwU')
        .setColor('RANDOM')
        .setImage('https://cdn.discordapp.com/avatars/870447496260902983/fe489ea8ea28fcb0d6a4c21910c60d4a.png?size=4096')
        .setTimestamp()
    if (msg.content.endsWith("oesp"))
        return msg.reply({ embeds: [embed8] })

    //embed 8 end

    const embed9 = new Discord.MessageEmbed()
        .setTitle('Auto Responser')
        .setDescription('Soy una bolita de manteca')
        .setColor('RANDOM')
        .setImage('https://laroussecocina.mx/wp-content/uploads/2018/01/Manteca-de-cerdo.jpg')
        .setFooter(`Dañino para la salud wei`)
        .setTimestamp()
    if (msg.content.endsWith("BolaDeMantecaOwO"))
        return msg.reply({ embeds: [embed9] })

    //embed 9 end

    const embed10 = new Discord.MessageEmbed()
        .setTitle('Auto Responser')
        .setDescription('Mio mi Pony UwU')
        .setColor('RANDOM')
        .setImage('https://tr.rbxcdn.com/e0649194767a0e0c33094c90e0a0a453/352/352/Avatar/Png')
        .setTimestamp()
    if (msg.content.startsWith("DD"))
        return msg.reply({ embeds: [embed10] })

    //embed 10 end

    const embed11 = new Discord.MessageEmbed()
        .setTitle('Auto Responser')
        .setDescription('Soy Trapito y Cartelero valiente')
        .setColor('RANDOM')
        .setImage('https://cdn.discordapp.com/attachments/957516112457764875/982827908823404554/unknown.png')
        .setFooter('Ta fumado')
        .setTimestamp()
    if (msg.content.endsWith("joel"))
        return msg.reply({ embeds: [embed11] })

    //embed 11 end

    const embed12 = new Discord.MessageEmbed()
        .setTitle('Auto Responser')
        .setDescription('ponche de emergench')
        .setColor('RANDOM')
        .setImage('https://cdn.discordapp.com/attachments/976671106486394911/977383974752092190/unknown.png')
        .setFooter('Ta potente')
        .setTimestamp()
    if (msg.content.endsWith("decuin"))
        return msg.reply({ embeds: [embed12] })

    //embed 12 end

    const embed13 = new Discord.MessageEmbed()
        .setTitle('Auto Responser')
        .setDescription('Ya Vali Gente')
        .setColor('RANDOM')
        .setImage('https://cdn.discordapp.com/attachments/976671106486394911/977385567719415858/unknown.png')
        .setFooter('Es muy inaktivo se parece a marivin')
        .setTimestamp()
    if (msg.content.endsWith("scorpion"))
        return msg.reply({ embeds: [embed13] })

    //embed 13 end

    const embed14 = new Discord.MessageEmbed()
        .setTitle('Auto Responser')
        .setDescription('Toy Viejito 👵')
        .setColor('RANDOM')
        .setImage('https://cdn.discordapp.com/attachments/948449787764703253/977387226507927592/5ffee3839dae94c9c7585f8636377281.png')
        .setFooter('impaktante 102 años')
        .setTimestamp()
    if (msg.content.startsWith("J3uei2"))
        return msg.reply({ embeds: [embed14] })

    //embed 14 end

    const embed15 = new Discord.MessageEmbed()
        .setTitle('Auto Responser')
        .setColor('BLURPLE')
        .setDescription('Hola Soy Marvin y soy pro Etscusas')
        .addFields(
            { name: 'Hoy no me voy a poder unir porque', value: 'No me prende la pc', inline: true },
            { name: 'Hoy no me voy a poder unir porque', value: 'Esta lloviendo fuerte unete a vc', inline: true },
            { name: 'Hoy no me puedo unir porque', value: 'Joel se robo la pc', inline:  true}
        )
        .setTimestamp()
        .setImage('https://c.tenor.com/C71ARGMnRN8AAAAd/flood-overflow.gif')
    if (msg.content.startsWith("marivin"))
        return msg.reply({embeds: [embed15]})


        const embed16 = new Discord.MessageEmbed()
        .setTitle('Auto Responser')
        .setDescription('Soy Trapito y presidente no activo')
        .setColor('RANDOM')
        .setImage('https://cdn.discordapp.com/avatars/721905465650577409/9db1da914a5c74d2183836d2aaf3c02c.png?size=4096')
        .setFooter('es inactivo')
        .setTimestamp()
    if (msg.content.endsWith("preso"))
        return msg.reply({ embeds: [embed16] })

        const embed17 = new Discord.MessageEmbed()
        .setTitle('Auto Responser')
        .setDescription('Un camion')
        .setColor('RANDOM')
        .setImage('https://www.lubricantesenvenezuela.com/wp-content/uploads/2019/06/Todo-sobre-camiones.jpg')
        .setFooter('es inactivo')
        .setTimestamp()
    if (msg.content.endsWith("conductu"))
        return msg.reply({ embeds: [embed17] })
})
client.once('ready', (bot) => {
    client.user.setActivity('Re Write 2. ', { type: 'COMPETING' })
    mongoose.connect(
        process.env.MONGO_URI || '', {
        keepAlive: true
    }
    )
    console.log(`Bot: ${bot.user.username}\nStatus: ${bot.presence.status}`);
});
function getDirectories() {
    return fs.readdirSync("./commands").filter(function subFolders(file) {
        return fs.statSync("./commands/" + file).isDirectory();
    });
}
const commandFiles = fs
    .readdirSync("./commands/")
    .filter((file) => file.endsWith(".js"));
for (const folder of getDirectories()) {
    const folderFiles = fs
        .readdirSync("./commands/" + folder)
        .filter((file) => file.endsWith(".js"));
    for (const file of folderFiles) {
        commandFiles.push([folder, file]);
    }
}
for (const file of commandFiles) {
    let command;
    if (Array.isArray(file)) {
        command = require(`./commands/${file[0]}/${file[1]}`);
    } else {
        command = require(`./commands/${file}`);
    }

    client.commands.set(command.name, command);
    console.log(`✔️ Comando Cargado- ${command.name} `);
}


client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd =
        client.commands.get(command) ||
        client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(command));
    if (cmd) cmd.run(client, message, args);
    let customCommands = db.get(`guildConfigurations_${message.guild.id}.commands`);
    if (customCommands) {
        let customCommandsName = customCommands.find(x => x.name === command);
        if (customCommandsName) return message.channel.send(customCommandsName.response);
    }
})

client.login(process.env.token)