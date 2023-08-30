import React, {Component} from "react";
import {observer, inject} from "mobx-react";
import {message, Tooltip} from "antd";
import SvgIcon from "../../icon";

import {ENTER_DELAY, LEAVE_DELAY, EXPORT_FILENAME_SUFFIX} from "../../utils/constant";
import {download, dateFormat} from "../../utils/helper";

import "./Markdown.css";

@inject("content")
@observer
class ExportMarkdown extends Component {
  handleClick = () => {
    const {markdownEditor} = this.props.content;
    const content = markdownEditor.getValue();
    if ("download" in document.createElement("a")) {
      download(content, dateFormat(new Date(), "yyyy-MM-dd") + EXPORT_FILENAME_SUFFIX);
    } else {
      message.warn("浏览器不支持");
    }
  };

  render() {
    return (
      <Tooltip placement="left" mouseEnterDelay={ENTER_DELAY} mouseLeaveDelay={LEAVE_DELAY} title="导出Markdown">
        <a id="nice-sidebar-markdown" className="nice-btn-markdown" onClick={this.handleClick}>
          <SvgIcon name="markdown" className="nice-btn-markdown-icon" />
        </a>
      </Tooltip>
    );
  }
}

export default ExportMarkdown;
