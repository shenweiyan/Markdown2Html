export default `/* 自定义样式，实时生效，浏览器实时缓存 */

/* 全局属性
 * 页边距 padding: 30px;
 * 全文字体 font-family: ptima-Regular;
 * 英文换行 word-break: break-all;
 */
 #nice {
  font-size:14px;
  padding:10px;
}

/*图片下提示*/
#nice figcaption{
  font-size:12px;
}
#nice .imageflow-caption{
  font-size:12px;
}

/* 段落，下方未标注标签参数均同此处
 * 上边距 margin-top: 5px;
 * 下边距 margin-bottom: 5px;
 * 行高 line-height: 26px;
 * 词间距 word-spacing: 3px;
 * 字间距 letter-spacing: 3px;
 * 对齐 text-align: left;
 * 颜色 color: #3e3e3e;
 * 字体大小 font-size: 16px;
 * 首行缩进 text-indent: 2em;
 */
#nice p {
  font-size:14px;
}

/* 一级标题 */
#nice h1 {
}

/* 一级标题内容 */
#nice h1 .content {
}

/* 一级标题前缀 */
#nice h1 .prefix {
}

/* 一级标题后缀 */
#nice h1 .suffix{
}

/* 二级标题 */
#nice h2 {
  	text-align:center;
  	position:relative;
    font-weight: bold;
    color: black;
    line-height: 1.1em;
    padding-top: 12px;
    padding-bottom: 12px;
    margin:70px 30px 30px;
    border: 1px solid #000;
}

#nice h2:before{
  content: ' ';
  float: left;
  display: block;
  width: 90%;
  border-top: 1px solid #000;
  height: 1px;
  line-height: 1px;
  margin-left: -5px;
  margin-top: -17px;
}
#nice h2:after{
  content: ' ';
  float: right;
  display: block;
  width: 90%;
  border-bottom: 1px solid #000;
  height: 1px;
  line-height: 1px;
  margin-right: -5px;
  margin-top: 16px;
}
/* 二级标题内容 */
#nice h2 .content {
  display: block;
  -webkit-box-reflect: below 0em -webkit-gradient(linear,left top,left bottom, from(rgba(0,0,0,0)),to(rgba(255,255,255,0.1)));
}
#nice h2 strong {
}
/* 二级标题前缀 */
#nice h2 .prefix {
  display: block;
  width: 3px;
  margin: 0 0 0 5%;
  height: 3px;
  line-height: 3px;
  overflow: hidden;
  background-color: #000;
  box-shadow:3px 0 #000,
    0 3px #000,
    -3px 0 #000,
    0 -3px #000;
}

/* 二级标题后缀 */
#nice h2 .suffix {
  display: block;
  width: 3px;
  margin: 0 0 0 95%;
  height: 3px;
  line-height: 3px;
  overflow: hidden;
  background-color: #000;
  box-shadow:3px 0 #000,
    0 3px #000,
    -3px 0 #000,
    0 -3px #000;
}

/* 三级标题 */
#nice h3 {
  background-color:#000;
  color:#fff;
  padding:2px 10px;
  width:fit-content;
  font-size:17px;
  margin:60px auto 10px;
}
#nice h3 strong {
  color:#fff;
}

/* 三级标题内容 */
#nice h3 .content {
}

/* 三级标题前缀 */
#nice h3 .prefix {
}

/* 三级标题后缀 */
#nice h3 .suffix {
}

/* 无序列表整体样式
 * list-style-type: square|circle|disc;
 */
#nice ul {
  list-style-type: square;
}
/* 无序二级列表
 */
#nice ul li ul li{
  list-style-type: circle;
}

/* 有序列表整体样式
 * list-style-type: upper-roman|lower-greek|lower-alpha;
 */
#nice ol {
}

/* 列表内容，不要设置li
 */
#nice li section {
}

/* 引用
 * 左边缘颜色 border-left-color: black;
 * 背景色 background: gray;
 */
#nice blockquote {
  border-left: 3px solid rgba(0, 0, 0, 0.65);
  border-right: 1px solid rgba(0, 0, 0, 0.65);
  background: rgb(249, 249, 249);
}

/* 引用文字 */
#nice blockquote p {
}

/* 链接 
 * border-bottom: 1px solid #009688;
 */
#nice a {
}

/* 加粗 */
#nice strong {
}

/* 斜体 */
#nice em {
}

/* 加粗斜体 */
#nice em strong {
}

/* 删除线 */
#nice del {
}

/* 分隔线
 * 粗细、样式和颜色
 * border-top: 1px solid #3e3e3e;
 */
#nice hr {
}

/* 图片
 * 宽度 width: 80%;
 * 居中 margin: 0 auto;
 * 居左 margin: 0 0;
 */
#nice img {
  box-shadow: rgba(170, 170, 170, 0.48) 0px 0px 6px 0px;
  border-radius:4px;
  margin-top:10px;
}
/* 行内代码 */
#nice p code, #nice li code {
  color:#ff6441;
}

/* 非微信代码块
 * 代码块不换行 display: -webkit-box !important;
 * 代码块换行 display: block;
 */
#nice pre.custom {
  box-shadow: rgba(170, 170, 170, 0.48) 0px 0px 6px 0px;
  max-width: 100%;
  border-radius:4px;
  margin: 10px auto 0 auto;
}
#nice pre code {
}

/*
 * 表格内的单元格
 * 字体大小 font-size: 16px;
 * 边框 border: 1px solid #ccc;
 * 内边距 padding: 5px 10px;
 */
#nice table tr th,
#nice table tr td {
  font-size:14px;
}

/* 脚注文字 */
#nice .footnote-word {
}

/* 脚注上标 */
#nice .footnote-ref {
}

/* "参考资料"四个字 
 * 内容 content: "参考资料";
 */
#nice .footnotes-sep {
  font-size: 14px;
  color: #888;
  border-top: 1px solid #eee;
  padding: 30px 0 10px 0px;
  background-color: transparent;
  margin: 0;
  width: 100%;
}
#nice .footnotes-sep:before {
  content:'参考资料';
}
#nice .footnotes{
  border-left:5px solid #eee;
  padding-left:10px;
}

/* 参考资料编号 */
#nice .footnote-num {
  font-size:14px;
  color:#999;
}

/* 参考资料文字 */
#nice .footnote-item p { 
  font-size:14px;
  color:#999;
}

/* 参考资料解释 */
#nice .footnote-item p em {
  font-size:14px;
  color:#999;
}

/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */
#nice .block-equation svg {
}

/* 行内公式
 */
#nice .inline-equation svg {  
}
/* 文章结尾 */
#nice:after{
  content:'- END -';
  font-size:15px;
  display:block;
  text-align:center;
  margin-top:50px;
  color:#999;
  border-bottom:1px solid #eee;
}

/*滑动幻灯片*/
#nice .imageflow-layer1 img{
  margin:0;
  box-shadow: none;
  border-radius: 0;
}
`;
