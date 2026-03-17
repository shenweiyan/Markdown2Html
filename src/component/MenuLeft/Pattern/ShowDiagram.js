import React, {Component} from "react";
import {observer, inject} from "mobx-react";

import {RIGHT_SYMBOL} from "../../../utils/constant";
import {hotKeys} from "../../../utils/hotkey";

import "../common.css";

@inject("view")
@observer
class ShowDiagram extends Component {
  handleToggle = () => {
    const {view} = this.props;
    view.setFigcaptionVisible(!view.isFigcaptionVisible);
  };

  render() {
    const {isFigcaptionVisible} = this.props.view;
    return (
      <div
        id="nice-menu-show-diagram"
        className="nice-menu-item"
        onClick={this.handleToggle}
      >
        <span>
          <span className="nice-menu-flag">
            {isFigcaptionVisible && <span>{RIGHT_SYMBOL}</span>}
          </span>
          <span className="nice-menu-name">显示图解</span>
        </span>
        <span className="nice-menu-shortcut">{hotKeys.showDiagram}</span>
      </div>
    );
  }
}

export default ShowDiagram;
