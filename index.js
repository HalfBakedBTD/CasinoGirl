const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
	bot.channels.filter(c => c.name === 'casinogirl-status').forEach(channel => channel.send(`${bot.user.username} has just restarted.`));
});

bot.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  member.send(`\`\`\`You just joined a server I am in! Hey my bro!\`\`\`\n\nJoin the pay for invites server! **[https://discord.gg/bhYNrmK]**`);
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  if (message.content === '>ping') {
    message.channel.send(`<@${message.author.id}> shikapong! I'm Online!`)
  }
	if (message.content === '>bet') {
		message.channel.send(`\`ERR: Please say how much you bet.\`\n\n**Example:** \`>bet 10$\``)
	}
	if (message.content.startsWith('>bet ')) {
		let random = Math.random() * 999 + 1;
    var number = Math.round(random)
		message.channel.send(`<@${message.author.id}> has rolled **${number}**!`)
		
		if (number === 1000) {
			return message.channel.send(`🎉 YOU HAVE WON **__9x__** YOUR BET 🎉`)
		}
		if (number >== 989) {
			return message.channel.send(`🎉 YOU HAVE WON **__4x__** YOUR BET 🎉`)
		}
		if (number >== 985) {
			return message.channel.send(`🎉 YOU HAVE WON **__3x__** YOUR BET 🎉`)
		}
		if (number >== 905) {
			return message.channel.send(`🎉 YOU HAVE WON **__2x__** YOUR BET 🎉`)
		}
		if (number <== 904) {
			return message.channel.send(`☹ YOU HAVE LOST YOUR BET ☹`)
		}
	}
});


bot.login(process.env.BOT_TOKEN);
