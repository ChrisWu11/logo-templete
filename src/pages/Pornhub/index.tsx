import React from "react";
import "./index.scss";
import { useState, useEffect, useRef } from "react";
import fontList from "./font";

export default function Pornhub() {
  const [prefix, setPrefix] = useState<string>("Logo");
  const [postfix, setPostfix] = useState<string>("设计");
  const prefixWidth = useRef<number>(prefix.length * 40);
  const postfixWidth = useRef<number>(postfix.length * 60);
  const [prefixColor, setPrefixColor] = useState<string>("#ffffff");
  const [postfixColor, setPostfixColor] = useState<string>("#000000");
  const [postfixBgColor, setPostfixBgColor] = useState<string>("#ff9900");
  const [fontFamily, setFontFamily] = useState<string>("sans-serif");

  const changeVal = (type: string) => (e: React.ChangeEvent<HTMLElement>) => {
    const reg = /[\u4e00-\u9fa5]/g;

    if (type === "prefix") {
      // 设置prefix的宽度
      prefixWidth.current = caculateWidth((e.target as HTMLInputElement).value);

      setPrefix((e.target as HTMLInputElement).value);
    } else {
      // 设置postfix的宽度
      postfixWidth.current = caculateWidth(
        (e.target as HTMLInputElement).value
      );

      setPostfix((e.target as HTMLInputElement).value);
    }
  };

  // <input/>根据文本内容自适应宽度
  const caculateWidth = (str: string): number => {
    const reg = /[\u4e00-\u9fa5]/g;

    // 匹配e.target.value中的空格
    const spaceLen = str.match(/\s/g)?.length || 0;

    // 获取e.target.value中汉字的个数
    const zhLen = str.match(reg)?.length || 0;

    // 获取e.target.value中非汉字的个数
    const enLen = str.length - zhLen - spaceLen;

    return zhLen * 60 + enLen * 40 + spaceLen * 18;
  };

  const changeColor = (type: string) => (e: React.ChangeEvent<HTMLElement>) => {
    console.log(type);

    if (type === "prefix") {
      setPrefixColor((e.target as HTMLInputElement).value);
    } else if (type === "postfix") {
      setPostfixColor((e.target as HTMLInputElement).value);
    } else {
      setPostfixBgColor((e.target as HTMLInputElement).value);
    }
  };

  const changeFontFamily = (e: React.ChangeEvent<HTMLElement>) => {
    setFontFamily((e.target as HTMLInputElement).value);
  };

  const resetCustomize = () => {
    setPrefixColor("#ffffff");
    setPostfixColor("#000000");
    setPostfixBgColor("#ff9900");
    setFontFamily("sans-serif");
  };

  return (
    <div className="Pornhub">
      <div className="editarea">
        <input
          className="prefix"
          id="prefix"
          type="text"
          value={prefix}
          style={{
            width: prefixWidth.current + "px",
            color: prefixColor,
            fontFamily: fontFamily,
          }}
          onChange={changeVal("prefix")}
        ></input>
        <input
          className="postfix"
          type="text"
          value={postfix}
          style={{
            width: postfixWidth.current + "px",
            color: postfixColor,
            backgroundColor: postfixBgColor,
            borderColor: postfixBgColor,
            fontFamily: fontFamily,
          }}
          onChange={changeVal("postfix")}
        ></input>
      </div>
      <div className="customize">
        <div className="customize-color">
          <div className="color-item">
            <div className="item-name">前缀字体颜色:</div>
            <input
              className="item-input"
              type="color"
              value={prefixColor}
              onChange={changeColor("prefix")}
            />
          </div>
          <div className="color-item">
            <div className="item-name">后缀字体颜色:</div>
            <input
              className="item-input"
              type="color"
              value={postfixColor}
              onChange={changeColor("postfix")}
            />
          </div>
          <div className="color-item">
            <div className="item-name">后缀背景颜色:</div>
            <input
              className="item-input"
              type="color"
              value={postfixBgColor}
              onChange={changeColor("background")}
            />
          </div>
        </div>
        <div className="customize-font">
          <div className="font-item">
            <div className="item-name">字体选择:</div>
            <select
              onChange={changeFontFamily}
              style={{ fontFamily: fontFamily, width: `150px` }}
              value={fontFamily}
            >
              {fontList.map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="font-item">
            <div className="item-btn" onClick={resetCustomize}>
              重置属性
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
