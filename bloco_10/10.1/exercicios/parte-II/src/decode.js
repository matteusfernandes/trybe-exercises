function decode(message) {
  for (let index = 0; index < message.length; index += 1) {
    message = message.replace('1', 'a');
    message = message.replace('2', 'e');
    message = message.replace('3', 'i');
    message = message.replace('4', 'o');
    message = message.replace('5', 'u');
  }
  return message;
}

module.exports = { decode }