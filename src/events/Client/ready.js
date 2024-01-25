const { prefix } = require("../../config.js");

module.exports ={
name: "ready",
run: async (client) => {
    client.manager.init(client.user.id);
    client.logger.log(`${client.user.username} online!`, "ready");
    client.logger.log(`Ready on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users`, "ready");

    //Game
    let statuses = ['@TEC'];
    setInterval(function() {
  	let status = statuses[Math.floor(Math.random()*statuses.length)];		
        client.user.setPresence({
            activities: [
                {
                    name: status,
                    type: "STREAMING",
                    url: "https://www.youtube.com/watch?v=R4VVOjjYmm8"
                }
            ],
            status: "online"
        });
    }, 3000)
 }
};
