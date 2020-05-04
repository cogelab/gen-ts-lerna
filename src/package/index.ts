import * as path from "path";
import * as mm from "micromatch";
import * as chalk from "chalk";
import {Template} from "coge-generator";
import {InstallOptions} from "coge-generator/lib/mixins/install";

const licenses = [
  {name: 'Apache 2.0', value: 'Apache-2.0'},
  {name: 'MIT', value: 'MIT'},
  {name: 'Mozilla Public License 2.0', value: 'MPL-2.0'},
  {name: 'BSD 2-Clause (FreeBSD) License', value: 'BSD-2-Clause-FreeBSD'},
  {name: 'BSD 3-Clause (NewBSD) License', value: 'BSD-3-Clause'},
  {name: 'Internet Systems Consortium (ISC) License', value: 'ISC'},
  {name: 'GNU AGPL 3.0', value: 'AGPL-3.0'},
  {name: 'GNU GPL 3.0', value: 'GPL-3.0'},
  {name: 'GNU LGPL 3.0', value: 'LGPL-3.0'},
  {name: 'Unlicense', value: 'unlicense'},
  {name: 'No License (Copyrighted)', value: 'UNLICENSED'}
];

const pkg = require('../../package');

class PackageTemplate extends Template {
  _pkg?: Record<string, any>;

  constructor(opts) {
    super(opts);
  }

  async init() {
    this._pkg = this.fs.readJsonSync('./package.json', {throws: false});
  }

  async questions() {
    return [{
      type: "input",
      name: "name",
      message: "Name of the package",
    }, {
      type: "input",
      name: "description",
      message: "Description of the package",
    }, {
      type: "list",
      name: "license",
      message: "Which license do you want to use?",
      choices: licenses,
      default: 'MIT'
    }];
  }

  async locals(locals) {
    locals.author = pkg.author || '';
    return locals;
  }

  async filter(files, locals) {
    const license = locals.license || 'MIT';
    //               | +ALL | -../licenses/..                   | +../licenses/<license>.txt.ejs         |
    return mm(files, ['**', `!**/licenses${path.sep}*.*`, `**/licenses${path.sep}${license}.*`], {});
  }

  async install(opts?: InstallOptions) {
    return this.installDependencies(opts);
  }
}

export = PackageTemplate;

