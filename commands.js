const fs = require('fs');
const ascii = require('ascii-table');
let table = new ascii(`(%) Commands`);
table.setHeading('🔸Command','🔸Load Status');

module.exports = (client) => {
fs.readdirSync('./Commands').forEach((folder) => {
    const commandFiles = fs.readdirSync(`./Commands/${folder}`).filter(file => file.endsWith('.js'));
    for (file of commandFiles) {
        let command = require(`../Commands/${folder}/${file}`);
        if (command.name) {
            client.commands.set(command.name, command);
            table.addRow(`${file}`,'✔');
        } else {
            table.addRow(`${file}`, '✖');
            continue;
        }
    }
});
console.log((table.toString()).green);
  
}
