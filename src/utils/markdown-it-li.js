function makeRule(md) {
  function findMatchingOpenToken(tokens, closeIdx) {
    let level = tokens[closeIdx].level;
    let nesting = -1;

    for (let i = closeIdx - 1; i >= 0; i--) {
      if (tokens[i].level < level) {
        return null;
      }
      if (tokens[i].level === level) {
        nesting += tokens[i].nesting;
        if (nesting === 0 && tokens[i].type === 'list_item_open') {
          return tokens[i];
        }
      }
    }
    return null;
  }

  return function replaceListItem() {
    md.renderer.rules.list_item_open = function(tokens, idx, options, env, self) {
      let wrapperTag = 'section'; // 默认使用 <section>

      // 检查当前列表项内部是否包含子列表
      for (let i = idx + 1; i < tokens.length; i++) {
        const token = tokens[i];
        if (token.type === 'bullet_list_open' || token.type === 'ordered_list_open') {
          wrapperTag = 'div'; // 对于嵌套列表，切换为 <div>
          break;
        }
        if (token.type === 'list_item_close' && token.level === tokens[idx].level) {
          break;
        }
      }

      tokens[idx].attrSet('data-wrapper-tag', wrapperTag);

      return `<li><${wrapperTag}>`;
    };

    md.renderer.rules.list_item_close = function(tokens, idx, options, env, self) {
      const openToken = findMatchingOpenToken(tokens, idx);
      const wrapperTag = openToken ? openToken.attrGet('data-wrapper-tag') : 'section';
      
      return `</${wrapperTag}></li>`;
    };
  };
}

export default (md) => {
  md.core.ruler.push("replace-li", makeRule(md));
};
