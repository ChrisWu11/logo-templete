import React from "react";
import "./index.scss";
import { useState, useEffect, useRef } from "react";

export default function Pornhub() {
  const [prefix, setPrefix] = useState<string>("Logo");
  const [postfix, setPostfix] = useState<string>("设计");
  const prefixWidth = useRef<number>(prefix.length * 40);
  const postfixWidth = useRef<number>(postfix.length * 60);

  const changeVal = (type: string) => (e: any) => {
    console.log(type);
    const reg = /[\u4e00-\u9fa5]/g;

    if (type === "prefix") {
      // 设置prefix的宽度
      prefixWidth.current = caculateWidth(e.target.value);

      setPrefix(e.target.value);
    } else {
      // 设置postfix的宽度
      postfixWidth.current = caculateWidth(e.target.value);

      setPostfix(e.target.value);
    }
  };

  // <input/>根据文本内容自适应宽度
  const caculateWidth = (str: string): number => {
    const reg = /[\u4e00-\u9fa5]/g;

    // 获取e.target.value中汉字的个数
    const zhLen = str.match(reg)?.length || 0;

    // 获取e.target.value中非汉字的个数
    const enLen = str.length - zhLen;

    return zhLen * 60 + enLen * 40;
  };

  return (
    <div className="Pornhub">
      <div className="editarea">
        <label htmlFor="prefix"></label>
        <input
          className="prefix"
          id="prefix"
          type="text"
          value={prefix}
          style={{ width: prefixWidth.current + "px" }}
          onChange={changeVal("prefix")}
        ></input>
        <input
          className="postfix"
          type="text"
          value={postfix}
          style={{ width: postfixWidth.current + "px" }}
          onChange={changeVal("postfix")}
        ></input>
      </div>
    </div>
  );
}
