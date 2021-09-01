import en from './modules/en';
import zh from './modules/zh';
import ru from './modules/ru';
import { getCookie } from '../util.js';
import Vue from 'vue';
import deepmerge from 'deepmerge';
// import Format from './format';
const langDic = {
    zh: zh,
    en: en,
    ru: ru
};
// const format = Format(Vue);
let langKey = getCookie('EMAP_LANG') || 'zh';
let lang = langDic[langKey];
let merged = false;
let i18nHandler = function() {
    const vuei18n = Object.getPrototypeOf(this || Vue).$t;
    if (typeof vuei18n === 'function' && !!Vue.locale) {
        if (!merged) {
            merged = true;
            Vue.locale(
                Vue.config.lang,
                deepmerge(lang, Vue.locale(Vue.config.lang) || {}, { clone: true })
            );
        }
        return vuei18n.apply(this, arguments);
    }
};

export const t = function(path) {

    let value = i18nHandler.apply(this, arguments);
    // console.log(value);
    if (value !== null && value !== undefined) return value;

    const array = path.split('.');
    let current = lang;
    for (let i = 0, j = array.length; i < j; i++) {
        const property = array[i];
        value = current[property];
        // console.log('value', value);
        if (i === j - 1) return value;
        if (!value) return '';
        current = value;
    }
    return '';
};

export const use = function(l) {
    lang = l || lang;
};

export const i18n = function(fn) {
    i18nHandler = fn || i18nHandler;
};
export default { use, t, i18n, lang };
