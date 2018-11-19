const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("513776332614664217")
setInterval(function() {
channel.send(`spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam `);
}, 25)
})
 
 
client.login('NTEzNzk0MzgyNDE2MTgzMjk4.DtNQXg.eszWWuQH6YRDS6Wux0A7eK4l5I0');
