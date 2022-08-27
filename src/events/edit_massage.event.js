const { types } = require("../types");

function edtMsgEvents(bot) {
  bot.on("edited_message", (msg) => {
    bot.sendMessage(types(msg).chatId, types(msg).text);
  });
}

module.exports = {
  edtMsgEvents,
};
