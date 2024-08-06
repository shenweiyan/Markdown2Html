import React, { Component } from "react";
import { observer, inject } from "mobx-react";

import "../common.css";
import { message } from "antd";

@inject("content")
@observer
class ImportFile extends Component {
  constructor(props) {
    super(props);
    this.handleFileImport = this.handleFileImport.bind(this);
  }

  handleFileImport = file => {
    const reader = new FileReader();
    reader.onload = event => {
      this.props.content.setContent(event.target.result);
      message.success("导入文件成功！yesyesyes");
    };
    reader.readAsText(file);
  };

  // 如果需要在组件渲染后立即导入文件，可以在这里调用handleFileImport
  componentDidMount() {
    if (this.props.initialFile) {
      this.handleFileImport(this.props.initialFile);
    }
  }

  render() {
    return (
      <label
        id="nice-menu-import-file"
        className="nice-menu-item"
        htmlFor="importFile"
      >
        <span>
          <span className="nice-menu-flag" />
          <span className="nice-menu-name">导入123</span>
          <input
            style={{ display: "none" }}
            type="file"
            id="importFile"
            accept=".txt,.md"
            hidden=""
            onChange={e => this.handleFileImport(e.target.files[0])}
          />
        </span>
      </label>
    );
  }
}

export default ImportFile;
