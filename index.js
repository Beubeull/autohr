//Ajout du module node
const Discord = require('discord.js');

//Création du bot
var bot = new Discord.Client();

//Variable prefix
var prefix = ('!');

bot.login(process.env.TOKEN);

bot.on('ready', () => {

    bot.user.setPresence({game: {name: 'Gestion RH de la HUS'}});
    console.log("Bot prêt");

})

//Mention d'une personne
bot.on('message', message => {

    if(message.content === prefix + "aide"){

        message.reply("Je ne peux pas j'ai piscine");

    }

    if(message.content === prefix + "help"){

        message.channel.send("I can not I have pool");
        
    }

});

//Message de bienvenue
bot.on('guildMemberAdd', member => {

    member.guild.channels.find('name', 'generalbullshit').send(`Bienvenue ${member}`);

});

//Message de bon debarras
bot.on('guildMemberRemove', member => {

    member.guild.channels.find('name', 'generalbullshit').send(`Bon débarras ${member}`);

});

//Ajout d'un rôle
bot.on('guildMemberAdd', member => {

    var role = member.guild.roles.find('name', 'Members');
    member.addRole(role);

});
