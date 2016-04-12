'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _new = require('../sub-commands/new');

var _new2 = _interopRequireDefault(_new);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var subCommand = new _new2.default();

_commander2.default.on('--help', function () {
  subCommand.printUserHelp();
});

_commander2.default.arguments('<project name>').option('-S, --use-ssh', 'Fetch starter kit over ssh').action(function (dirName, command) {
  console.log('COMMAND: ', command.useSsh);
  subCommand.run({
    dirName: dirName,
    useSsh: command.useSsh
  });
}).parse(process.argv);