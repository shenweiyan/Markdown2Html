import React, { Component } from "react";
import { observer, inject } from "mobx-react";

import { message, Tooltip } from "antd";
import "../Sidebar/Wechat.css";
import "./common.css";

@inject("navbar")
@inject("imageHosting")
@inject("dialog")
@inject("content")
@observer
class File extends Component {
  constructor(props) {
    super(props);
    this.html = "";
  }

  handleChange = async e => {
    const file = e.target.files[0];
    // const formData = new FormData();
    //
    // formData.append("file", file);
    // try {
    //     const response = await fetch('http://localhost:3000/api/upload', {
    //         method: 'POST',
    //         body: formData
    //     });
    //     if (response.ok) {
    //         const data = await response.json();
    //         message.success(data.message);
    //     } else {
    //         message.error("文件上传失败，请重试。");
    //     }
    //
    // } catch (error) {
    //     console.error("上传文件时发生错误:", error);
    //     message.error("上传过程中发生错误。");
    // }

    const reader = new FileReader();
    reader.onload = event => {
      this.props.content.setContent(event.target.result);
      message.success("导入文件成功！");
    };
    reader.readAsText(file);
  };

  render() {
    return (
      <label
        id="nice-menu-import-file"
        className="nice-menu-item"
        htmlFor="importFile"
      >
        <span>
          <span className="nice-menu-flag" />
          <span className="nice-menu-name">导入</span>
          <input
            style={{ display: "none" }}
            type="file"
            id="importFile"
            accept=".txt,.md"
            hidden=""
            onChange={this.handleChange}
          />
        </span>
      </label>
    );
  }
}

export default File;
