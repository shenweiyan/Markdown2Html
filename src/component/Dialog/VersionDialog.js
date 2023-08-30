import React, {Component} from "react";
import {observer, inject} from "mobx-react";
import {Modal, Timeline, Button} from "antd";
import axios from "axios";
import {NEWEST_VERSION} from "../../utils/constant";
import SvgIcon from "../../icon";

import "./VersionDialog.css";

@inject("dialog")
@observer
class VersionDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      versionNumber: 0,
      versionTimeline: [],
      recommend: null,
      specialInfo: "",
    };
  }

  handleOk = () => {
    this.props.dialog.setVersionOpen(false);
  };

  handleCancel = () => {
    this.props.dialog.setVersionOpen(false);
  };

  handleMore = () => {
    const w = window.open("about:blank");
    w.location.href = "https://github.com/mdnice/markdown-nice/blob/master/CHANGELOG.md";
  };

  handleDocs = () => {
    const w = window.open("about:blank");
    w.location.href = "https://aizhuanqian.online/mardown2html";
  };

  componentDidMount = async () => {
    try {
      const data = {
        versionId: 1,
        versionNumber: "1.0.0",
        versionTimeline: ["2020-09-09 优化排版", "2020-09-08 fork自markdown nice"],
        recommend: {
          link: "https://www.aizhuanqian.com",
          mainInfo: "欢迎关注我的博客",
        },
        specialInfo:
          '<div style="display:flex;justify-content:center;align-items:center;"><img style="width:50%;" src="http://md.aizhuanqian.online/img/wechat_qr.df324554.jpeg"/></div>',
      };
      const newestVersion = localStorage.getItem(NEWEST_VERSION);
      if (data.versionNumber !== newestVersion) {
        this.props.dialog.setVersionOpen(true);
        localStorage.setItem(NEWEST_VERSION, data.versionNumber);
      }
      this.setState({...data});
    } catch (err) {
      console.error("读取最新版本信息错误");
    }
  };

  render() {
    return (
      <Modal
        title="版本更新"
        visible={this.props.dialog.isVersionOpen}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        footer={[
          <Button key="submit" type="primary" onClick={this.handleOk}>
            确认
          </Button>,
        ]}
        destroyOnClose
      >
        <Timeline>
          {this.state.versionTimeline.map((version, index) => {
            if (index === 0) {
              return (
                <Timeline.Item key={index} dot={<SvgIcon name="environment" style={style.svgIcon} />}>
                  <strong>{version}</strong>
                </Timeline.Item>
              );
            } else {
              return <Timeline.Item key={index}>{version}</Timeline.Item>;
            }
          })}
          <Timeline.Item>
            了解更多，请查看
            <a
              id="nice-version-dialog-doc"
              style={{fontWeight: "bold"}}
              alt=""
              href="https://aizhuanqian.online/mardown2html"
              rel="noopener noreferrer"
              target="_blank"
            >
              用户与开发者文档
            </a>
          </Timeline.Item>
          {this.state.recommend && (
            <Timeline.Item dot={<SvgIcon name="more" style={style.svgIcon} />}>
              <a
                id="nice-version-dialog-recommend"
                style={{fontWeight: "bold", borderBottom: "double"}}
                alt=""
                href={this.state.recommend.link}
                rel="noopener noreferrer"
                target="_blank"
              >
                {this.state.recommend.mainInfo}
              </a>
            </Timeline.Item>
          )}
        </Timeline>
        {this.state.specialInfo && (
          <div
            id="nice-version-dialog-special"
            dangerouslySetInnerHTML={{__html: this.state.specialInfo}}
            className="specialInfo"
          />
        )}
      </Modal>
    );
  }
}

const style = {
  svgIcon: {
    width: "16px",
    height: "16px",
  },
};

export default VersionDialog;
