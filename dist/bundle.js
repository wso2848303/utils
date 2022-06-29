import _indexOfInstanceProperty from '@babel/runtime-corejs3/core-js/instance/index-of';

/**
 * @func delHtmlTag 删除html标签
 * @param {String} html html字符串
 * @return {String} 去除标签后的结果
 */
var delHtmlTag = function delHtmlTag(html) {
  return html.replace(/<[^>]+>/g, '');
};
/**
 * @func unescapeHTML 把转译字符串转为html
 * @param {String} str 字符串
 * @return {String} 处理完成后的字符串
 */


var unescapeHTML = function unescapeHTML(str) {
  str = '' + str;
  return str.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&apos;/g, "'");
};
/**
 * @func getRequest 获取url参数
 * @param {String} decode 是否解码
 * @return {Array}
 */


var getRequest = function getRequest(decode) {
  var ifDecode = true;

  if (decode === false) {
    ifDecode = false;
  }

  var url = location.search;
  var theRequest = {};

  if (url && url.length && _indexOfInstanceProperty(url).call(url, '?') > -1) {
    var str = url.substr(1);
    var strs = str.split('&');

    for (var i = 0; i < strs.length; i++) {
      if (ifDecode) {
        theRequest[strs[i].split('=')[0]] = decodeURI(strs[i].split('=')[1]);
      } else {
        theRequest[strs[i].split('=')[0]] = strs[i].split('=')[1];
      }
    }
  }

  return theRequest;
};
/**
 * @func wordArr 将内容按照文字或者单词分割成数组
 * @param {String} str 需要处理的字符串
 * @param {RegExp} reg 正则
 * @return {Array} 分割后的结果
 */


var wordArr = function wordArr(str) {
  var reg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : /[\u4e00-\u9fa5]|[A-Za-z-]+|\S/g;

  if (str) {
    return str.match(reg);
  } else {
    return [];
  }
};
/**
 * @func wordLength 计算单词数量
 * @param {String} str 文本
 * @param {RegExp} reg 正则
 * @return {Number} 单词数量
 */


var wordLength = function wordLength(str) {
  var _wordArr;

  var reg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : /[\u4e00-\u9fa5]|[A-Za-z-]+|\S/g;
  return (_wordArr = wordArr(str, reg)) === null || _wordArr === void 0 ? void 0 : _wordArr.length;
};

var String = {
  delHtmlTag: delHtmlTag,
  unescapeHTML: unescapeHTML,
  getRequest: getRequest,
  wordArr: wordArr,
  wordLength: wordLength
};

var index = {
  String: String
};

export { index as default };
