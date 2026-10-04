import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Bell,
  Check,
  ChevronRight,
  Clock3,
  Image,
  Info,
  Paperclip,
  Search,
  Send,
  Settings,
  Smile,
  UserPlus,
  Users,
  Video,
  Phone,
  MoreHorizontal,
  LayoutPanelTop,
  Zap,
  FileText,
} from "lucide-react";

import "./ZaloSimulation.css";

const avatarMain =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAinqopjuHPtEhSFzuoQoUnxB6ViFewsb11LObRCuyL2c8wah2H5I4dgmJNRrN3wYP6D7IFQbfOSrolG55UQ0Kra8Ao3HC5-8mgIEfcvVW-edstzExYzcDWdz9EuhLJAlx0kZ3NVe35kNGMl4iHuLvBXRbJAZ-GRio9niHWM7oB1NdrmahyZHpqAbuDgVTJC5lACSXn";

const chatImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBaPUvBNuzUvdzzf3mXpmy4U5XAdzbNRpEBwph7q-uCbTUFqPsTL3bkKSAoKE_CZuhtI39Av4_aAhKgEqGxvh4YsOb6zKQio-RcDFtapzls7bwPCXXf-bUm8_qrPZv7X1zdz3UUvT65YVTEB2kCUqACAVVK5Efv417Mn_o3OPZLpvzCD9RGfmRXVkZwySFvEm4LaB4z";

const chats = [
  {
    name: "Thu Vân",
    time: "7 days",
    preview: "You: Còn mấy phí local charge thì ...",
    avatar: avatarMain,
    active: true,
  },
  {
    name: "Vuphuong",
    time: "17/08",
    preview: "dạ vâng a",
    unread: 1,
    avatar: chatImage,
  },
  {
    name: "Le Quang Minh",
    time: "17/08",
    preview: "Cảm ơn ad nhé",
    avatar: avatarMain,
  },
  {
    name: "Quốc Khải",
    time: "15/08",
    preview: "Vậy giờ cần làm gì nữa á",
    avatar: chatImage,
  },
  {
    name: "Võ Văn Duy",
    time: "15/08",
    preview: "You: Chào em, anh là admin của ...",
    avatar: avatarMain,
  },
];

const notifications = [
  {
    title: "Lô hàng mới đã cập nhật",
    text: "Lịch trình tàu cho lô hàng Hamburg đã được cập nhật trong hệ thống.",
    time: "10 phút trước",
    unread: true,
  },
  {
    title: "Bài tập thực hành 2 đã hoàn thành",
    text: "Bạn đã hoàn thành xuất sắc phần mô phỏng kịch bản vận chuyển.",
    time: "1 giờ trước",
    unread: true,
  },
  {
    title: "Thông báo từ giảng viên",
    text: "Chào Nam, hãy chú ý kiểm tra kỹ phần phí local charge nhé.",
    time: "Hôm qua",
    unread: false,
  },
];

