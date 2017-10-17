export default {
  "required": {
    "func": function (value) {
      return value !== undefined && value !== null && $.trim(value.toString()) !== ''; 
    },
    "alertText": '* 不能为空'
  },
  "double": {
    "regex": /^(\-)?\d+(\.\d+)?$/,
    "alertText": '* 必须为数字'
  },
  "tele": {
    "regex": /^([\+][0-9]{1,3}[ \.\-])?([\(]{1}[0-9]{2,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,
    "alertText": '* 必须是正确的电话号码'
  },
  "tel": {
    "regex": /^([\+][0-9]{1,3}[ \.\-])?([\(]{1}[0-9]{2,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,
    "alertText": '* 必须是正确的电话号码'
  },
  "phone": {
    // credit:jquery.h5validate.js / orefalo
    "regex": /^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/,
    "alertText": '* 必须是正确的手机号'
  },
  "email": {
    // Shamelessly lifted from Scott Gonzalez via the Bassistance Validation plugin http://projects.scottsplayground.com/email_address_validation/
    "regex": /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,
    "alertText": '* 必须是正确的邮箱地址'
  },
  "mail": {
    // Shamelessly lifted from Scott Gonzalez via the Bassistance Validation plugin http://projects.scottsplayground.com/email_address_validation/
    "regex": /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,
    "alertText": '* 必须是正确的邮箱地址'
  },
  "integer": {
    "regex": /^[\-\+]?\d+$/,
    "alertText": '* 必须是整数'
  },
  "integer+0": {
    "regex": /^\d+$/,
    "alertText": '* 必须是非负整数'
  },
  "integer+": {
    "regex": /^[1-9](\d+)?$/,
    "alertText": '* 必须是大于零的整数'
  },
  "money": {
    "regex": /^\d+(\.\d{1,2})?$/,
    "alertText": '* 必须是正确的金额'
  },
      //qiyu 2016-9-1 XQGL-25
    "score": {
    "regex": /^\d+(\.\d{1,2})?$/,
    "alertText": '* 必须是正确的分数'
  },
  "number": {
    // Number, including positive, negative, and floating decimal. credit:orefalo
    "regex": /^[\-\+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/,
    "alertText": '* 必须是数字'
  },
  "date": {
    "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/,
    "alertText":'* 必须是正确的日期格式'
  },
  "ipv4": {
    "regex": /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
    "alertText": '* 必须是正确的ip格式'
  },
  "url": {
    "regex": /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
    "alertText": '* 必须是正确的url地址'
  },
  "onlyNumberSp": {
    "regex": /^[0-9\ ]+$/,
    "alertText": '* 必须是数字'
  },
  "onlyLetterSp": {
    "regex": /^[a-zA-Z\ \']+$/,
    "alertText": '* 必须是英文字母'
  },
  "onlyLetterNumber": {
    "regex": /^[0-9a-zA-Z]+$/,
    "alertText": '* 必须是数字或英文字母'
  },
  //tls warning:homegrown not fielded
  "dateFormat": {
    "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/,
    "alertText": '* 必须是有效的日期格式'
  },
  
  //tls warning:homegrown not fielded
  // "dateTimeFormat": {
  //   "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/,
  //   "alertText": $.i18n('bh-rv-idotf'),
  //   "alertText2": $.i18n('bh-rv-af'),
  //   "alertText3": "mm/dd/yyyy hh:mm:ss AM|PM" + $.i18n('bh-rv-or'),
  //   "alertText4": "yyyy-mm-dd hh:mm:ss AM|PM"
  // },

  /**
   * 正则验证规则补充
   * Author: ciaoca@gmail.com
   * Date: 2013-10-12
   */
  "chinese": {
    "regex": /^[\u4E00-\u9FA5]+$/,
    "alertText": '* 必须是中文汉字'
  },
  "chinaId": {
    /**
     * 2013年1月1日起第一代身份证已停用，此处仅验证 18 位的身份证号码
     * 如需兼容 15 位的身份证号码，请使用宽松的 chinaIdLoose 规则
     * /^[1-9]\d{5}[1-9]\d{3}(
     *    (
     *        (0[13578]|1[02])
     *        (0[1-9]|[12]\d|3[01])
     *    )|(
     *        (0[469]|11)
     *        (0[1-9]|[12]\d|30)
     *    )|(
     *        02
     *        (0[1-9]|[12]\d)
     *    )
     * )(\d{4}|\d{3}[xX])$/i
     */
    "regex": /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/,
    "alertText": '* 必须是有效的身份证号码'
  },
  "chinaIdLoose": {
    "regex": /^(\d{18}|\d{15}|\d{17}[xX])$/,
    "alertText": '* 必须是有效的身份证号码'
  },
  "chinaZip": {
    "regex": /^\d{6}$/,
    "alertText": '* 必须是有效的邮政编码'
  },
  "qq": {
    "regex": /^[1-9]\d{4,10}$/,
    "alertText": '* 必须是有效的qq号'
  }
  // "maxLength": {
  //   func: function (val, field) {
  //     var max = rules[i + 2];
  //     var val = field.val();
  //     var len = 0;
  //     for (var index = 0; index < val.length; index++) {
  //       if (val[index].match(/[^\x00-\xff]/ig) != null) {
  //         len += 3;
  //       } else {
  //         len++;
  //       }
  //     }
  //     // options.allrules.maxLength.alertText = $.i18n('bh-rv-citl') + (len - max) + $.i18n('bh-rv-character');
  //     return max >= len;
  //   },
  //   "alertText":"* 内容过长"
  // },
  // "before": {
  //   func: function (val, field, ele) {
  //     if (val === '' || val === undefined) return true;
  //     var valStp = WIS_EMAP_SERV.toDateStp(val);
  //     var nStp;
  //     if (field == 'now') {
  //       // 小于当前时间
  //       nStp = parseInt(new Date().getTime()/1000);
  //     } else {
  //       // 小于给定字段时间
  //       (!ele) && (ele = $(document));
  //       var tarEle = $('[data-name=' + field + ']', ele);
  //       if (!tarEle || tarEle.length === 0) return true; // 对于联动字段缺失场景的兼容性护理
  //       var tarVal = WIS_EMAP_INPUT.getValue(tarEle, {});
  //       if (!tarVal) return true;
  //       nStp = WIS_EMAP_SERV.toDateStp(tarVal);
  //     }
  //     return valStp < nStp
  //   },
  //   alertText: $.i18n('bh-rv-noLaterThan')
  // },
  // "before=": {
  //   func: function (val, field, ele) {
  //     if (val === '' || val === undefined) return true;
  //     var valStp = WIS_EMAP_SERV.toDateStp(val);
  //     var nStp;
  //     if (field == 'now') {
  //       // 小于当前时间
  //       nStp = parseInt(new Date().getTime()/1000);
  //     } else {
  //       // 小于给定字段时间
  //       (!ele) && (ele = $(document));
  //       var tarEle = $('[data-name=' + field + ']', ele);
  //       if (!tarEle || tarEle.length === 0) return true; // 对于联动字段缺失场景的兼容性护理
  //       var tarVal = WIS_EMAP_INPUT.getValue(tarEle, {});
  //       if (!tarVal) return true;
  //       nStp = WIS_EMAP_SERV.toDateStp(tarVal);
  //     }
  //     return valStp <= nStp
  //   },
  //   alertText: $.i18n('bh-rv-noLaterThan')
  // },
  // "after": {
  //   func: function (val, field, ele) {
  //     if (val === '' || val === undefined) return true;
  //     var valStp = WIS_EMAP_SERV.toDateStp(val);
  //     var nStp;
  //     if (field == 'now') {
  //       // 大于当前时间
  //       nStp = parseInt(new Date().getTime()/1000);
  //     } else {
  //       // 大于给定字段时间
  //       (!ele) && (ele = $(document));
  //       var tarEle = $('[data-name=' + field + ']', ele);
  //       if (!tarEle || tarEle.length === 0) return true; // 对于联动字段缺失场景的兼容性护理
  //       var tarVal = WIS_EMAP_INPUT.getValue(tarEle, {});
  //       if (!tarVal) return true;
  //       nStp = WIS_EMAP_SERV.toDateStp(tarVal);
  //     }
  //     return valStp > nStp
  //   },
  //   alertText: $.i18n('bh-rv-noEarlierThan')
  // },
  // "after=": {
  //   func: function (val, field, ele) {
  //     if (val === '' || val === undefined) return true;
  //     var valStp = WIS_EMAP_SERV.toDateStp(val);
  //     var nStp;
  //     if (field == 'now') {
  //       // 大于当前时间
  //       nStp = parseInt(new Date().getTime()/1000); 
  //     } else {
  //       // 大于给定字段时间 
  //       (!ele) && (ele = $(document));
  //       var tarEle = $('[data-name=' + field + ']', ele);
  //       if (!tarEle || tarEle.length === 0) return true; // 对于联动字段缺失场景的兼容性护理
  //       var tarVal = WIS_EMAP_INPUT.getValue(tarEle, {});
  //       if (!tarVal) return true;
  //       nStp = WIS_EMAP_SERV.toDateStp(tarVal);
  //     }
  //     return valStp >= nStp
  //   },
  //   alertText: $.i18n('bh-rv-noEarlierThan')
  // }
}