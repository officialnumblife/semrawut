const Discord = require("discord.js");
const music = new Discord.Client({disableEveryone: true});
music.commands = new Discord.Collection();
const {color} = require('./config.json');
const queue = new Map();
const ytdl = require("ytdl-core");


const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log('Pinging');
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

music.on("ready", () => {
    console.log(`Logged in as : ${music.user.tag}`);
    console.log(`${music.user.username} is ready!`) //log untuk menandakan bot kalian sudah online:v
    setInterval(() => {
     const status = [
      `Prefix saya s!`,
      `Semrawut music bot featured`,
      `🌍On🌍 ${music.guilds.size} Server`,
      `📡On📡 ${music.channels.size} Voice Channels`,
      `👥With👥 ${music.users.size} Users`
    ];
     let random = Math.floor(Math.random() * status.length)
     music.user.setPresence({ game: { name: status[random], type: "Streaming", url: "https://www.twitch.tv/_kibayy"}});
  }, 5000);
})



music.on('message', async message => {

    let prefix = 's!'; // UBAH PREFIX DISINI


    let msg = message.content.toLowerCase();
    let args = message.content.slice(prefix.length).trim().split(" ");
    let cmd = args.shift().toLowerCase();
    let sender = message.author;

    if (!msg.startsWith(prefix)) return;
    if (sender.bot) return;
    
    try {
        let commandFile = require(`./commands/${cmd}.js`); 
        commandFile.run(music, message, args, color, queue); 
    } catch(e) { 
        console.log(e.message); 
    } finally { 
        console.log(`${message.author.username} ran the command: ${cmd} on ${message.guild.name}`);
    }
    if (message.content === '--') {
        if (message.member.voiceChannel) {
            message.member.voiceChannel.leave();
            console.log("left a channel");
        } else {    }
    }
if (cmd === "nusantara")
  {
      message.member.voiceChannel.join()
                    .then(connection => {
    console.log("joined channel");
    const pokesamwan = [ 
      `https://www.youtube.com/watch?v=jdgfD8ac6ao`,
      `https://www.youtube.com/watch?v=GXNqgT308f0`, // promo
      `https://www.youtube.com/watch?v=Tet6_BlStEM`,
      `https://www.youtube.com/watch?v=M-P4QBt-FWw`,
      `https://www.youtube.com/watch?v=XimX18tJitU `, // promo
      `https://www.youtube.com/watch?v=jjYpd6X41VA`,
      `https://www.youtube.com/watch?v=MBdVXkSdhwU`,
      `https://www.youtube.com/watch?v=GXNqgT308f0`, // promo
      `https://www.youtube.com/watch?v=Y5q7etvf8_o`,
      `https://www.youtube.com/watch?v=GXNqgT308f0`, // promo
      `https://www.youtube.com/watch?v=MRAOKsDtdCQ`,
      `https://www.youtube.com/watch?v=YnMRjO3UdN8`,
      `https://www.youtube.com/watch?v=GXNqgT308f0`, // promo
      `https://www.youtube.com/watch?v=qU98N9K8Hpg`,
      `https://www.youtube.com/watch?v=RBMKRfY9C7c`,
      `https://www.youtube.com/watch?v=GXNqgT308f0` // promo

        
    ];
const wordAnswer = pokesamwan[Math.floor(Math.random() * pokesamwan.length)]
      	const dispatcher = connection.playStream(ytdl(`${wordAnswer}`))
        	connection.dispatcher.setVolumeLogarithmic(1);
    message.channel.send({embed: new Discord.RichEmbed()
                    .setAuthor(message.author.tag,message.author.avatarURL)
                    .setDescription(`😊 **Nusantara Radio Demo - STASIUN MUSIC DISCORD !!**`)
.setColor("#FFFF00")
                         })
function tetew() {
    console.log("joined channel");
    const pokesamwan = [ 
      `https://www.youtube.com/watch?v=jdgfD8ac6ao`,
      `https://www.youtube.com/watch?v=GXNqgT308f0`, // promo
      `https://www.youtube.com/watch?v=Tet6_BlStEM`,
      `https://www.youtube.com/watch?v=M-P4QBt-FWw`,
      `https://www.youtube.com/watch?v=XimX18tJitU `, // promo
      `https://www.youtube.com/watch?v=jjYpd6X41VA`,
      `https://www.youtube.com/watch?v=MBdVXkSdhwU`,
      `https://www.youtube.com/watch?v=GXNqgT308f0`, // promo
      `https://www.youtube.com/watch?v=Y5q7etvf8_o`,
      `https://www.youtube.com/watch?v=GXNqgT308f0`, // promo
      `https://www.youtube.com/watch?v=MRAOKsDtdCQ`,
      `https://www.youtube.com/watch?v=YnMRjO3UdN8`,
      `https://www.youtube.com/watch?v=GXNqgT308f0`, // promo
      `https://www.youtube.com/watch?v=qU98N9K8Hpg`,
      `https://www.youtube.com/watch?v=RBMKRfY9C7c`,
      `https://www.youtube.com/watch?v=GXNqgT308f0` // promo
    ];
const wordAnswer = pokesamwan[Math.floor(Math.random() * pokesamwan.length)]

      	const dispatcher = connection.playStream(ytdl(`${wordAnswer}`))
        	connection.dispatcher.setVolumeLogarithmic(1);
}; setInterval(tetew, 225000)
                        
 })

  }
if (cmd === "keluar")
  {
      message.member.voiceChannel.leave()
  }
});

music.login(process.env.TOKEN);
