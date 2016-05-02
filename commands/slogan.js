var chance = new (require('chance'))();

function Slogan() {
  this.names = ['slogan', 's', 'sl'];
  this.slogans = require('../data/slogans.json');
}

Slogan.prototype.respond = function (ctx) {
  if(!ctx.text) {return;}

  // Special case for a friend. <3
  if(ctx.text.toLowerCase() == "cazif") {
    return "<cazif> likes men.".replace(/<cazif>/g, ctx.text);
  }

  return chance.pickone(this.slogans).replace(/<text>/g, ctx.text);
};

module.exports = Slogan;