export default function ZaloSimulation() {
  const navigate = useNavigate();

  const [speed, setSpeed] = useState("1X");
  const [pendingSpeed, setPendingSpeed] = useState(null);
  const [showSpeedModal, setShowSpeedModal] = useState(false);

  const [showNotifications, setShowNotifications] =
    useState(false);

  const [notificationItems, setNotificationItems] =
    useState(notifications);

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "received",
      text: "Em check lịch tàu trên website hãng tàu trước khi hỏi báo giá nè, check tem từ ngày mấy phù hợp rồi hỏi giá ngày đó, những ngày màu đỏ là hết chỗ rồi nên hông đặt được",
      time: "09:12",
      image: true,
    },
    {
      id: 2,
      type: "received",
      text: "Còn mấy phí local charge thì phải xem trên hãng tàu họ thu như thế nào nè",
      time: "04:38",
      reply: true,
    },
  ]);

  const unreadNotifications =
    notificationItems.filter(
      (item) => item.unread
    ).length;

  const requestSpeedChange = (newSpeed) => {
    setPendingSpeed(newSpeed);
    setShowSpeedModal(true);
  };

  const confirmSpeed = () => {
    setSpeed(pendingSpeed);
    setPendingSpeed(null);
    setShowSpeedModal(false);
  };

  const cancelSpeed = () => {
    setPendingSpeed(null);
    setShowSpeedModal(false);
  };

  const markAllRead = () => {
    setNotificationItems((items) =>
      items.map((item) => ({
        ...item,
        unread: false,
      }))
    );
  };

  const sendMessage = () => {
    const text = message.trim();

    if (!text) return;

    setMessages((items) => [
      ...items,
      {
        id: Date.now(),
        type: "sent",
        text,
        time: new Date().toLocaleTimeString("vi-VN", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);

    setMessage("");
  };

  const handleKeyDown = (event) => {
    if (
      event.key === "Enter" &&
      !event.shiftKey
    ) {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="zl-page">
      {/* =====================================================
          TOP BAR
      ====================================================== */}

      <header className="zl-topbar">
        <button
          className="zl-back"
          onClick={() =>
            navigate("/learning/module")
          }
        >
          <ArrowLeft size={20} />
          <span>Quay lại học tập</span>
        </button>

        <div className="zl-top-center">
          <div className="zl-clock">
            <Clock3 size={15} />
            <span>
              14:30:05&nbsp;&nbsp;|&nbsp;&nbsp;24/05/2024
            </span>
          </div>

          <div className="zl-speed">
            {["1X", "2X", "3X", "5X"].map(
              (item) => (
                <button
                  key={item}
                  className={
                    speed === item
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    requestSpeedChange(item)
                  }
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>

        <div className="zl-notification-wrap">
          <button
            className="zl-bell"
            onClick={() =>
              setShowNotifications(
                (value) => !value
              )
            }
          >
            <Bell size={22} />

            {unreadNotifications > 0 && (
              <span className="zl-badge">
                {unreadNotifications}
              </span>
            )}
          </button>

          {showNotifications && (
            <div className="zl-notification">
              <div className="zl-notification-head">
                <strong>Thông báo</strong>

                <button onClick={markAllRead}>
                  Đánh dấu tất cả đã đọc
                </button>
              </div>

              {notificationItems.map(
                (item, index) => (
                  <button
                    key={index}
                    className={
                      item.unread
                        ? "zl-notification-item unread"
                        : "zl-notification-item"
                    }
                    onClick={() => {
                      setNotificationItems(
                        (current) =>
                          current.map(
                            (notification, i) =>
                              i === index
                                ? {
                                    ...notification,
                                    unread: false,
                                  }
                                : notification
                          )
                      );
                    }}
                  >
                    <div>
                      <strong>
                        {item.title}
                      </strong>

                      {item.unread && (
                        <span className="zl-unread-dot" />
                      )}
                    </div>

                    <p>{item.text}</p>

                    <small>{item.time}</small>
                  </button>
                )
              )}

              <button className="zl-view-all">
                Xem tất cả thông báo
                <ChevronRight size={14} />
              </button>
            </div>
          )}
        </div>
      </header>

      {/* =====================================================
          MAIN
      ====================================================== */}

      <div className="zl-main">
        {/* ===================================================
            LEFT BLUE SIDEBAR
        ==================================================== */}

        <aside className="zl-blue-sidebar">
          <div className="zl-zalo-avatar">
            <img
              src={avatarMain}
              alt="Zalo"
            />
            <span />
          </div>

          <button className="zl-sidebar-icon active">
            <span className="zl-chat-symbol">
              💬
            </span>
          </button>

          <button className="zl-sidebar-icon">
            <Users size={23} />
          </button>

          <button className="zl-sidebar-icon">
            <UserPlus size={22} />
          </button>

          <button className="zl-sidebar-icon">
            <FileText size={22} />
          </button>

          <button className="zl-sidebar-icon">
            <Settings size={22} />
          </button>

          <div className="zl-sidebar-bottom">
            <button className="zl-sidebar-icon">
              <Settings size={22} />
            </button>
          </div>
        </aside>

        {/* ===================================================
            CONVERSATION LIST
        ==================================================== */}

        <aside className="zl-conversations">
          <div className="zl-search-row">
            <div className="zl-search">
              <Search size={18} />
              <input
                placeholder="Search"
                type="text"
              />
            </div>

            <button>
              <UserPlus size={20} />
            </button>

            <button>
              <Users size={20} />
            </button>
          </div>

          <div className="zl-tabs">
            <button className="active">
              All
            </button>

            <button>Unread</button>

            <button className="zl-labels">
              Labels
              <span>⌄</span>
            </button>

            <button>
              <MoreHorizontal size={18} />
            </button>
          </div>

          <div className="zl-chat-list">
            {chats.map((chat) => (
              <button
                key={chat.name}
                className={
                  chat.active
                    ? "zl-chat-item active"
                    : "zl-chat-item"
                }
              >
                <img
                  src={chat.avatar}
                  alt={chat.name}
                />

                <div className="zl-chat-content">
                  <div className="zl-chat-top">
                    <strong>{chat.name}</strong>

                    <small>
                      {chat.time}
                    </small>
                  </div>

                  <div className="zl-chat-bottom">
                    <span>
                      {chat.preview}
                    </span>

                    {chat.unread && (
                      <b>{chat.unread}</b>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </aside>

        {/* ===================================================
            CHAT
        ==================================================== */}

        <main className="zl-chat">
          {/* CHAT HEADER */}

          <div className="zl-chat-header">
            <div className="zl-user">
              <img
                src={avatarMain}
                alt="Thu Vân"
              />

              <div>
                <h2>Thu Vân</h2>

                <div className="zl-user-meta">
                  <span>STRANGER</span>

                  <span>
                    <Users size={13} />
                    Mutual group (1)
                  </span>

                  <span>◆</span>
                </div>
              </div>
            </div>

            <div className="zl-chat-tools">
              <button>
                <Search size={21} />
              </button>

              <button>
                <LayoutPanelTop size={20} />
              </button>
            </div>
          </div>

          {/* FRIEND REQUEST */}

          <div className="zl-friend-bar">
            <div>
              <UserPlus size={17} />
              <span>
                Send this user a friend request
              </span>
            </div>

            <div>
              <button className="zl-add-friend">
                Add friend
              </button>

              <button className="zl-more">
                <MoreHorizontal size={19} />
              </button>
            </div>
          </div>

          {/* MESSAGES */}

          <div className="zl-messages">
            {messages.map((item) => (
              <div
                key={item.id}
                className={
                  item.type === "received"
                    ? "zl-message received"
                    : "zl-message sent"
                }
              >
                {item.image && (
                  <div className="zl-message-avatar">
                    <img
                      src={avatarMain}
                      alt=""
                    />
                  </div>
                )}

                <div
                  className={
                    item.type === "received"
                      ? "zl-bubble received"
                      : "zl-bubble sent"
                  }
                >
                  {item.image && (
                    <img
                      className="zl-shipping-image"
                      src={chatImage}
                      alt="Lịch tàu"
                    />
                  )}

                  {item.reply && (
                    <div className="zl-reply">
                      <div className="zl-reply-avatar" />

                      <div>
                        <strong>
                          Thu Vân
                        </strong>

                        <span>
                          [Photo] ban đầu em cũng
                          có nháp mấy phí này rồi
                          ạ, hệ thống hiện vậy ạ...
                        </span>
                      </div>
                    </div>
                  )}

                  <p>{item.text}</p>

                  <div className="zl-message-meta">
                    <span>{item.time}</span>

                    {item.type ===
                      "received" && (
                      <span className="zl-received">
                        <Check size={12} />
                        Received
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* COMPOSER */}

          <div className="zl-composer">
            <div className="zl-composer-tools">
              <button>
                <Smile size={19} />
              </button>

              <button>
                <Image size={19} />
              </button>

              <button>
                <Paperclip size={19} />
              </button>

              <button>
                <LayoutPanelTop
                  size={18}
                />
              </button>

              <span />

              <button>
                <span className="zl-text-icon">
                  A
                </span>
              </button>

              <button>
                <Zap size={18} />
              </button>

              <button>
                <FileText size={18} />
              </button>

              <button>
                <MoreHorizontal size={18} />
              </button>
            </div>

            <div className="zl-composer-bottom">
              <textarea
                value={message}
                onChange={(event) =>
                  setMessage(event.target.value)
                }
                onKeyDown={handleKeyDown}
                placeholder=""
                rows={2}
              />

              <div className="zl-send-area">
                <button className="zl-smile">
                  <Smile size={21} />
                </button>

                <button
                  className="zl-send"
                  onClick={sendMessage}
                >
                  <Send size={22} />
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* ===================================================
            RIGHT CHANNEL PANEL
        ==================================================== */}

        <aside className="zl-channel-panel">
          <button
            className="zl-channel"
            onClick={() =>
              navigate(
                "/simulations/customer-info"
              )
            }
          >
            <span className="zl-channel-icon info">
              <Info size={19} />
            </span>

            <span>Thông tin</span>
          </button>

          <button
            className="zl-channel"
            onClick={() =>
              navigate("/simulations/gmail")
            }
          >
            <span className="zl-channel-icon gmail">
              M
            </span>

            <span>Gmail</span>
          </button>

          <button className="zl-channel">
            <span className="zl-channel-icon wechat">
              W
            </span>

            <span>WeChat</span>
          </button>

          <button
            className="zl-channel"
            onClick={() =>
              navigate(
                "/simulations/whatsapp-notification"
              )
            }
          >
            <span className="zl-channel-icon whatsapp">
              W
            </span>

            <span>WhatsApp</span>
          </button>

          <button className="zl-channel active">
            <span className="zl-channel-icon zalo">
              Zalo
              <b>1</b>
            </span>

            <span>Zalo</span>
          </button>
        </aside>
      </div>

      {/* =====================================================
          SPEED MODAL
      ====================================================== */}

      {showSpeedModal && (
        <div className="zl-modal-wrap">
          <div className="zl-modal-overlay" />

          <div className="zl-modal">
            <h3>
              Xác nhận thay đổi tốc độ
            </h3>

            <p>
              Bạn đang chuẩn bị thay đổi tốc độ
              mô phỏng sang{" "}
              <strong>{pendingSpeed}</strong>.
              Thời gian trong kịch bản sẽ trôi
              nhanh hơn. Bạn có muốn tiếp tục?
            </p>

            <div className="zl-modal-actions">
              <button onClick={cancelSpeed}>
                Hủy
              </button>

              <button onClick={confirmSpeed}>
                Đồng ý
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}