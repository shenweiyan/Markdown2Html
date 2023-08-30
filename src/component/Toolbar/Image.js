import React, {Component} from "react";
import {observer, inject} from "mobx-react";
import {Tooltip} from "antd";
import {ENTER_DELAY, LEAVE_DELAY} from "../../utils/constant";

import SvgIcon from "../../icon";
import {hotKeys} from "../../utils/hotkey";

import "./common.css";

@inject("dialog")
@observer
class Image extends Component {
  showModal = () => {
    this.props.dialog.setImageOpen(true);
  };

  render() {
    return (
      <Tooltip
        placement="bottom"
        mouseEnterDelay={ENTER_DELAY}
        mouseLeaveDelay={LEAVE_DELAY}
        title={"快捷键：" + hotKeys.image}
      >
        <a id="nice-sidebar-image" className="nice-btn-tool" onClick={this.showModal}>
          <SvgIcon name="image" className="nice-btn-tool-icon" />
        </a>
      </Tooltip>
    );
  }
}

export default Image;
