import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Bell,
  Check,
  CheckCheck,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Info,
  Lock,
  MoreVertical,
  Paperclip,
  Search,
  Send,
  Smile,
  X,
} from "lucide-react";

import "./WhatsAppSimulation.css";

const chats = [
  {
    id: 1,
    name: "Hoàng Nam",
    time: "11:12 PM",
    preview: "😃",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDaKbOg0t0sTgRBI4hA_u7K8pg0mqz215uJ394dCMm9CRuedD7aoAZZPqJszA87O_UM4QUS63G_2Dy3Pw09iGVoReHlwyVN6eTxaIBV9ZxO_EU5FjEoPKNgfcSa6klatNtrtLs6L4XbCOGkjDjzRWoAXPm9aIXw6fuzKn_zVkjvTgpCN7ekgoWERoFS-wYGq3jBSZyrMNNrfhwmOCxYDV0SvbZG-XkeNhU7qQYD7_k6F1VXTI1KqSLG",
  },
  {
    id: 2,
    name: "Nhóm Dự Án",
    time: "7:25 AM",
    preview: "Nhóm Dự Án của làm shi uẩn đó ...",
    unread: 2,
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCpo57PkqPTj3KvDatQy0XI2WmvlGfanXn0GDTKzltpPy5095pQm9kRMcpMxVaO3m5K3QuMdFKDQ1ZGNKUuvuZwz2EQClvPR8pWfUG8O5OXlaMWxwfime5F6OhgfBu2tIiBYBnc2paWH6FzbElvlKinaLkZVU0NdbYOuF4AetlaNzObbEmWkEhXcoCPa8IaxTj4_tt3PP0O4uRKSisD39nhd994e27AUOBFJ-bzD79BJVqdD-5kkmkP",
  },
  {
    id: 3,
    name: "Minh Quân",
    time: "11:05 AM",
    preview: "Last message",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCpo57PkqPTj3KvDatQy0XI2WmvlGfanXn0GDTKzltpPy5095pQm9kRMcpMxVaO3m5K3QuMdFKDQ1ZGNKUuvuZwz2EQClvPR8pWfUG8O5OXlaMWxwfime5F6OhgfBu2tIiBYBnc2paWH6FzbElvlKinaLkZVU0NdbYOuF4AetlaNzObbEmWkEhXcoCPa8IaxTj4_tt3PP0O4uRKSisD39nhd994e27AUOBFJ-bzD79BJVqdD-5kkmkP",
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
  {
    title: "Cập nhật tài liệu Logistics v2.4",
    text: "Giáo trình và biểu phí vận tải đường biển quốc tế đã được bổ sung vào học phần.",
    time: "2 ngày trước",
    unread: false,
  },
  {
    title: "Chào mừng đến với NetStudy",
    text: "Bạn đã đăng nhập thành công vào hệ thống mô phỏng thực hành tương tác trực tuyến.",
    time: "3 ngày trước",
    unread: false,
  },
];

export default function WhatsAppSimulation() {
  const navigate = useNavigate();

  const [speed, setSpeed] = useState("1X");
  const [pendingSpeed, setPendingSpeed] = useState(null);
  const [showSpeedModal, setShowSpeedModal] = useState(false);

  const [showNotifications, setShowNotifications] =
    useState(false);

  const [notificationList, setNotificationList] =
    useState(notifications);

  const [notificationExpanded, setNotificationExpanded] =
    useState(true);

  const [rightCollapsed, setRightCollapsed] =
    useState(false);

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "received",
      text: "Chào anh, tôi đã nhận được lịch tàu mới nhất cho lô hàng đi Hamburg.",
      time: "10:45 AM",
    },
    {
      id: 2,
      type: "sent",
      text: "Cảm ơn em. Check lại giúp anh phí local charge tại cảng đi nhé.",
      time: "10:47 AM",
    },
    {
      id: 3,
      type: "received",
      text: "Dạ vâng, để em check với hãng tàu rồi báo lại anh ngay ạ.",
      time: "10:48 AM",
    },
  ]);

  const unreadCount = notificationList.filter(
    (item) => item.unread
  ).length;

  const requestSpeedChange = (newSpeed) => {
    setPendingSpeed(newSpeed);
    setShowSpeedModal(true);
  };

  const confirmSpeedChange = () => {
    if (pendingSpeed) {
      setSpeed(pendingSpeed);
    }

    setPendingSpeed(null);
    setShowSpeedModal(false);
  };

  const cancelSpeedChange = () => {
    setPendingSpeed(null);
    setShowSpeedModal(false);
  };

  const markAllRead = () => {
    setNotificationList((current) =>
      current.map((item) => ({
        ...item,
        unread: false,
      }))
    );
  };

  const markNotificationRead = (index) => {
    setNotificationList((current) =>
      current.map((item, itemIndex) =>
        itemIndex === index
          ? {
              ...item,
              unread: false,
            }
          : item
      )
    );
  };

  const sendMessage = () => {
    const text = message.trim();

    if (!text) return;

    setMessages((current) => [
      ...current,
      {
        id: Date.now(),
        type: "sent",
        text,
        time: "11:12 AM",
      },
    ]);

    setMessage("");
  };

  const handleMessageKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="wa-page">
      {/* =====================================================
          TOP BAR
      ====================================================== */}

      <header className="wa-topbar">
        <button
          type="button"
          className="wa-back"
          onClick={() => navigate("/learning/module")}
        >
          <ArrowLeft size={20} />
          <span>Quay lại học tập</span>
        </button>

        <div className="wa-top-center">
          <div className="wa-clock">
            <Clock3 size={15} />

            <span>
              14:30:05 | 24/05/2024
            </span>
          </div>

          <div className="wa-speed">
            {["1X", "2X", "3X", "5X"].map((item) => (
              <button
                key={item}
                type="button"
                className={
                  speed === item
                    ? "wa-speed-active"
                    : ""
                }
                onClick={() =>
                  requestSpeedChange(item)
                }
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="wa-notification-wrapper">
          <button
            type="button"
            className="wa-notification-button"
            onClick={() =>
              setShowNotifications(
                (current) => !current
              )
            }
          >
            <Bell size={23} />

            {unreadCount > 0 && (
              <span className="wa-notification-dot" />
            )}
          </button>

          {showNotifications && (
            <div className="wa-notification-dropdown">
              <div className="wa-notification-header">
                <strong>
                  Thông báo ({notificationList.length})
                </strong>

                <button
                  type="button"
                  onClick={markAllRead}
                >
                  Đánh dấu tất cả đã đọc
                </button>
              </div>

              <div
                className={
                  notificationExpanded
                    ? "wa-notification-list expanded"
                    : "wa-notification-list"
                }
              >
                {notificationList.map(
                  (notification, index) => (
                    <button
                      type="button"
                      key={notification.title}
                      className={
                        notification.unread
                          ? "wa-notification-item unread"
                          : "wa-notification-item"
                      }
                      onClick={() =>
                        markNotificationRead(index)
                      }
                    >
                      <div className="wa-notification-row">
                        <p>{notification.title}</p>

                        {notification.unread && (
                          <span className="wa-unread-dot" />
                        )}
                      </div>

                      <p className="wa-notification-text">
                        {notification.text}
                      </p>

                      <span className="wa-notification-time">
                        {notification.time}
                      </span>
                    </button>
                  )
                )}
              </div>

              <button
                type="button"
                className="wa-notification-toggle"
                onClick={() =>
                  setNotificationExpanded(
                    (current) => !current
                  )
                }
              >
                {notificationExpanded
                  ? "Thu gọn thông báo"
                  : "Xem tất cả thông báo"}

                {notificationExpanded ? (
                  <ChevronRight size={14} />
                ) : (
                  <ChevronLeft size={14} />
                )}
              </button>
            </div>
          )}
        </div>
      </header>

      {/* =====================================================
          MAIN
      ====================================================== */}

      <div className="wa-main">
        <main className="wa-content">
          {/* Green accent from Stitch */}

          <div className="wa-green-accent" />

          <div className="wa-app">
            {/* =================================================
                CHAT LIST
            ================================================== */}

            <aside className="wa-chat-list">
              <div className="wa-chat-search">
                <Search size={17} />

                <input
                  type="text"
                  placeholder="Search or start new chat"
                />
              </div>

              <div className="wa-chat-items">
                {chats.map((chat, index) => (
                  <button
                    type="button"
                    key={chat.id}
                    className={
                      index === 0
                        ? "wa-chat-item active"
                        : "wa-chat-item"
                    }
                  >
                    <img
                      src={chat.avatar}
                      alt={chat.name}
                    />

                    <div className="wa-chat-info">
                      <div className="wa-chat-name-row">
                        <span>{chat.name}</span>

                        <small
                          className={
                            index === 1
                              ? "green-time"
                              : ""
                          }
                        >
                          {chat.time}
                        </small>
                      </div>

                      <div className="wa-chat-preview-row">
                        <span>{chat.preview}</span>

                        {chat.unread && (
                          <b>{chat.unread}</b>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </aside>

            {/* =================================================
                CHAT WINDOW
            ================================================== */}

            <section className="wa-chat-window">
              <div className="wa-chat-header">
                <div className="wa-contact">
                  <img
                    src={chats[0].avatar}
                    alt="Hoàng Nam"
                  />

                  <div>
                    <h2>Hoàng Nam</h2>
                    <span>Active now</span>
                  </div>
                </div>

                <div className="wa-chat-actions">
                  <button type="button">
                    <Search size={19} />
                  </button>

                  <button type="button">
                    <MoreVertical size={20} />
                  </button>
                </div>
              </div>

              <div className="wa-messages">
                <div className="wa-today">
                  TODAY
                </div>

                <div className="wa-encryption">
                  <Lock size={10} />

                  <span>
                    Messages and calls are end-to-end
                    encrypted. No one outside of this
                    chat, not even WhatsApp, can read or
                    listen to them.
                  </span>
                </div>

                {messages.map((item) => (
                  <div
                    key={item.id}
                    className={
                      item.type === "received"
                        ? "wa-message-row received"
                        : "wa-message-row sent"
                    }
                  >
                    <div
                      className={
                        item.type === "received"
                          ? "wa-bubble received"
                          : "wa-bubble sent"
                      }
                    >
                      <p>{item.text}</p>

                      <div className="wa-message-meta">
                        <span>{item.time}</span>

                        {item.type === "sent" && (
                          <CheckCheck size={13} />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* INPUT */}

              <div className="wa-input-area">
                <button type="button">
                  <Smile size={21} />
                </button>

                <button type="button">
                  <Paperclip size={20} />
                </button>

                <div className="wa-input">
                  <input
                    type="text"
                    value={message}
                    onChange={(event) =>
                      setMessage(event.target.value)
                    }
                    onKeyDown={handleMessageKeyDown}
                    placeholder="Type a message"
                  />
                </div>

                <button
                  type="button"
                  className="wa-send"
                  onClick={sendMessage}
                >
                  <Send size={20} />
                </button>
              </div>
            </section>
          </div>
        </main>

        {/* =====================================================
            RIGHT COMMUNICATION PANEL
        ====================================================== */}

        <aside
          className={
            rightCollapsed
              ? "wa-right-panel collapsed"
              : "wa-right-panel"
          }
        >
          <div className="wa-right-toggle">
            <button
              type="button"
              onClick={() =>
                setRightCollapsed(
                  (current) => !current
                )
              }
            >
              {rightCollapsed ? (
                <ChevronRight size={18} />
              ) : (
                <ChevronLeft size={18} />
              )}
            </button>
          </div>

          <div className="wa-channel-list">
            {/* Thông tin */}

            <button
              type="button"
              className="wa-channel"
              onClick={() =>
                navigate("/simulations/customer-info")
              }
            >
              <span className="wa-channel-icon">
                <Info size={20} />
              </span>

              <span>Thông tin</span>
            </button>

            {/* Gmail */}

            <button
              type="button"
              className="wa-channel"
              onClick={() =>
                navigate("/simulations/gmail")
              }
            >
              <span className="wa-channel-icon gmail">
                G
              </span>

              <span>Gmail</span>
            </button>

            {/* WeChat */}

            <button
              type="button"
              className="wa-channel"
            >
              <span className="wa-channel-icon wechat">
                W
              </span>

              <span>WeChat</span>
            </button>

            {/* WhatsApp */}

            <button
              type="button"
              className="wa-channel active"
            >
              <span className="wa-channel-icon whatsapp">
                W

                <b>1</b>
              </span>

              <span>WhatsApp</span>
            </button>

            {/* Zalo */}

            <button
              type="button"
              className="wa-channel"
              onClick={() =>
                navigate("/simulations/zalo-chat")
              }
            >
              <span className="wa-channel-icon zalo">
                Z
              </span>

              <span>Zalo</span>
            </button>
          </div>
        </aside>
      </div>

      {/* =====================================================
          SPEED MODAL
      ====================================================== */}

      {showSpeedModal && (
        <div className="wa-speed-modal">
          <div className="wa-modal-backdrop" />

          <div className="wa-modal">
            <button
              type="button"
              className="wa-modal-close"
              onClick={cancelSpeedChange}
            >
              <X size={18} />
            </button>

            <h3>
              Xác nhận thay đổi tốc độ
            </h3>

            <p>
              Bạn đang chuẩn bị thay đổi tốc độ mô phỏng
              sang{" "}
              <strong>{pendingSpeed}</strong>.
              Thời gian trong kịch bản sẽ trôi nhanh hơn.
              Bạn có muốn tiếp tục?
            </p>

            <div className="wa-modal-actions">
              <button
                type="button"
                onClick={cancelSpeedChange}
              >
                Hủy
              </button>

              <button
                type="button"
                onClick={confirmSpeedChange}
              >
                Đồng ý
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}