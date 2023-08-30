import React from "react";
import {Menu, Dropdown} from "antd";
import {observer, inject} from "mobx-react";

import {RIGHT_SYMBOL, TEMPLATE_NUM, MARKDOWN_THEME_ID, STYLE} from "../../utils/constant";
import {replaceStyle} from "../../utils/helper";
import TEMPLATE from "../../template/index";
import "./Theme.css";
import axios from "axios";

@inject("content")
@inject("navbar")
@inject("view")
@observer
class Theme extends React.Component {
  changeTemplate = (item) => {
    const index = parseInt(item.key, 10);
    const {themeId, css} = this.props.content.themeList[index];
    this.props.navbar.setTemplateNum(index);

    // 更新style编辑器
    if (themeId === "custom") {
      this.props.content.setCustomStyle();
      // 切换自定义自动打开css编辑
      this.props.view.setStyleEditorOpen(true);
    } else {
      this.props.content.setStyle(css);
    }
  };

  toggleStyleEditor = () => {
    const {isStyleEditorOpen} = this.props.view;
    this.props.view.setStyleEditorOpen(!isStyleEditorOpen);
  };

  subscribeMore = () => {
    const w = window.open("about:blank");
    w.location.href = "https://preview.mdnice.com/themes";
  };

  componentDidMount = async () => {
    const themeList = [
      {themeId: "normal", name: "默认主题", css: TEMPLATE.theme.normal},
      {themeId: "1", name: "橙心", css: TEMPLATE.theme.one},
      {themeId: "2", name: "姹紫", css: TEMPLATE.theme.two},
      {themeId: "3", name: "嫩青", css: TEMPLATE.theme.three},
      {themeId: "4", name: "绿意", css: TEMPLATE.theme.four},
      {themeId: "5", name: "红绯", css: TEMPLATE.theme.five},
      {themeId: "6", name: "蓝莹", css: TEMPLATE.theme.six},
      {themeId: "7", name: "兰青", css: TEMPLATE.theme.seven},
      {themeId: "8", name: "山吹", css: TEMPLATE.theme.eight},
      {themeId: "9", name: "前端之巅同款", css: TEMPLATE.theme.nine},
      {themeId: "10", name: "极客黑", css: TEMPLATE.theme.ten},
      {themeId: "11", name: "蔷薇紫", css: TEMPLATE.theme.eleven},
      {themeId: "12", name: "萌绿", css: TEMPLATE.theme.twelve},
      {themeId: "13", name: "全栈蓝", css: TEMPLATE.theme.thirteen},
      {themeId: "14", name: "极简黑", css: TEMPLATE.theme.fourteen},
      {themeId: "15", name: "橙蓝风", css: TEMPLATE.theme.fifteen},
      {themeId: "custom", name: "自定义", css: TEMPLATE.theme.custom},
    ];

    this.props.content.setThemeList(themeList);
    // 设置一下自定义的规则
    if (!window.localStorage.getItem(STYLE)) {
      window.localStorage.setItem(STYLE, TEMPLATE.theme.custom);
    }
    const templateNum = parseInt(window.localStorage.getItem(TEMPLATE_NUM), 10);

    // 主题样式初始化，属于自定义主题则从localstorage中读数据
    let style = "";
    if (templateNum === themeList.length - 1) {
      style = window.localStorage.getItem(STYLE);
    } else {
      if (templateNum) {
        const {css} = themeList[templateNum];
        style = css;
      } else {
        style = TEMPLATE.normal;
      }
    }
    this.props.content.setStyle(style);
    replaceStyle(MARKDOWN_THEME_ID, style);
  };

  render() {
    const {templateNum} = this.props.navbar;
    const {themeList} = this.props.content;

    const mdMenu = (
      <Menu onClick={this.changeTemplate}>
        {themeList.map((option, index) => (
          <Menu.Item key={index}>
            <div id={`nice-menu-theme-${option.themeId}`} className="nice-themeselect-theme-item">
              <span>
                <span className="nice-themeselect-theme-item-flag">
                  {templateNum === index && <span>{RIGHT_SYMBOL}</span>}
                </span>
                <span className="nice-themeselect-theme-item-name">{option.name}</span>
                {option.isNew && <span className="nice-themeselect-theme-item-new">new</span>}
              </span>
            </div>
          </Menu.Item>
        ))}
        <Menu.Divider />
        <li className="nice-themeselect-menu-item">
          <div id="nice-menu-view-css" className="nice-themeselect-theme-item" onClick={this.toggleStyleEditor}>
            <span>
              <span className="nice-themeselect-theme-item-flag">
                {this.props.view.isStyleEditorOpen && <span>{RIGHT_SYMBOL}</span>}
              </span>
              <span className="nice-themeselect-theme-item-name">查看主题 CSS</span>
            </span>
          </div>
        </li>
      </Menu>
    );
    return (
      <Dropdown overlay={mdMenu} trigger={["click"]} overlayClassName="nice-overlay">
        <a id="nice-menu-theme" className="nice-menu-link" href="#">
          主题
        </a>
      </Dropdown>
    );
  }
}

export default Theme;
