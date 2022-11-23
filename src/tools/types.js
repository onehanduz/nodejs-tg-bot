function types(msg) {
  return {
    chatId: msg.chat.id,
    from: msg.from,
    fromId: msg.from.id,
    text: msg.text,
    replyMsg: msg.reply_to_message,
  };
}

module.exports = {
  types,
};
