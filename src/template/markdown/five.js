export default `/*自定义样式，实时生效*/

/* 全局属性
 * 页边距 padding:30px;
 * 全文字体 font-family:ptima-Regular;
 * 英文换行 word-break:break-all;
 */
#nice {
    font-family: Optima-Regular, Optima, PingFangSC-light, PingFangTC-light, "PingFang SC", Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    padding: 5px;
    font-size: 16px;
    color: #353535;
    word-spacing: 0.8px;
    letter-spacing: 0.8px;
    border-radius: 16px;
}

/* 段落，下方未标注标签参数均同此处
   * 上边距 margin-top:5px;
   * 下边距 margin-bottom:5px;
   * 行高 line-height:26px;
   * 词间距 word-spacing:3px;
   * 字间距 letter-spacing:3px;
   * 对齐 text-align:left;
   * 颜色 color:#3e3e3e;
   * 字体大小 font-size:16px;
   * 首行缩进 text-indent:2em;
   */
#nice p {
    line-height: 1.75;
    margin: 0.8em 0;
    font-size: 16px;
    color: #353535;
}

/* 一级标题 */
#nice h1 {
    border-top: 2px solid rgb(248, 57, 41);
    text-align: center;
    font-size: 1.3em;
}

/* 一级标题内容 */
#nice h1 .content {
    display: inline-block;
    font-weight: normal;
    background: rgb(248, 57, 41);
    color: #ffffff;
    padding: 3px 10px 1px;
    border-radius: 0 0 13px 13px;
}

/* 一级标题修饰 请参考有实例的主题 */
#nice h1:after {}

/* 二级标题 */
#nice h2 {
    text-align: left;
    margin: 20px 10px 0px 0px;
}

/* 二级标题内容 */
#nice h2 .content {
    font-size: 18px;
    font-weight: 700;
    color: #222;
    display: inline-block;
    padding-left: 10px;
    border-left: 5px solid rgb(248, 57, 41);
}

/* 二级标题修饰 请参考有实例的主题 */
#nice h2:after {}

/* 三级标题 */
#nice h3 {}

/* 三级标题内容 */
#nice h3 .content {
    font-size: 16px;
    color: #222;
}

/* 三级标题修饰 请参考有实例的主题 */
#nice h3:after {}

/* 无序列表整体样式
   * list-style-type: square|circle|disc;
   */
#nice ul {
    color: #f83929;
    font-size: 16px;
}

/* 有序列表整体样式
   * list-style-type: upper-roman|lower-greek|lower-alpha;
   */
#nice ol {
    color: #f83929;
    font-size: 16px;
}

/* 列表内容，不要设置li
   */
#nice li section {
    color: #353535;
}

/* 引用
   * 左边缘颜色 border-left-color:black;
   * 背景色 background:gray;
   */
#nice blockquote {
    font-style: normal;
    border-left: none;
    padding: 15px 10px;
    line-height: 1.75;
    border-radius: 13px;
    color: #353535;
    background: #f5f5f5;
}

#nice blockquote:before {
    content: "“";
    display: block;
    font-size: 2em;
    color: rgb(248, 57, 41);
    font-family: Arial, serif;
    line-height: 1em;
    font-weight: 700;
}

/* 引用文字 */
#nice blockquote p {
    color: #353535;
    font-size: 16px;
    margin: 0 10px;
    display: block;
}

#nice blockquote:after {
    content: "”";
    float: right;
    display: block;
    font-size: 2em;
    color: rgb(248, 57, 41);
    font-family: Arial, serif;
    line-height: 1em;
    font-weight: 700;
}

/* 链接 
* border-bottom: 1px solid #009688;
*/
#nice a {
    color: rgb(248, 57, 41);
    font-weight: 400;
    border-bottom: 1px solid rgb(248, 57, 41);

}

/* 加粗 */
#nice strong {
    font-weight: 700;
    color: rgb(248, 57, 41);
}

/* 斜体 */
#nice em {
    color: rgb(248, 57, 41);
}

/* 加粗斜体 */
#nice em strong {
    color: rgb(248, 57, 41);
}

/* 删除线 */
#nice del {}

/* 分隔线
   * 粗细、样式和颜色
   * border-top:1px solid #3e3e3e;
   */
#nice hr {
    height: 1px;
    padding: 0;
    border: none;
    border-top: medium solidid #333;
    text-align: center;
    background-image: linear-gradient(to right, rgba(248, 57, 41, 0), rgba(248, 57, 41, 0.75), rgba(248, 57, 41, 0));
}

/* 图片
   * 宽度 width:80%;
   * 居中 margin:0 auto;
   * 居左 margin:0 0;
   */
#nice figure {
    border-radius: 16px;
    overflow: hidden;
}

#nice figure a img {
    border-radius: 16px;
    width: 100%;
    max-width: 100%;
}

#nice img {
    border-radius: 6px;
    display: block;
    margin: 20px auto;
    max-width: 95%;
    object-fit: contain;
}

/* 图片描述文字 */
#nice figcaption {
    display: block;
    font-size: 12px;
}

/* 行内代码 */
#nice p code,
#nice li code {
    color: rgb(271, 93, 108);
}

/* 非微信代码块
   * 代码块不换行 display:-webkit-box !important;
   * 代码块换行 display:block;
   */
#nice pre code {}

/*
   * 表格内的单元格
   * 字体大小 font-size: 16px;
   * 边框 border: 1px solid #ccc;
   * 内边距 padding: 5px 10px;
   */
#nice table tr th,
#nice table tr td {
    font-size: 16px;
    color: #645647;
}

#nice table tr th {
    color: #353535;
    background-color: #dbd9d8;
}

#nice .footnotes {
    font-size: 16px;
}

/* 脚注文字 */
#nice .footnote-word {
    font-weight: normal;
    color: #f83929;
}

/* 脚注上标 */
#nice .footnote-ref {
    font-weight: normal;
    color: #f83929;
}

/*脚注链接样式*/
#nice .footnote-item em {
    font-size: 16px;
    display: block;
}

/* "参考资料"四个字 
  * 内容 content: "参考资料";
  */
#nice .footnotes-sep:before {
    content: '参考资料 ';
    color: #f83929;
    letter-spacing: 1px;
    text-align: left;
    display: block;
    font-weight: 500;
    padding-bottom: .1em;
    border-bottom: 3px double #f83929;
    font-size: 20px;
}

/* 参考资料编号 */
#nice .footnote-num {
    color: #f83929;
}

/* 参考资料文字 */
#nice .footnote-item p {
    font-weight: 400;
    color: #f83929;
}

/* 参考资料解释 */
#nice .footnote-item p em {
    font-weight: 400;
    font-size: 14px;
    color: #353535;
}

/* 行间公式
  * 最大宽度 max-width: 300% !important;
  */
#nice .block-equation svg {
    color: #353535;
}

/* 行内公式
  */
#nice .inline-equation svg {
    color: #353535;
}

/* 滑动图片
   */
#nice .imageflow-img {
    display: inline-block;
    width: 100%;
    margin-bottom: 0;
}`;
