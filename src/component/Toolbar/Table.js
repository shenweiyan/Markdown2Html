import React, {Component} from "react";
import {inject, observer} from "mobx-react";
import {Tooltip} from "antd";

import SvgIcon from "../../icon";
import {hotKeys} from "../../utils/hotkey";
import {ENTER_DELAY, LEAVE_DELAY} from "../../utils/constant";

import "./common.css";

@inject("dialog")
@observer
class Table extends Component {
  showModal = () => {
    this.props.dialog.setFormOpen(true);
  };

  render() {
    return (
      <Tooltip
        placement="bottom"
        mouseEnterDelay={ENTER_DELAY}
        mouseLeaveDelay={LEAVE_DELAY}
        title={"快捷键：" + hotKeys.form}
      >
        <a id="nice-sidebar-table" className="nice-btn-tool" onClick={this.showModal}>
          <SvgIcon name="table" className="nice-btn-tool-icon" />
        </a>
      </Tooltip>
    );
  }
}

export default Table;
