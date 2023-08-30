import React, {Component} from "react";
import {observer, inject} from "mobx-react";
import {Tooltip} from "antd";
import {ENTER_DELAY, LEAVE_DELAY} from "../../utils/constant";

import SvgIcon from "../../icon";
import {inlineCode} from "../../utils/editorKeyEvents";
import {hotKeys} from "../../utils/hotkey";

import "./common.css";

@inject("content")
@observer
class InlineCode extends Component {
  handleClick = () => {
    const {markdownEditor} = this.props.content;
    const selection = markdownEditor.getSelection();
    inlineCode(markdownEditor, selection);

    // 上传后实时更新内容
    const content = markdownEditor.getValue();
    this.props.content.setContent(content);
    markdownEditor.focus();
  };

  render() {
    return (
      <Tooltip
        placement="bottom"
        mouseEnterDelay={ENTER_DELAY}
        mouseLeaveDelay={LEAVE_DELAY}
        title={"快捷键：" + hotKeys.inlineCode}
      >
        <a id="nice-sidebar-inlineCode" className="nice-btn-tool" onClick={this.handleClick}>
          <SvgIcon name="inlineCode" className="nice-btn-tool-icon" />
        </a>
      </Tooltip>
    );
  }
}

export default InlineCode;
