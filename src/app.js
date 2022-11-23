const { msgEvents } = require("./events/massage.event");

function run(bot) {
  msgEvents(bot);
  edtMsgEvents(bot);
}

module.exports = {
  run,
};
