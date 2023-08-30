import {Tooltip} from "antd";
import React, {Component} from "react";
import SvgIcon from "../../icon";
import {ENTER_DELAY, LEAVE_DELAY} from "../../utils/constant";
import {observer, inject} from "mobx-react";

import "./pdf.css";

@inject("content")
@inject("navbar")
@inject("imageHosting")
@inject("dialog")
@observer
class Pdf extends Component {
  handleClick = () => {
    setTimeout(() => {
      window.print();
    }, 500);
  };

  render() {
    return (
      <Tooltip placement="left" mouseEnterDelay={ENTER_DELAY} mouseLeaveDelay={LEAVE_DELAY} title="导出PDF">
        <a id="nice-sidebar-pdf" className="nice-btn-pdf" onClick={this.handleClick}>
          <SvgIcon name="pdf" className="nice-btn-pdf-icon" />
        </a>
      </Tooltip>
    );
  }
}

export default Pdf;
