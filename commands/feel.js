var chance = new (require('chance'))();

function Feel() {
  this.names = ['feel'];
}

Feel.prototype.respond = function (context) {
  var person = (context.text.length ? context.text : context.nick);
  return `$(context.nick) thinks ${person} should feel ${chance.pickone(this.feels)}.`;
};

module.exports = Feel;
