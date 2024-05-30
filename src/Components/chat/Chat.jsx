import { useEffect, useRef, useState } from "react";
import "./Chat.css";
import EmojiPicker from "emoji-picker-react";
function Chat(props) {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
  };
  return (
    <div class="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Ayaa</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message own">
          <div className="texts">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis commodi nostrum ut, perspiciatis accusantium harum
              esse illum. Tenetur quisquam veniam voluptas esse, omnis harum
              perspiciatis quos, asperiores error provident repellendus.
            </p>
            <img src="./avatar.png" alt="" />
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message ">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis commodi nostrum ut, perspiciatis accusantium harum
              esse illum. Tenetur quisquam veniam voluptas esse, omnis harum
              perspiciatis quos, asperiores error provident repellendus.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="type a message ..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onClick={() => {
            setOpen(false);
          }}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
}

export default Chat;
