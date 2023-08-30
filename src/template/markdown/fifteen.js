export default `/*自定义样式，实时生效*/

/* 全局属性
 * 页边距 padding: 30px;
 * 全文字体 font-family: ptima-Regular;
 * 英文换行 word-break: break-all;
 */
#nice {
  margin-top: 0;
  padding: 0;
}
/* 段落，下方未标注标签参数均同此处
 * 上边距 margin-top: 5px;
 * 下边距 margin-bottom: 5px;
 * 行高 line-height: 26px;
 * 对齐 text-align: left;
 * 颜色 color: #3e3e3e;
 * 字体大小 font-size: 16px;
 * 首行缩进 text-indent: 2em;
 */
#nice p {
  font-size: 16px;
  line-height: 26px;
  word-spacing: 3px;
  letter-spacing: 1px;
  color: #424B5D;
}
#nice h1, #nice h2, #nice h3, #nice h4, #nice h5, #nice h6 {
  margin-top: 24px;
  margin-bottom: 12px;
  font-weight: bold;
}
/* 一级标题 */
#nice h1 {
  font-size: 22px;
  color: #e7642b;
}
/* 一级标题内容 */
#nice h1 .content {
}
/* 一级标题修饰 请参考有实例的主题 */
#nice h1:after {
}
/* 二级标题 */
#nice h2 {
  font-size: 20px;
  margin-top: 24px;
  margin-bottom: 12px;
}
/* 二级标题内容 */
#nice h2 .content {
  color: #e7642b;
  text-align: center;
  display: block;
  background-color: #e7642b;
  color: white;
  padding: 3px 11px;
  border-radius: 1px;
}
/* 二级标题修饰 请参考有实例的主题 */
#nice h2:after {
}
/* 三级标题 */
#nice h3 {
  font-size: 18px;
  color: #424B5D;
}
/* 三级标题内容 */
#nice h3 .content {
}
/* 三级标题修饰 请参考有实例的主题 */
#nice h3:after {
}
/* 四级标题 */
#nice h4 {
  font-size: 16px;
  color: #424B5D;
}
/* 五级标题 */
#nice h5 {
  font-size: 16px;
  color: #424B5D;
}
/* 有序、无序列表整体样式
 * list-style-type: square|circle|disc;
 */
#nice ul, #nice ol  {
  font-size: 15px;
  margin: 0;
  padding-left: 24px;
  color: #424B5D;
}
/* 列表内容，不要设置li
 */
#nice li section {
  margin: 4px 0;
  line-height: 24px;
  color: #424B5D;
}
/* 引用
* 左边缘颜色 border-left-color: black;
* 背景色 background: gray;
*/
#nice blockquote {
  margin: 0 8px;
  border: none;
  background: #ffffff;
  box-shadow: 0 1px 2px -2px rgba(0,0,0,.16), 0 3px 6px 0 rgba(0,0,0,.12), 0 5px 12px 4px rgba(0,0,0,.09);
}
/* 引用文字 */
#nice blockquote p {
  font-size: 14px;
  color: #424B5D;
  line-height: 24px;
}
/* 链接 
 * border-bottom: 1px solid #009688;
 */
#nice a {
  color: #eb6161;
  border-bottom: 1px solid #eb6161;
}
#nice a::before {
  content: '👉';
  margin-right: 6px;
}
/* 加粗 */
#nice strong {
  color: #424B5D;
}
/* 斜体 */
#nice em {
  color: #424B5D;
}
/* 加粗斜体 */
#nice em strong {
  color: #424B5D;
}
/* 删除线 */
#nice del { 
}
/* 分隔线
* 粗细、样式和颜色
* border-top: 1px solid #3e3e3e;
*/
#nice hr {
  border-top: 1px dashed #424B5D;
}
/* 图片
* 宽度 width: 80%;
* 居中 margin: 0 auto;
* 居左 margin: 0 0;
*/
#nice img {
  border-radius: 5px;
  margin: 12px auto;
}
/* 图片描述文字 */
#nice figcaption {
  font-size: 14px;
  margin: 12px auto;
  color: #999999;
}
/* 行内代码 */
#nice p code, #nice li code {
  padding-left: 0;
  padding-right: 0;
  background: transparent;
  border-radius: 0;
  color: #eb6161;
  border-bottom: 1px solid #eb6161;
}
/* 非微信代码块
 * 代码块不换行 display: -webkit-box !important;
 * 代码块换行 display: block;
 */
#nice pre {
  margin: 12px auto;
  box-shadow: 0 1px 2px -2px rgba(0,0,0,.16), 0 3px 6px 0 rgba(0,0,0,.12), 0 5px 12px 4px rgba(0,0,0,.09) !important;
  border-radius: 5px;
}
#nice pre code {
}
/*
 * 表格
 */
#nice table {
  margin: 12px auto;
}
/*
 * 表格内的单元格
 * 字体大小 font-size: 16px;
 * 边框 border: 1px solid #ccc;
 * 内边距 padding: 5px 10px;
 */
#nice table tr th,
#nice table tr td {
  color: #424B5D;
  font-size: 14px;
}
/* 脚注文字 */
#nice .footnote-word {
  color: #eb6161;
}
/* 脚注上标 */
#nice .footnote-ref {
  color: #eb6161;
}
/* "参考资料"四个字 
 * 内容 content: "参考资料";
 */
#nice .footnotes-sep:before {
  font-size: 16px;
}
/* 参考资料编号 */
#nice .footnote-num {
}
/* 参考资料文字 */
#nice .footnote-item p { 
  font-size: 12px;
  color: #424B5D;
}
/* 参考资料解释 */
#nice .footnote-item p em {
  font-size: 12px;
  color: #999999;
}
/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */
#nice .block-equation svg {
  color: #424B5D;
}
/* 行内公式
 */
#nice .inline-equation svg {  
  color: #424B5D;
}

#nice .imageflow-layer1 img {
  border-radius: 0;
}

#nice .imageflow-caption {
  font-size: 14px;
  margin-top: 8px;
  color: #999999;
}

::-webkit-scrollbar {
  height: 4px;
}`;
