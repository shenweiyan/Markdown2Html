import React, {Component} from "react";
import {observer, inject} from "mobx-react";

import {hotKeys} from "../../utils/hotkey";
import {Tooltip} from "antd";
import {ENTER_DELAY, LEAVE_DELAY} from "../../utils/constant";

import SvgIcon from "../../icon";
import "./common.css";

@inject("dialog")
@observer
class Link extends Component {
  showModal = () => {
    this.props.dialog.setLinkOpen(true);
  };

  render() {
    return (
      <Tooltip
        placement="bottom"
        mouseEnterDelay={ENTER_DELAY}
        mouseLeaveDelay={LEAVE_DELAY}
        title={"快捷键：" + hotKeys.link}
      >
        <a id="nice-sidebar-link" className="nice-btn-tool" onClick={this.showModal}>
          <SvgIcon name="link" className="nice-btn-tool-icon" />
        </a>
      </Tooltip>
    );
  }
}

export default Link;
