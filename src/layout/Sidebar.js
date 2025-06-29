import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import classnames from "classnames";

import PreviewType from "../component/Sidebar/PreviewType";
import Wechat from "../component/Sidebar/Wechat";
import Zhihu from "../component/Sidebar/Zhihu";
import Juejin from "../component/Sidebar/Juejin";
import Pdf from "../component/Sidebar/ExportPdf";
import ExportMarkdown from "../component/Sidebar/Markdown";
import ExportImage from "../component/Sidebar/ExportImage";

import "./Sidebar.css";

// @inject("userInfo")
@inject("view")
@observer
class Sidebar extends Component {
  render() {
    const { isImmersiveEditing } = this.props.view;
    const niceSidebarClass = classnames({
      "nice-sidebar": true,
      "nice-sidebar-hide": isImmersiveEditing
    });
    return (
      <div className={niceSidebarClass}>
        <Wechat />
        <Zhihu />
        <Juejin />
        <ExportMarkdown />
        <Pdf />
        <PreviewType />
        <ExportImage />
      </div>
    );
  }
}

export default Sidebar;
