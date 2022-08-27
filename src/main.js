const { msgEvents } = require("./events/massage.event");
const { edtMsgEvents } = require("./events/edit_massage.event");

function run(bot) {
  msgEvents(bot);
  edtMsgEvents(bot);
}

module.exports = {
  run,
};
