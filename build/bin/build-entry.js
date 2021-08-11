var Components = require('../../components.json');
var fs = require('fs');
var render = require('json-templater/string');
var uppercamelcase = require('uppercamelcase');
var path = require('path');

var OUTPUT_PATH = path.join(__dirname, '../../src/index.js');
var IMPORT_TEMPLATE = 'import {{name}} from \'../packages/{{package}}\';';
var ISNTALL_COMPONENT_TEMPLATE = '  Vue.component({{name}}.name, {{name}});';
var MAIN_TEMPLATE = `{{include}}
import '../src/style/reset.css';
import merge from './utils/merge';

import VueI18n from 'vue-i18n';
import messages from './utils/lang/index.js';
import {getCookie} from './utils/util.js';

// 兼容部分低版本手机 Object.assign 为undefined;(vivo android 5.1.1) 使用组件：日历组件  报告人：王永建 2018/11/1
if (typeof Object.assign !== 'function') {
// Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, 'assign', {
    value: function assign(target) { // .length of function is 2
      if (target == null) { // TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) { // Skip over if undefined or null
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true
  });
}

const version = '{{version}}';
const install = function(Vue, config = {}) {
  if (install.installed) return;
{{install}}
  Vue.use(InfiniteScroll);
  Vue.use(Lazyload, merge({
    loading: require('./assets/loading-spin.svg'),
    attempt: 3
  }, config.lazyload));

  Vue.use(VueI18n);
  const i18n = new VueI18n({
    locale: getCookie('EMAP_LANG') || 'zh',
    silentFallbackWarn: true,
    formatFallbackMessages: true,
    messages: messages
});
const currentMsg = i18n.messages[i18n.locale].message;
const roleLan = {
  'required': '* ' + currentMsg.canNotBeEmpty,
  'double': '* ' + currentMsg.beNumber,
  'tele': '* ' + currentMsg.beRightPhoneNumber,
  'tel': '* ' + currentMsg.beRightPhoneNumber,
  'phone': '* ' + currentMsg.beRightTellNumber,
  'email': '* ' + currentMsg.beRightEmailNumber,
  'mail': '* ' + currentMsg.beRightEmailNumber,
  'integer': '* ' + currentMsg.beInt,
  'integer+0': '* ' + currentMsg.beNoneNegativeInt,
  'integer+': '* ' + currentMsg.beGreaterThanZeroInt,
  'money': '* ' + currentMsg.beRightAmount,
  'score': '* ' + currentMsg.beRightScore,
  'number': '* ' + currentMsg.beNumber,
  'date': '* ' + currentMsg.beRightDateFormat,
  'ipv4': '* ' + currentMsg.beRightIPAddress,
  'url': '* ' + currentMsg.beRightURLAddress,
  'onlyNumberSp': '* ' + currentMsg.beNumber,
  'onlyLetterSp': '* ' + currentMsg.beLetters,
  'onlyLetterNumber': '* ' + currentMsg.beNumberOrLetters,
  'dateFormat': '* ' + currentMsg.beValidDateFormat,
  'chinese': '* ' + currentMsg.beChineseChar,
  'chinaId': '* ' + currentMsg.beValidIDNumber,
  'chinaIdLoose': '* ' + currentMsg.beValidIDNumber,
  'chinaZip': '* ' + currentMsg.beValidZipCode,
  'qq': '* ' + currentMsg.beValidQQNumber
};
for (let rule in ValidateRules) {
  ValidateRules[rule].alertText = roleLan[rule];
}
  Vue.$messagebox = Vue.prototype.$messagebox = MessageBox;
  Vue.$toast = Vue.prototype.$toast = Toast;
  Vue.$indicator = Vue.prototype.$indicator = Indicator;
  Vue.prototype._i18n = i18n;
};
// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

window.MINT = {
  install,
  version,
  {{list}}
};

export {
  install,
  version,
  {{list}}
};
export default {
  install,
  version,
  {{list}}
};
`;

delete Components.font;

var ComponentNames = Object.keys(Components);

var includeComponentTemplate = [];
var installTemplate = [];
var listTemplate = [];

ComponentNames.forEach(name => {
  var componentName = uppercamelcase(name);

  includeComponentTemplate.push(render(IMPORT_TEMPLATE, {
    name: componentName,
    package: name
  }));

  if ([
      // directives
    'InfiniteScroll',
    'Lazyload',

      // services
    'MessageBox',
    'Toast',
    'Indicator',

    // 校验规则库
    'ValidateRules'
  ].indexOf(componentName) === -1) {
    installTemplate.push(render(ISNTALL_COMPONENT_TEMPLATE, {
      name: componentName,
      component: name
    }));
  }

  listTemplate.push(`  ${componentName}`);
});

var template = render(MAIN_TEMPLATE, {
  include: includeComponentTemplate.join('\n'),
  install: installTemplate.join('\n'),
  version: process.env.VERSION || require('../../package.json').version,
  list: listTemplate.join(',\n')
});

fs.writeFileSync(OUTPUT_PATH, template);
console.log('[build entry] DONE:', OUTPUT_PATH);
