var chance = new (require('chance'))();

function Slogan() {
  this.names = ['slogan', 's', 'sl'];
  this.slogans = require('../data/slogans.json');
}

Slogan.prototype.respond = function (ctx) {
  if(!ctx.rawArgs()) {return;}

  var t = ctx.rawArgs().join(' ');

  // Special case for a friend. <3
  if(t.toLowerCase() === 'cazif') {
    return '<cazif> likes men.'.replace(/<cazif>/g, t);
  }

  return chance.pickone(this.slogans).replace(/<text>/g, t);
};

module.exports = Slogan;
