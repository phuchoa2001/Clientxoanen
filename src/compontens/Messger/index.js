import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router";
import io from "socket.io-client";
import { WechatOutlined } from "@ant-design/icons";

import Message from "../Message";

import { API_URL } from "../../contants/Config";
import "./index.css";
import "./girl.css";
import * as ActionsLoading from "../../actions/Loading";
function Mesger(props) {
  const [name, setName] = useState();
  const [listroom, setListRoom] = useState([]);
  const [listmenber, setListmenber] = useState([]);
  const [listMessger, setlistMessger] = useState([]);
  const [textareaText, settextareaText] = useState("");
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const socketIO = useRef();
  const textareaTextRef = useRef();
  const { id } = props.match.params;
  const send = useRef();
  function StartMessger() {
    const Name_LS = localStorage.getItem("Name_Messger");
    socketIO.current = io(API_URL);
    const socket = socketIO.current;
    !Name_LS ? handleSetName() : setName(Name_LS);
    socket.emit("room", {
      room: props.match.params.id,
      name: Name_LS || "Menber New !",
    });
    dispatch(ActionsLoading.ShowLoading());
    socket.on("listroom", (data) => {
      setListRoom(data);
    });
    socket.on("listmenber", (data) => {
      setListmenber(data);
    });
    socket.on("id", (data) => {
      dispatch(ActionsLoading.HideLoading());
      setName((prev) => prev + `(${data})`);
    });
    socket.on("ListMessger", (data) => {
      setlistMessger(data);
    });
    document.querySelector(".enterChat").onkeypress = function (event) {
      var x = event.which || event.keyCode;
      if (x === 13) {
        send.current.click();
        textareaTextRef.current.setSelectionRange(0, 0);
      }
    };
  }
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    StartMessger();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function handleTextareaText(e) {
    const value = e.target.value;
    settextareaText(value);
  }
  function handleCreateRoom() {
    const Room = window.prompt("h??y nh???p t??n c???a ph??ng");
    props.history.push(`/Messger/${Room}`);
    socketIO.current.emit("creactroom", { room: Room });
  }
  function handleindex_A(e) {
    const index = e.target.getAttribute("index") * 1;
    props.history.push(`/Messger/${listroom[index]}`);
    socketIO.current.emit("newroom", { room: listroom[index], name: name });
  }
  function handleChat() {
    textareaTextRef.current.focus();
    socketIO.current.emit("ChatMessger", {
      text: textareaText,
      room: props.match.params.id,
      name: name,
    });
    settextareaText("");
  }
  function handleSetName() {
    const newname = window.prompt("h??y nh???p t??n c???a b???n");
    localStorage.setItem("Name_Messger", newname);
    socketIO.current.emit("changeName", {
      room: props.match.params.id,
      name: newname,
    });
    setName(newname);
  }
  return (
    <div className="row messger  g-0 gx-5">
      <Message>
        <p>Server m???i kh??ng h??? tr??? Socket Io
          . n??n ch??ng t??i s??? s???m fix n?? theo th???i gian r???nh</p>
      </Message>
      <div className={`col col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 box-username ${open ? "open" : "close"}`}>
        <div className="row shadow-sm  bg-body rounded username g-0">
          <p className="messger-name">
            Ch??o b???n : <span>{name}</span>
          </p>
          <button className="messger-btn" onClick={handleSetName}>
            B???m v??o ????y ????? ?????i t??n
          </button>
        </div>
        <div className="row shadow-sm  bg-body rounded list-menber g-0">
          <p>Danh S??ch Online</p>
          <p>-Nh??m router ??ang online-</p>
          <div className="list">
            {listmenber.map((menber, index) => (
              <p key={index}>
                {menber.name}{" "}
                <span>
                  <i className="fa fa-podcast" aria-hidden="true"></i>
                </span>
              </p>
            ))}
          </div>
          <p>-Nh??m c??ng kh???i-</p>
          <button className="messger-btn " onClick={handleCreateRoom}>
            T???o ph??ng c??ng kh???i
          </button>
          <button className="messger-btn show--mobile" onClick={() => setOpen(false)}>
            R???i kh???i
          </button>
          <div className="group">
            {listroom.map((room, index) => (
              <a key={index} href="#/" index={index} onClick={handleindex_A}>
                {room}
                <span>
                  <i className="fa fa-users" aria-hidden="true"></i>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="col col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 shadow-sm  bg-body rounded ground-messger">
        <p>
          Nh??m Chat <span>ID: {id}</span>
        </p>
        <div className="icon-message" onClick={() => setOpen(prev => !prev)}>
          <WechatOutlined style={{ fontSize: 20 }} />
        </div>
        <div className="frames-messger">
          <div className="list-messger">
            {listMessger.map((messger, index) => (
              <p className="name" key={index}>
                {messger.name === name ? "You:" : messger.name + ":"}
                <span className="text">{messger.text}</span>
              </p>
            ))}
          </div>
        </div>
        <div className="bar">
          <textarea
            className="enterChat"
            placeholder="Nh???p chat t???i ????y"
            value={textareaText}
            onChange={handleTextareaText}
            ref={textareaTextRef}
          ></textarea>
          <div className="send" onClick={handleChat} ref={send}>
            <i className="fa fa-paper-plane send-icon" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Mesger);
