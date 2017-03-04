const Discord = require('discord.js');
const bot = new Discord.Client();


bot.on('ready',() => {
	console.log('I have been enabled please go into the discord server to use my commands and have a fun time!');
});

var prefix = 'tm!'
bot.on('message', (message) => {
    /*-------------------------------------------------------------------------------------------------------------------*/
    /*|                                                        SPACER                                                   |*/
    /*-------------------------------------------------------------------------------------------------------------------*/
    if(message.content.startsWith(prefix + 'roll') || message.content.startsWith(prefix + 'dice')){
        var roll = Math.floor(Math.random() * 6) + 1;
        const dice = new Discord.RichEmbed().setAuthor('RESULTS', '').setColor('#00FFFF').setDescription(':game_die: 6 sided || ' + message.author.username.toString() + ' you have rolled a ' + roll + '!')
        message.channel.sendEmbed(dice, '', { disableEveryone: true });
    }
    
    else if(message.content.startsWith(prefix + '8ball')){
        var ball = Math.floor(Math.random() * 12) + 1;
        if(ball == 11 || ball == 12){
            const embedYes = new Discord.RichEmbed().setAuthor('RESULTS', '').setColor('#00FF00').setDescription(':8ball: Without question! (yes) :white_check_mark:')
            message.channel.sendEmbed(embedYes, '', { disableEveryone: true });
        }else if(ball == 9 || ball == 10){
            const embedYes = new Discord.RichEmbed().setAuthor('RESULTS', '').setColor('#00FF00').setDescription(':8ball: Isnt it obvious? (yes) :white_check_mark:')
            message.channel.sendEmbed(embedYes, '', { disableEveryone: true });
        }else if(ball == 7 || ball == 8){
            const embedMaybe = new Discord.RichEmbed().setAuthor('RESULTS', '').setColor('#FFD700').setDescription(':8ball: I\'m not entirely sure! (maybe) :thinking:')
            message.channel.sendEmbed(embedMaybe, '', { disableEveryone: true });
        }else if(ball == 5 || ball == 6){
            const embedMaybe = new Discord.RichEmbed().setAuthor('RESULTS', '').setColor('#FFD700').setDescription(':8ball: Possibly! (maybe) :thinking:')
            message.channel.sendEmbed(embedMaybe, '', { disableEveryone: true });
        }else if(ball == 3 || ball == 4){
            const embedNo = new Discord.RichEmbed().setAuthor('RESULTS', '').setColor('#FF0000').setDescription(':8ball: Definitely not! (no) :x:')
            message.channel.sendEmbed(embedNo, '', { disableEveryone: true });
        }else if(ball == 1 || ball == 2){
            const embedNo = new Discord.RichEmbed().setAuthor('RESULTS', '').setColor('#FF0000').setDescription(':8ball: LOL No! (no) :x:')
            message.channel.sendEmbed(embedNo, '', { disableEveryone: true });
        }
    }
    
    else if(message.content.startsWith(prefix + 'ping')){
        const pong = new Discord.RichEmbed().setAuthor('RESULTS', '').setColor('#00FFFF').setDescription(':ping_pong: || Pong! || :ping_pong:')
        message.channel.sendEmbed(pong, '', { disableEveryone: true });
    }
    
    else if (message.content.startsWith(prefix + "purge")) {
    let messagecount = parseInt(100);
    message.channel.fetchMessages({limit: messagecount})
        .then(messages => message.channel.bulkDelete(messages));
}

    else if(message.content.startsWith(prefix + 'avatar')){
        message.channel.sendMessage(message.author.avatarURL);
    }

    else if(message.content.startsWith(prefix + 'bedtime') || message.content.startsWith(prefix + 'bed')){
        const bed = new Discord.RichEmbed().setAuthor('RESULTS', '').setColor('#00FFFF').setDescription(':waning_gibbous_moon: || ' + message.author.username.toString() + ' || :waxing_gibbous_moon:' + '\n is going to bed goodnight!')
        message.channel.sendEmbed(bed, '', { disableEveryone: true });
    }

    else if(message.content.startsWith(prefix + 'help')){
        const bed = new Discord.RichEmbed().setAuthor('CURRENT HELP FOR THE MATERIALS', '').setColor('#00FFFF')
        .setDescription('\n tm!help - (Brings up this help message in your DM\'s) \n' + 
        '\n tm!roll & tm!dice - (Rolls a 6 sided dice to get a random number between 1 and 6) \n' +
        '\n tm!8ball [question] - (Creates a yes no or maybe question response for your questions) \n' +
        '\n tm!ping - (Sends a ping message to the bot and in reply sends pong to see the response time) \n' +
        '\n tm!purge - (Gets rid of the last 100 messages possible in that chat channel) \n' +
        '\n tm!avatar - (Puts a link to your avatar in the chat so you can download it) \n' +
        '\n tm!bed & tm!bedtime - (Announces to the server that you are going to bed)')
        message.author.sendEmbed(bed, '', { disableEveryone: true });
    }
    /*-------------------------------------------------------------------------------------------------------------------*/
    /*|                                                        SPACER                                                   |*/
    /*-------------------------------------------------------------------------------------------------------------------*/
});

bot.login('MjgxOTcxOTc5NTI1OTQ3Mzkz.C5apNg.l_yDuUciGPwb9jNrDduaxz7OHng');