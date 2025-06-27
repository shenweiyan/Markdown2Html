import { Tooltip } from "antd";
import React, { Component } from "react";
import SvgIcon from "../../icon";
import { ENTER_DELAY, LEAVE_DELAY } from "../../utils/constant";
import { observer, inject } from "mobx-react";
import html2canvas from "html2canvas";

import "./Image.css";

@inject("content")
@inject("navbar")
@inject("imageHosting")
@inject("dialog")
@observer
class ExportImage extends Component {
  handleClick = () => {
    const content = document.getElementById("nice-rich-text-box");
    const contentInnerHeight = content.getBoundingClientRect().height;
    const niceNode = document.getElementById("nice");
    const niceNodeHeight = niceNode.getBoundingClientRect().height;
    // 判断是否超出一屏
    const scrollHeight =
      contentInnerHeight > niceNodeHeight
        ? niceNodeHeight + 50 // niceNodeHeight 太紧了，加 50 留白
        : content.scrollHeight;
    // html2canvas 的 windowHeight 参数莫名其妙比 canvas height 少 100
    // mac 屏幕下如此，windows 待验证
    const windowHeightFixed = scrollHeight + 100;

    // 「图片导出中」遮罩
    const matt = document.createElement("div");
    matt.style = `
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 9999;
            background-color: rgba(0, 0, 0, 0.5);
            pointer-events: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            `;
    const loadingText = document.createElement("div");
    loadingText.innerText = "图片导出中...";
    loadingText.style = `
            color: #fff;
            font-size: 20px;
            width: 80%;
            height: 10%;
            text-align: center;
            `;
    matt.appendChild(loadingText);
    content.parentNode.appendChild(matt);

    // 滚动到顶部开始生成图片
    content.scrollTo({
      top: 0,
      left: 0
    });
    window.scrollTo({
      top: 0,
      left: 0
    });
    setTimeout(() => {
      // 生成图片
      html2canvas(content, {
        // 保证图片加载
        useCORS: true,
        height: scrollHeight,
        windowHeight: windowHeightFixed
      }).then(canvas => {
        // 下载图片
        const a = document.createElement("a");
        a.href = canvas.toDataURL("image/png");
        a.download = "md2image.png";
        a.click();
        matt.remove();
      });
    }, 500);
  };

  render() {
    return (
      <Tooltip
        placement="left"
        mouseEnterDelay={ENTER_DELAY}
        mouseLeaveDelay={LEAVE_DELAY}
        title="导出图片"
      >
        <a
          id="nice-sidebar-image"
          className="nice-btn-image"
          onClick={this.handleClick}
        >
          <SvgIcon name="image" className="nice-btn-image-icon" />
        </a>
      </Tooltip>
    );
  }
}

export default ExportImage;
