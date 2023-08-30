import React, {Component} from "react";
import {observer, inject} from "mobx-react";
import {Tooltip} from "antd";

import {parseLinkToFoot} from "../../utils/editorKeyEvents";
import {hotKeys} from "../../utils/hotkey";
import {ENTER_DELAY, LEAVE_DELAY} from "../../utils/constant";

import SvgIcon from "../../icon";
import "./common.css";

@inject("content")
@observer
class Format extends Component {
  handleFormat = () => {
    const {content} = this.props.content;
    parseLinkToFoot(content, this.props.content);
  };

  render() {
    return (
      <Tooltip
        placement="bottom"
        mouseEnterDelay={ENTER_DELAY}
        mouseLeaveDelay={LEAVE_DELAY}
        title={"快捷键：" + hotKeys.linkToFoot}
      >
        <a id="nice-sidebar-quote" className="nice-btn-tool" onClick={this.handleFormat}>
          <SvgIcon name="quote" className="nice-btn-tool-icon" />
        </a>
      </Tooltip>
    );
  }
}

export default Format;
