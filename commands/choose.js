var chance = new (require('chance'))();

function Choose() {
  this.names = ['choose', 'pick'];
}

Choose.prototype.respond = function (context) {
  var things = context.text.split(' ');

  if(!things.length) { return; }

  if(!things.length === 1) { return 'The choice is yours!'; }

  return chance.pickone(things);
};

module.exports = Choose;
