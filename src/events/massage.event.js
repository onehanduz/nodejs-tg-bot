const { types } = require("../types");

function msgEvents(bot) {
  bot.on("message", (msg) => {
    if (types(msg).replyMsg) {
      bot.sendMessage(types(msg).chatId, types(msg).text);
    }
  });
}

module.exports = {
  msgEvents,
};
