export const mdstyle = `
/**
 * 现在看来，左侧的简历 markdown 格式有点灾难。
 * 没关系，让我来修一下！
 */

#work-text.flipped {
  -webkit-transform: rotateX(0deg) rotateY(190deg) rotateZ(180deg);
}

#work-text .md {
  -webkit-transform: rotateY(190deg) rotateZ(180deg);
  margin-top: 800px;
}

/**
 * 简历的窗口好像有点小，我把它放大一下！
 */

#work-text {
  -webkit-transform: translateX(98.5%) rotateY(-10deg);
  -webkit-transform-origin: right;
  max-height: 94.5%;
}

/**
 * OK，基础工作已经完成。
 * 我们来对 markdown 的细节优化下吧。
 * 
 * 字体
 * 标题
 * 列表
 * 链接
 * ……
 *
 * 来，搞起来！
 *
 */

.md {
  font-family: "Helvetica Neue", Helvetica, sans-serif;
}

.md h1, .md h2, .md h3, .md h4, .md h5, .md h6 {
  display: inline-block;
  color: #ddd;
  border-bottom: 1px solid #ccc;
  padding-bottom: 5px;
}

.md li {
  margin: 5px 0;
}

.md h1, .md h2, .md h3, .md h4, .md h5, .md h6, .md ul, .md p {
  margin: 0px;
}
`;
