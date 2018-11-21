const Discord = require('discord.js');

const prefix = "n.";

var bot = new Discord.Client();

let statuses = ['n.aide', 'Bot par Nefer', 'NoKaZz_'];

bot.on('ready', () => {
       setInterval(function() {
             let status = statuses[Math.floor(Math.random()*statuses.length)];
             bot.user.setPresence({ game: { name: status }, status: 'online'});
         }, 1000)
       

})



bot.on('message', message => {


    if(message.content === prefix + "aide"){
        var aide_embed = new Discord.RichEmbed()
        .setColor("#000000")
        .setTitle("Voici toutes les command sur moi !")
        .setDescription("Je suis un bot Communautaire.")
        .addField("``n.aide``", "--> Vous affiche la command aide.")
        .addField("``n.youtube``", "--> Vous envoie le lien de la chaine youtube de NoKaZz_.")
        .addField("``n.fortnite``", "-->Vous montre le Pseudo Fortnite de NoKaZz_")
        .setFooter("Nokazbot par Neferr")
        .setTimestamp()
        message.channel.sendMessage(aide_embed);
    }
});

bot.on('message', message => {

    if(message.content === prefix + "youtube"){
        var embed = new Discord.RichEmbed()
        .setColor("#000000")
        .setTitle("Voici la chaine Youtube de **NoKaZz_**")
        .setDescription("https://www.youtube.com/channel/UC1upS39RYVWaQ3kxqG-dDwA")
        .setTimestamp()
        message.channels.sendMessage(embed);
    }
});

bot.on('message', message => {

    if(message.content === prefix + "fortnite"){
        var fortnite = new Discord.RichEmbed()
        .setColor("#000000")
        .setDescription("Voici le Pseudo Fortnite de **NoKaZz_**  = *Lucasss_13* ")
        .setTimestamp()
        message.channels.sendMessage(fortnite);
    }
});

bot.on('message', message => {

    if(message.content.startsWith(prefix + "nokazzgang")) {

        let membre = message.guild.member(message.author);

        let role = message.guild.roles.find('name', ':muscle:GanGanG :muscle:');

        membre.addRole(role).catch(console.error);

        message.channels.send(`${membre} a maintenant le role ${role} !`)
    }
});

bot.login(process.env.TOKEN);
