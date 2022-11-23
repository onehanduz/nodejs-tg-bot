require("dotenv").config();
const token = process.env.TOKEN;
const TelegramBot = require("node-telegram-bot-api");
const app = require("./app");
const bot = new TelegramBot(token, { polling: true });

app.run(bot);
bot.on("polling_error", (error) => console.log(error));
