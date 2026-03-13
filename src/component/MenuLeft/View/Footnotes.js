import React, {Component} from "react";
import {observer, inject} from "mobx-react";

import {RIGHT_SYMBOL} from "../../../utils/constant";
import "../common.css";

@inject("view")
@observer
class Footnotes extends Component {
  handleClick = () => {
    const {isFootnotesVisible} = this.props.view;
    this.props.view.setFootnotesVisible(!isFootnotesVisible);
  };

  render() {
    return (
      <div id="nice-menu-footnotes" className="nice-menu-item" onClick={this.handleClick}>
        <span>
          <span className="nice-menu-flag">{this.props.view.isFootnotesVisible && <span>{RIGHT_SYMBOL}</span>}</span>
          <span className="nice-menu-name">显示参考资料</span>
        </span>
      </div>
    );
  }
}

export default Footnotes;
