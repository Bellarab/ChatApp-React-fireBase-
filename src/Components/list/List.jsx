import React from "react";
import "./List.css";
import UserInfo from "./userInfo/UserInfo";
import ChatList from "./chatList/ChatList";
function List(props) {
  return (
    <div className="list">
      <UserInfo></UserInfo>
      <ChatList></ChatList>
    </div>
  );
}

export default List;
