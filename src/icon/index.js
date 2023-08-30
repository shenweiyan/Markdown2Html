import React from "react";

import Copy from "./Copy";
import Down from "./Down";
import Environment from "./Environment";
import GitHub from "./GitHub";
import Inbox from "./Inbox";
import More from "./More";
import Rabbit from "./Rabbit";
import Smile from "./Smile";
import Mobile from "./Mobile";
import PC from "./PC";
import Wechat from "./Wechat";
import Zhihu from "./Zhihu";
import Juejin from "./Juejin";
import Close from "./Close";
import FontCase from "./FontCase";
import Replace from "./Replace";
import ReplaceAll from "./ReplaceAll";
import User from "./User";
import Pdf from "./Pdf";
import Markdown from "./Markdown";
import Code from "./Code";
import Bold from "./Bold";
import Del from "./Del";
import Font from "./Font";
import Format from "./Format";
import Image from "./Image";
import InlineCode from "./InlineCode";
import Italic from "./Italic";
import Link from "./Link";
import Quote from "./Quote";
import Table from "./Table";

export default (props) => {
  switch (props.name) {
    case "copy":
      return <Copy {...props} />;
    case "down":
      return <Down {...props} />;
    case "environment":
      return <Environment {...props} />;
    case "github":
      return <GitHub {...props} />;
    case "inbox":
      return <Inbox {...props} />;
    case "more":
      return <More {...props} />;
    case "rabbit":
      return <Rabbit {...props} />;
    case "smile":
      return <Smile {...props} />;
    case "pc":
      return <PC {...props} />;
    case "mobile":
      return <Mobile {...props} />;
    case "wechat":
      return <Wechat {...props} />;
    case "pdf":
      return <Pdf {...props} />;
    case "zhihu":
      return <Zhihu {...props} />;
    case "juejin":
      return <Juejin {...props} />;
    case "close":
      return <Close {...props} />;
    case "fontCase":
      return <FontCase {...props} />;
    case "replace":
      return <Replace {...props} />;
    case "replaceAll":
      return <ReplaceAll {...props} />;
    case "user":
      return <User {...props} />;
    case "markdown":
      return <Markdown {...props} />;
    case "bold":
      return <Bold {...props} />;
    case "code":
      return <Code {...props} />;
    case "del":
      return <Del {...props} />;
    case "font":
      return <Font {...props} />;
    case "format":
      return <Format {...props} />;
    case "image":
      return <Image {...props} />;
    case "inlineCode":
      return <InlineCode {...props} />;
    case "italic":
      return <Italic {...props} />;
    case "link":
      return <Link {...props} />;
    case "quote":
      return <Quote {...props} />;
    case "table":
      return <Table {...props} />;
    default:
      return <svg />;
  }
};
