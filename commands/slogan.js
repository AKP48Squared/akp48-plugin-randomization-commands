var chance = new (require('chance'))();

function Slogan() {
  this.names = ['slogan', 's', 'sl'];
  this.slogans = require('../data/slogans.json');
}

Slogan.prototype.respond = function (ctx) {
  if(!context.text) {return;}

  // Special case for a friend. <3
  if(context.text.toLowerCase() == "cazif") {
    return "<cazif> likes men.".replace(/<cazif>/g, context.text);
  }

  return chance.pickOne(this.slogans).replace(/<text>/g, context.text);
};

module.exports = Slogan;
