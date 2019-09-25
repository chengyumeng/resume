export const style = `/**
 *
 * 你好，我是程天小邮差，本科毕业于吉林大学计算机科学与技术学院，目前在中关村做全栈打字员，偶尔做一些开源的事情。
 *
 * 目前主要写 Go 和 Python，由于天赋较好，我也能流利地使用 Angular 和 Vue 和前端同学交流。
 *
 * 这种 HTML 简历并非我原创，但是我觉得很有意思，就给自己写了一个。
 */

/**
 * 为了炫酷一点，先给所有元素都加上过渡效果。
 */

* {
  -webkit-transition: all 1s;
}

/**
 * 现在似乎没什么用，不过一会儿你就能感受到了。
 *
 * 白纸黑字有点单调，我来变换一下。
 */

html {
  background: rgb(63, 82, 99);
}

/***
 * 再等等……
 */

pre, a {
  color: white;
}

/**
 * 这样可能好一些，不过似乎还是有点辣眼睛。
 *
 * 在整个窗口胡搞一点都不美观。
 *
 * 让我来封装一个工作区。
 */

pre:not(:empty) {
  overflow: auto;
  background: rgb(48, 48, 48);
  border: 1px solid #ccc;
  max-height: 44.6%;
  width: 49%;
  font-size: 14px;
  font-family: monospace;
  padding: 10px 10px 20px;
  box-shadow: -4px 4px 2px 0 rgba(0, 0, 0, 0.3);
  white-space: pre-wrap;
  outline: 0;
}

/**
 * OK，我们将开始填充屏幕。
 * 让我们准备好做一些工作。
 */

#style-text {
  -webkit-transform: translateX(95%);
  position: absolute;
}

/**
 * 仍然有些不足，就是所有字体都是白色。
 * 我来加一些代码高亮，以增加可读性如何？
 */

.comment { color: #857F6B;font-style: italic;}
.selector { color: #E69F0F; }
.selector .property { color: #64D5EA; }
.property { color: #64D5EA; }
.punctuation { color: #BE84F2; }

/**
 * emmm，一顿操作猛如虎。
 * 我们需要让窗体更可控一些。
 */

body {
  -webkit-perspective: 1000px;
}

#style-text {
  -webkit-transform: translateX(98.5%) rotateY(-10deg);
  -webkit-transform-origin: right;
  max-height: 94.5%;
}

/**
 * 到此为止，这个窗体已经很惊艳了！
 */

pre:not(#style-text) {
  -webkit-transform: rotateY(10deg);
  -webkit-transform-origin: left;
}
`;
