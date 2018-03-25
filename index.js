const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
const button_cooldown_time = 30;
const button_talked_users = new Set();

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
	if (message.content === '>help') {
		return message.channel.send(`<@${message.author.id}> here are my commands:\n:small_red_triangle: **>ping** - Pings me and I will respond if online.\n\n:briefcase: **>bet** - Allows betting of money.\n:candy: **>slot-prizes** - Displays what each emoji on the slots stand for.\n:dollar: **>slots** - Rolls the classic slots bar.\n:poultry_leg: **>slots-food** - Rolls food slots bar.`)
	}
  if (message.content === '>ping') {
    message.channel.send(`<@${message.author.id}> shikapong! I'm Online!`)
  }
	if (message.content === '>bet') {
		message.channel.send(`\`ERR: Please say how much you bet.\`\n\n**Example:** \`>bet 10$\``)
	}
	if (message.content.startsWith('>bet ')) {
		if (message.author.id !== '346687165868015616') {
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No. Why would I do this for you? I have a **Admin only** policy.");
		}
		if (button_talked_users.has(message.author.id)) return message.reply("You have to wait before using this command again.\n*[30 second cooldown]*");
		let random = Math.random() * 999 + 1;
    var number = Math.round(random)
		message.channel.send(`<@${message.author.id}> has rolled **${number}**!`)
		
		button_talked_users.add(message.author.id);
    setTimeout(() => {
      button_talked_users.delete(message.author.id);
    }, button_cooldown_time * 1000);
		
		if (number === 1000) {
			return message.channel.send(`🎉 YOU HAVE WON **__9x__** YOUR BET 🎉`)
		}
		if (number >= 989) {
			return message.channel.send(`🎉 YOU HAVE WON **__4x__** YOUR BET 🎉`)
		}
		if (number >= 985) {
			return message.channel.send(`🎉 YOU HAVE WON **__3x__** YOUR BET 🎉`)
		}
		if (number >= 905) {
			return message.channel.send(`🎉 YOU HAVE WON **__2x__** YOUR BET 🎉`)
		}
		if (number <= 904) {
			return message.channel.send(`☹ YOU HAVE LOST YOUR BET ☹`)
		}
	}
	if (message.content === '>slot-prizes') {
		return message.channel.send("**💩 -** \n\tThis works as a wasted spot. Nothing can be won from getting these.\n\n**🍋, 🍎, 🍍, 🍏, 🍌, 🍅, 🍇, and 🥝 -** \n\tThree in a Row: 2x the bet.\n\t2 Three in a Rows: 3x the bet.\n\t9 Matches/Whipeout: 4.5x the bet.\n\n**💎 -** \n\tThree in a Row: 4x the bet.\n\t2 Three in a Rows: 6x the bet.\n\t9 Matches/Whipeout: 9x the bet.")
	}
	if (message.content === '>slots') {
		if (message.author.id !== '346687165868015616') {
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No. Why would I do this for you? I have a **Admin only** policy.");
		}
		let slots = ["🍋", "🍎", "🍍", "🍏", "🍌", "🍅", "🍇", "🍋", "🍎", "🍍", "🍏", "🍌", "🍅", "🍇", "🥝", "💎", "🥝", "💩", "💩", "💩"]
		let pong = Math.floor((Math.random() * slots.length));
		let ptwo = Math.floor((Math.random() * slots.length));
		let pthree = Math.floor((Math.random() * slots.length));
		let pfour = Math.floor((Math.random() * slots.length));
		let pfive = Math.floor((Math.random() * slots.length));
		let psix = Math.floor((Math.random() * slots.length));
		let pseven = Math.floor((Math.random() * slots.length));
		let peight = Math.floor((Math.random() * slots.length));
		let pnine = Math.floor((Math.random() * slots.length));
		return message.channel.send(`**[- SLOTS -]**\n${slots[pong]}${slots[ptwo]}${slots[pthree]}\n${slots[pfour]}${slots[pfive]}${slots[psix]}\n${slots[pseven]}${slots[peight]}${slots[pnine]}\n**[- SLOTS -]**`)
	}
	if (message.content === '>slots-food') {
		if (message.author.id !== '346687165868015616') {
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No. Why would I do this for you? I have a **Admin only** policy.");
		}
		let slots = ["🍕", "🍔", "🌯", "🍟", "🍤", "🍖", "🍗", "🍚", "🍕", "🍔", "🌯", "🍟", "🍤", "🍖", "🍗", "🍚", "🥗", "🥗", "🥗", "💵"]
		let pong = Math.floor((Math.random() * slots.length));
		let ptwo = Math.floor((Math.random() * slots.length));
		let pthree = Math.floor((Math.random() * slots.length));
		let pfour = Math.floor((Math.random() * slots.length));
		let pfive = Math.floor((Math.random() * slots.length));
		let psix = Math.floor((Math.random() * slots.length));
		let pseven = Math.floor((Math.random() * slots.length));
		let peight = Math.floor((Math.random() * slots.length));
		let pnine = Math.floor((Math.random() * slots.length));
		return message.channel.send(`**[- SLOTS -]**\n${slots[pong]}${slots[ptwo]}${slots[pthree]}\n${slots[pfour]}${slots[pfive]}${slots[psix]}\n${slots[pseven]}${slots[peight]}${slots[pnine]}\n**[- SLOTS -]**`)
	}
});


bot.login(process.env.BOT_TOKEN);
