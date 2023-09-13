function makeRule(md) {
  return function addUrlSpan() {
    md.renderer.rules.link_open = function(tokens, idx, options, env, self) {
      const hrefIndex = tokens[idx].attrIndex('href');
      const hrefValue = tokens[idx].attrs[hrefIndex][1];

      // 获取链接的描述文本
      const description = tokens[idx + 1].content;

      // 构建包含链接的字符串
      const linkContent = `<a href="${hrefValue}"><span>`;

      return linkContent;
    };

    md.renderer.rules.link_close = function replaceClose() {
      return '</span></a>';         
    };
  };
}

export default (md) => {
  md.core.ruler.push("add-url-span", makeRule(md));
};
