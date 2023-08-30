import React, {Component} from "react";
import {observer, inject} from "mobx-react";
import {Tooltip} from "antd";
import {ENTER_DELAY, LEAVE_DELAY} from "../../utils/constant";

import SvgIcon from "../../icon";
import {formatDoc} from "../../utils/editorKeyEvents";
import {hotKeys} from "../../utils/hotkey";

import "./common.css";

@inject("content")
@observer
class Format extends Component {
  handleFormat = () => {
    const {content} = this.props.content;
    formatDoc(content, this.props.content);
  };

  render() {
    return (
      <Tooltip
        placement="bottom"
        mouseEnterDelay={ENTER_DELAY}
        mouseLeaveDelay={LEAVE_DELAY}
        title={"快捷键：" + hotKeys.format}
      >
        <a id="nice-sidebar-format" className="nice-btn-tool" onClick={this.handleFormat}>
          <SvgIcon name="format" className="nice-btn-tool-icon" />
        </a>
      </Tooltip>
    );
  }
}

export default Format;
