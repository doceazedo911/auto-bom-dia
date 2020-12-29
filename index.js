const Discord = require('discord.js');
const cron = require('cron').CronJob;
const fs = require('fs');
const client = new Discord.Client();

const token = fs.readFileSync('./token.txt').toString();

function sendGreetings() {
  console.log('Enviando mensagem de bom dia...');
  client.channels.get('691015330096611352').send('bom dia')
  .catch(err => {
    console.log('Ocorreu um erro ao enviar a mensagem:');
    console.log(err);
    return;
  });
  console.log('Mensagem enviada com sucesso!');
}

client.on('ready', () => {
  console.log(`Logado na conta de ${client.user.username}`);
  sendGreetings();
});

var job = new cron('1 */3 * * *', () => {
  sendGreetings();
}, null, true);
job.start();

client.login(token);