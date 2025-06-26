export default `
/* 电脑 */
@media (min-width: 768px) {
  #nice { line-height: 1.875; } /* 30/16px字体大小 */
  #nice p { line-height: 30px; }
  #nice li > section,
#nice li > div { line-height: 30px; }
  #nice blockquote p { line-height: 28px; } /* PC端紧凑点让段距更明显 */
  #nice pre code span { line-height: 30px; }
  #nice .code-snippet__fix .code-snippet__line-index li { line-height: 30px; }
  #nice .footnote-num { line-height: 30px; }
  #nice .footnote-item p { line-height: 30px; }
}
/* 手机 */
@media (max-width: 768px) {
  #nice { line-height: 1.625; } /* 26/16px字体大小 */
  #nice p { line-height: 26px; } /*手机端26px更合适*/
  #nice li > section,
#nice li > div { line-height: 26px; }
  #nice blockquote p { line-height: 26px; }
  #nice pre code span { line-height: 26px; }
  #nice .code-snippet__fix .code-snippet__line-index li { line-height: 26px; }
  #nice .footnote-num { line-height: 26px; }
  #nice .footnote-item p { line-height: 26px; }
}
`;