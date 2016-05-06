var chance = new (require('chance'))();

function Feel() {
  this.names = ['feel'];
  this.feels = [
    'ashamed',
    'very ashamed',
    'proud',
    'very proud',
    'insane',
    'daft'
  ];
}

Feel.prototype.respond = function (context) {
  var person = (context.text.length ? context.text : context.nick);
  return `${context.nick} thinks ${person} should feel ${chance.pickone(this.feels)}.`;
};

module.exports = Feel;
