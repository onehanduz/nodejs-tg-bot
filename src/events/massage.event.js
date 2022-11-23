const { types } = require("../tools/types");
const { mainKey, foodKey, infoKey } = require("../tools/keyboard");
const fs = require("fs");
const path = require("path");
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
