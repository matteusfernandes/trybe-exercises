function encode(message) {
  for (let index = 0; index < message.length; index += 1) {
    message = message.replace('a', '1');
    message = message.replace('e', '2');
    message = message.replace('i', '3');
    message = message.replace('o', '4');
    message = message.replace('u', '5');
  }
  return message;
}

module.exports = { encode }