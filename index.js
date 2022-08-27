require("dotenv").config();
const token = process.env.TOKEN;
const TelegramBot = require("node-telegram-bot-api");
const main = require("./src/main");
const bot = new TelegramBot(token, { polling: true });

main.run(bot);
