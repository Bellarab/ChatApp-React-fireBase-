import { useState } from "react";
import React from "react";
import "./ChatList.css";
function ChatList(props) {
  const [addMode, setAddMode] = useState(false);
  return (
    <div class="chatList">
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="" />
          <input type="text" placeholder="Search" />
        </div>
        <img
          src={addMode ? "./minus.png" : "./plus.png"}
          alt="+/-"
          className="add"
          onClick={() => setAddMode((prev) => !prev)}
        />
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Ayaa</span>
          <p>jawb lmok </p>
        </div>
      </div>
    </div>
  );
}

export default ChatList;
