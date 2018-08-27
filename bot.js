const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`ayyyyyy`,"http://twitch.tv/Respawn")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});



client.on("message", async message => {
      if(message.author.bot) return;
      if(message.channel.type === "dm") return;

      let prefix = "B";
      let messageArray = message.content.split (" ");
      let cmd = messageArray[0];
      let args = messageArray.slice(1);



        if(cmd === `${prefix}ban`){



          let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
          if(!kUser) return message.channel.send("فين العضو ؟");
          let kReason = args.join(" ").slice(22);
          if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("بالله؟");
          if(kUser.hasPermission("MANAGE_CHANNELS")) return message.channel.send("اقول سق امها بس")

          let banEmbed = new Discord.RichEmbed()
          .setDescription("~Ban~")
          .setColor("#8e0505")
          .addField("Banned User", `${bUser} with ID ${bUser.id}`)
          .addField("Banned By", `<@${message.author.id}> with the id ${message.author.id}`)
          .addField("Banned In", message.channel)
          .addField("Time", message.createdAt)
          .addField("Reason", kReason);

          let banChannel = message.guild.channels.find('name', 'kick-ban');
          if(!banChannel) return message.channel.send("لم اجد روم kick-ban");

          message.guild.member(bUser).kick(bReason)
          banChannel.send(banEmbed);
        }
        });


        client.on ("guildMemberAdd", member => {

           var role = member.guild.roles.find ("name", "🔄");
           member.addRole (role);

        })

        client.on ("guildMemberRemove", member => {

        })


        const fetch = require('snekfetch');
         client.on('message', message => {
        if (message.content.startsWith('*ask')) {
              let args = message.content.split(' ').slice(1).join(' ');
            const hexcols = [0xFFB6C1, 0x4C84C0, 0xAD1A2C, 0x20B046, 0xF2E807, 0xF207D1, 0xEE8419];
            if (!args) {
                return message.reply('add a urban search, u pleb!');
            }
            fetch.get('http://api.urbandictionary.com/v0/define?term=' + args).then(res => {
                if (res.body.list[0] === undefined) {
                    return message.channel.send('**»Error**: Couldnt find the word');
                }
                const definition = res.body.list[0].definition;
                const word = res.body.list[0].word;
                const Author = res.body.list[0].author;
                const exam = res.body.list[0].example;
                const thumup = res.body.list[0].thumbs_up;
                const thumdown = res.body.list[0].thumbs_down;
                const embed = new Discord.RichEmbed()
            .setColor(hexcols[~~(Math.random() * hexcols.length)])
            .setTitle(`This is the info for the word: **${word}**`)
            .addField('definition:', `${definition}`)
            .addField('Author:', `${Author}`)
            .addField('Example:', `${exam}`)
            .addField('Rating', `👍 ${thumup} 👎 ${thumdown}`, true)
            .setThumbnail('https://pbs.twimg.com/profile_images/3518201800/3ddffc081e6999872a2e5e05fa59cd3a_400x400.jpeg');
                message.channel.send({embed}).catch(e => console.log(e));
            }).catch(err => {
                if (err) {
                    console.log(err);
                }

            });
        };
          });

          client.on('message', message => {
               if(message.content.startsWith("clear")) {
                   var args = message.content.split(" ").slice(1);
           if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('شتبغى ي بابا؟');
            if (!args[0]) return message.channel.send('بالله حدد رقم الرسايل الي تبغى تمسحها');

            message.channel.bulkDelete(args[0]).then(() => {
              const embed = new Discord.RichEmbed()
                .setColor(0xF16104)
                .setDescription(`Cleared ${args[0]} messages.`);
              message.channel.send({ embed });

              const actionlog = message.guild.channels.find('name', 'logs');

              if (!actionlog) return message.channel.send('Can\'t find action-log channel. Are you sure that this channel exists and I have permission to view it? **CANNOT POST LOG.**');
              const embedlog = new Discord.RichEmbed()
                .setDescription('~Purge~')
                .setColor(0xF16104)
                .addField('Purged By', `<@${message.author.id}> with ID ${message.author.id}`)
                .addField('Purged in', message.channel)
                .addField('Time', message.createdAt);
              actionlog.send(embedlog);

            });
          };

          });

          client.on('message',async message => {
  if(message.content.startsWith("setvoice")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
  message.channel.send('✅| **تم عمل الروم بنجاح**');
  message.guild.createChannel(`Minions Alive : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
    console.log(`Voice online channel setup for guild: \n ${message.guild.name}`);
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`Minions Alive : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]`)
    },1000);
  });
  }
});

const devs = ['213075590108938241' , '213046099139756033' , '164008916106084352' , ''];
client.on('message', message => {
var prefix = "B";
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;

if (message.content.startsWith(prefix + 'NC')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : سم يا عمري ?`)
  return message.reply("**بس ي عمري؟ ?**");
} else
if (message.content.startsWith(prefix + 'PC')) {
  client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : تيب ?`);

}
});

client.on('ready', function(){
  require("./antispam.js")(client, function(message){
     message.delete().then(yumz => {
     message.channel.send(`بس ي بابا  <@${message.author.id}>`).then(spammer => {
     spammer.delete(2000)
   });
   });
  });
});


client.on("guildMemberAdd", function(member) {
    const wc = member.guild.channels.find("name", "member-log")
        const embed = new Discord.RichEmbed()
        .setColor('#f442a7')
        .setAuthor(member.user.tag, member.user.avatarURL)
 .setDescription('*** a minion has spawned ***')
.setThumbnail(member.avatarURL)
  .setImage('https://i.imgur.com/BRyCeep.gif')
        .setTimestamp()
        return wc.sendEmbed(embed);
        
});

client.login(process.env.BOT_TOKEN);
