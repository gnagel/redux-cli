'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _projectSettings = require('./project-settings');

var _projectSettings2 = _interopRequireDefault(_projectSettings);

var _ui = require('./ui');

var _ui2 = _interopRequireDefault(_ui);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SubCommand = function () {
  function SubCommand() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, SubCommand);

    this.rawOptions = options;
    this.settings = options.settings || new _projectSettings2.default();
    this.ui = options.ui || new _ui2.default();

    this.environment = {
      ui: this.ui,
      settings: this.settings
    };
  }

  _createClass(SubCommand, [{
    key: 'run',
    value: function run() {
      throw new Error('Subcommands must implement a run()');
    }
  }, {
    key: 'availableOptions',
    value: function availableOptions() {
      throw new Error('Subcommands must implement an availableOptions()');
    }
  }]);

  return SubCommand;
}();

exports.default = SubCommand;