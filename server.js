const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = '!'
const ownerID = '261486733059817475'
const ms = require('parse-ms');
const talkedRecently = new Set();
/* global Map*/
const active = new Map();
var lol = require('lol-js');
var lolClient= lol.client({
  apiKey:"RGAPI-30a720d7-8836-41e1-9bf6-aa5cddb03a96",
  
})


client.on('ready', () => {
  console.log('-------------------------------')
  console.log('        EPSI Bot Online        ')
  console.log('-------------------------------')
  client.user.setActivity('!help')
})

const channels= {
  welcome: '495190443928059904'
}
const roles = {
  piplette: '501312575812796418',
  theking: '495172188828073985'

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
  
  if (talkedRecently.has(msg.author.id)&& talkedRecently.has(roles.piplette)) {
            msg.channel.send("Wait 1 minute before getting typing this again. - " + msg.author);
    } else {

           // the user can type the command ... your command code goes here :)

        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(msg.author.id);
      talkedRecently.add(roles.piplette);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(msg.author.id);
        }, 60000);
    }
})



















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