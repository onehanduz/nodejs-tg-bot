const { msgEvents } = require("./events/massage.event");
const { edtMsgEvents } = require("./events/edit_massage.event");
const { callbackEvents } = require("./events/callback.event");

function run(bot) {
  msgEvents(bot);
  edtMsgEvents(bot);
}

module.exports = {
  run,
};
