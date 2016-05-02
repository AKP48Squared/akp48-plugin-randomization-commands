var chance = new (require('chance'))();

function LART() {
  this.names = ['lart'];
  this.larts = require('../data/lart.json');
}

LART.prototype.respond = function (ctx) {
  ctx.noPrefix = true;
  return chance.pickone(this.larts).replace(/\{user\}/g, ctx.text || ctx.nick);
};

module.exports = LART;
