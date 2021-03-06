'use strict';
const LogicEngine = require('akp48-plugin-basic-commands').LogicEngine;

class RandomizationCommands extends global.AKP48.pluginTypes.MessageHandler {
  constructor(AKP48) {
    super(AKP48, 'RandomizationCommands');
    this._data = {};
    this.logicEngine = null;
  }

  load() {
    this._data = require('./plugin.json');
    var self = this;
    require('./commands').then(function(res){
      self.logicEngine = new LogicEngine(res, self._data, self.name);
    }, function(err){
      console.error(err);
    });
  }

  handleCommand(context) {
    global.logger.silly(`${this.name}: Received command.`);

    this.logicEngine(context);
  }
}

module.exports = RandomizationCommands;
