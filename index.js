var prefix = "!";
var x = 0;

const Discord = require('discord.js');
const robot = new Discord.Client();
robot.login("NDY0ODA1Njc5NjE0NTI1NDQx.DiKMVw.e8AX_TtcuYFF7WzTyG_CNfxUJI8");

robot.on('guildMemberAdd', function(member) {

  member.guild.channels.find("name", "общение").sendMessage(member.toString() + ", привет. Сейчас твоя роль в игре не определена, свяжись с основателем канала, чтобы у тебя появилась роль)")

  member.addRole(member.guild.roles.find("name", "Новички сервера"));
}) 

robot.on('message', message =>{
  if (message.content == "!o"){
    message.channel.sendMessage("I am ready! <3 ");
  }
  
  var president = ["Талон","Катарина","Физз","Люкс","Ясуо","Зед","Ренгар","Брэнд","Акали","Триндамир","Гнар","Фиора","Ривен","Удир","Ирелия","Эш","Шако","Варвик","Шая","Гекарим","Вейгар","Шен","Эвелинн","Тристана","Пантеон","Сивир","Энни","Гарен","Зои","Насус","Нуну","Тимо","Мастер Йи","Твистет Фейт","Кейл","Поппи","Джакс"];
  if (message.content == "!presidentList"){
    message.channel.sendMessage("Список Стаса ( @president#3659 ):");
    message.channel.sendMessage(president);
  }
})

