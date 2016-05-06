var chance = new (require('chance'))();

function Attack() {
  this.names = ['attack', 'atk'];
  this.attacks = [
    'Critical Fail',
    'Dire Fail',
    'Horrible Fail',
    'Bad Fail',
    'Fail',
    'Dismal Miss',
    'Horrible Miss',
    'Bad Miss',
    'Miss',
    'Almost Glance',
    'Narrowly Glance',
    'Probably Glance',
    'Clearly Glance',
    'Glance',
    'Hit',
    'Arm Hit',
    'Leg Hit',
    'Stomach Hit',
    'Chest Hit',
    'Head Hit'
  ];
}

Attack.prototype.respond = function (context) {
  context.noPrefix = true;
  
  var things = context.text.split(' ');

  if(!things.length) { return; }

  var out = `$(context.nick) attacks ${things.join(', ')}:`;

  for (let t of things) {
    out += ` ${t} => ${chance.pickone(this.attacks)},`;
  }

  out = out.slice(0, -1) + '.';

  return out;
};

module.exports = Attack;
