const fs = require('fs');

module.exports = (client) => {
const eventFiles = fs.readdirSync('./Events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
    const event = require(`../Events/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(client, ...args));
    } else {
        client.on(event.name, (...args) => event.execute(client, ...args));
    }
}
}
