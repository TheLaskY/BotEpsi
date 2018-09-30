const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = '!'
const ownerID = '261486733059817475'
/* global Map*/
const active = new Map();

client.on('ready', () => {
  console.log('-------------------------------')
  console.log('        EPSI Bot Online        ')
  console.log('-------------------------------')
  client.user.setActivity('!help')
})

const channels= {
  welcome: '495190443928059904'
}


client.on('message',message =>{
  let msg = message.content.toUpperCase();
	let sender=message.author;
	let args = message.content.slice(prefix.length).trim().split(' ');
  let cmd = args.shift().toLowerCase();
	if (message.channel.type==="dm") return;
  if (!msg.startsWith(prefix)) return;
	if (message.author.bot) return;
 try {
  delete require.cache[require.resolve(`./commands/${cmd}.js`)];
  let ops = {
    ownerID: ownerID,
    active: active
  }
  let commandFile = require(`./commands/${cmd}.js`);
  commandFile.run(client, message, args, ops);

  } catch (e) {
  console.log(e.stack);
  }  finally {
    console.log(`${message.author.tag} a utilisé la commande ${cmd}`);}
  if (msg === prefix+'ping'){
    message.channel.send('Pong!')
  }
})



client.on('messageReactionAdd', (reaction, user) => {
  if (client.channels.get(channels.welcome) === true) {
    
  if (client.message.content === "EPSI") {
    if(reaction.emoji.name === "✅") {
      var EPSI = client.guild.roles.find('name', 'EPSI')
      console.log(EPSI)
      user.addRole(EPSI)
      console.log("role EPSI donné")
        console.log(reaction.users);}
    
    }
  }
});


























client.login(process.env.TOKEN)


const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);