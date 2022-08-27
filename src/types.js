function types(msg) {
  return {
    chatId: msg.chat.id,
    text: msg.text,
    replyMsg: msg.reply_to_message,
  };
}

module.exports = {
  types,
};
