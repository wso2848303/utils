/**
 * @func delHtmlTag 删除html标签
 * @param {String} html html字符串
 * @return {String} 去除标签后的结果
 */
export const delHtmlTag = (html) => {
  return html.replace(/<[^>]+>/g, '');
};
