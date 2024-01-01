import React from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();

  const toPath = (url: string) => () => {
    navigate(url);
  };

  return (
    <div className="Nav">
      <div className="nav-item" onClick={toPath("pornhub")}>
        <div className="pornhub">
          <span className="prefix">Porn</span>
          <span className="postfix">Hub</span>
        </div>
      </div>
      <div className="nav-item">
        <div className="youtube">
          <span className="prefix">You</span>
          <span className="postfix">Tube</span>
        </div>
      </div>
      <div className="nav-item">
        <div className="tourism">
          <div className="tourism-zh">我在公司很想你</div>
          <div className="tourism-en">No Money No Talk</div>
        </div>
      </div>
    </div>
  );
}
