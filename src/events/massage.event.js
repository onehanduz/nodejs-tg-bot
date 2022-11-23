const { types } = require("../tools/types");
const { mainKey } = require("../tools/options");

function msgEvents(bot) {
  bot.on("message", (msg) => {
    if (types(msg).text == "/start") {
      bot.sendMessage(
        types(msg).chatId,
        "Assalomu alaykum. Botdan foydalanish bo'yicha yo'riqnoma(kanal manzili)",
        mainKey
      );
    }
  });
}

module.exports = {
  msgEvents,
};
