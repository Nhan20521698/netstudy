import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Archive,
  ArrowLeft,
  ArrowRight,
  Bell,
  CheckSquare,
  ChevronLeft,
  ChevronRight,
  Clock3,
  FileText,
  Forward,
  Image,
  Inbox,
  Link,
  Mail,
  MailOpen,
  Menu,
  MoreVertical,
  Paperclip,
  Printer,
  RefreshCw,
  Reply,
  Search,
  Send,
  Settings,
  Star,
  Trash2,
  X,
  Zap,
} from "lucide-react";

import "./GmailSimulation.css";

const emails = [
  {
    id: 1,
    sender: "Hapag-Lloyd Logistics",
    subject: "Xác nhận Đặt chỗ - HL12345678",
    preview:
      "Chào Nam, chúng tôi xác nhận việc đặt chỗ cho lô hàng Hamburg của bạn...",
    time: "10:45 AM",
    unread: true,
    avatar: "H",
    senderEmail: "booking@hapag-lloyd.com",
  },
  {
    id: 2,
    sender: "Maersk Line",
    subject: "Chứng từ Vận chuyển: Bill of Lading",
    preview:
      "Vui lòng kiểm tra bản nháp vận đơn đính kèm cho chuyến tàu tuần tới...",
    time: "09:12 AM",
    unread: true,
    avatar: "M",
    senderEmail: "documentation@maersk.com",
  },
  {
    id: 3,
    sender: "Cảng Cát Lái",
    subject: "Thông báo phí Local Charge 2024",
    preview:
      "Cập nhật biểu phí dịch vụ tại cảng áp dụng từ tháng 6 năm 2024...",
    time: "Hôm qua",
    unread: false,
    avatar: "C",
    senderEmail: "support@catlai-port.vn",
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
    title: "Hạn nộp chứng từ Bill of Lading",
    text: "Thời hạn gửi bản nháp B/L cho chuyến tàu Hamburg kết thúc lúc 17:00 hôm nay.",
    time: "2 ngày trước",
    unread: false,
  },
  {
    title: "Cập nhật hệ thống kho bãi",
    text: "Cảng Cát Lái thông báo bảo trì cổng điện tử e-Port vào cuối tuần.",
    time: "3 ngày trước",
    unread: false,
  },
];

export default function GmailSimulation() {
  const navigate = useNavigate();

  const [activeEmail, setActiveEmail] = useState(null);
  const [composeOpen, setComposeOpen] = useState(false);
  const [showCc, setShowCc] = useState(false);
  const [showBcc, setShowBcc] = useState(false);

  const [speed, setSpeed] = useState("1X");
  const [pendingSpeed, setPendingSpeed] = useState(null);
  const [showSpeedModal, setShowSpeedModal] = useState(false);

  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [notificationList, setNotificationList] =
    useState(notifications);

  const [rightCollapsed, setRightCollapsed] = useState(false);

  const [selectedSidebar, setSelectedSidebar] = useState("inbox");

  const [recipient, setRecipient] = useState("");
  const [cc, setCc] = useState("");
  const [bcc, setBcc] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const openEmail = (email) => {
    setActiveEmail(email);
  };

  const closeEmail = () => {
    setActiveEmail(null);
  };

  const requestSpeedChange = (value) => {
    if (value === speed) return;

    setPendingSpeed(value);
    setShowSpeedModal(true);
  };

  const confirmSpeedChange = () => {
    if (pendingSpeed) {
      setSpeed(pendingSpeed);
    }

    setPendingSpeed(null);
    setShowSpeedModal(false);
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

  const markAllNotificationsRead = () => {
    setNotificationList((current) =>
      current.map((item) => ({
        ...item,
        unread: false,
      }))
    );
  };

  const unreadNotifications = notificationList.filter(
    (item) => item.unread
  ).length;

  const sendEmail = () => {
    setComposeOpen(false);

    setRecipient("");
    setCc("");
    setBcc("");
    setSubject("");
    setMessage("");
  };

  const currentEmail = activeEmail || emails[0];

  return (
    <div className="gmail-page">
      {/* =====================================================
          SIMULATION TOP BAR
      ====================================================== */}

      <header className="gmail-simbar">
        <button
          type="button"
          className="gmail-back"
          onClick={() => navigate("/learning/module")}
        >
          <ArrowLeft size={18} />
          <span>Quay lại học tập</span>
        </button>

        <div className="gmail-sim-center">
          <div className="gmail-clock">
            <Clock3 size={14} />
            <strong>14:30:05</strong>
            <span>|</span>
            <strong>24/05/2024</strong>
          </div>

          <div className="gmail-speed">
            {["1X", "2X", "3X", "5X"].map((item) => (
              <button
                key={item}
                type="button"
                className={
                  speed === item ? "gmail-speed-active" : ""
                }
                onClick={() => requestSpeedChange(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="gmail-top-actions">
          <button
            type="button"
            className="gmail-bell"
            onClick={() =>
              setNotificationsOpen((value) => !value)
            }
          >
            <Bell size={21} />

            {unreadNotifications > 0 && (
              <span>{unreadNotifications}</span>
            )}
          </button>

          {notificationsOpen && (
            <div className="gmail-notification">
              <div className="gmail-notification-title">
                <strong>Thông báo</strong>

                <button
                  type="button"
                  onClick={() => setNotificationsOpen(false)}
                >
                  <X size={16} />
                </button>
              </div>

              <div className="gmail-notification-list">
                {notificationList.map((item, index) => (
                  <button
                    type="button"
                    className={
                      item.unread
                        ? "gmail-notification-item unread"
                        : "gmail-notification-item"
                    }
                    key={item.title}
                    onClick={() =>
                      markNotificationRead(index)
                    }
                  >
                    <div>
                      <strong>{item.title}</strong>
                      <p>{item.text}</p>
                      <span>{item.time}</span>
                    </div>

                    {item.unread && (
                      <i className="gmail-unread-dot" />
                    )}
                  </button>
                ))}
              </div>

              <button
                type="button"
                className="gmail-notification-all"
                onClick={markAllNotificationsRead}
              >
                Đánh dấu tất cả đã đọc
              </button>
            </div>
          )}
        </div>
      </header>

      {/* =====================================================
          GMAIL AREA
      ====================================================== */}

      <main className="gmail-workspace">
        {/* LEFT GMAIL SIDEBAR */}

        <aside className="gmail-left-sidebar">
          <div className="gmail-compose-button-wrap">
            <button
              type="button"
              className="gmail-compose-button"
              onClick={() => setComposeOpen(true)}
            >
              <FileText size={23} />
              <span>Soạn thư</span>
            </button>
          </div>

          <nav className="gmail-mail-nav">
            <button
              type="button"
              className={
                selectedSidebar === "inbox"
                  ? "gmail-nav-item active"
                  : "gmail-nav-item"
              }
              onClick={() => setSelectedSidebar("inbox")}
            >
              <Inbox size={20} />
              <span>Hộp thư đến</span>
              <strong>12</strong>
            </button>

            <button
              type="button"
              className={
                selectedSidebar === "starred"
                  ? "gmail-nav-item active"
                  : "gmail-nav-item"
              }
              onClick={() => setSelectedSidebar("starred")}
            >
              <Star size={20} />
              <span>Có gắn dấu sao</span>
            </button>

            <button
              type="button"
              className={
                selectedSidebar === "snoozed"
                  ? "gmail-nav-item active"
                  : "gmail-nav-item"
              }
              onClick={() => setSelectedSidebar("snoozed")}
            >
              <Clock3 size={20} />
              <span>Đã tạm ẩn</span>
            </button>

            <button
              type="button"
              className={
                selectedSidebar === "sent"
                  ? "gmail-nav-item active"
                  : "gmail-nav-item"
              }
              onClick={() => setSelectedSidebar("sent")}
            >
              <Send size={20} />
              <span>Đã gửi</span>
            </button>

            <button
              type="button"
              className={
                selectedSidebar === "drafts"
                  ? "gmail-nav-item active"
                  : "gmail-nav-item"
              }
              onClick={() => setSelectedSidebar("drafts")}
            >
              <FileText size={20} />
              <span>Thư nháp</span>
            </button>
          </nav>
        </aside>

        {/* MAIN EMAIL */}

        <section className="gmail-content">
          {!activeEmail ? (
            <>
              {/* TOOLBAR */}

              <div className="gmail-toolbar">
                <div className="gmail-toolbar-left">
                  <button type="button">
                    <CheckSquare size={19} />
                  </button>

                  <button type="button">
                    <RefreshCw size={18} />
                  </button>

                  <button type="button">
                    <MoreVertical size={18} />
                  </button>
                </div>

                <div className="gmail-pagination">
                  <span>1-50 trong 124</span>

                  <button type="button">
                    <ChevronLeft size={18} />
                  </button>

                  <button type="button">
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>

              {/* EMAIL LIST */}

              <div className="gmail-email-list">
                {emails.map((email) => (
                  <button
                    type="button"
                    key={email.id}
                    className={
                      email.unread
                        ? "gmail-email-row unread"
                        : "gmail-email-row"
                    }
                    onClick={() => openEmail(email)}
                  >
                    <span
                      className="gmail-checkbox"
                      onClick={(event) =>
                        event.stopPropagation()
                      }
                    >
                      <CheckSquare size={19} />
                    </span>

                    <span
                      className="gmail-star"
                      onClick={(event) =>
                        event.stopPropagation()
                      }
                    >
                      <Star size={19} />
                    </span>

                    <strong className="gmail-sender">
                      {email.sender}
                    </strong>

                    <span className="gmail-subject">
                      <strong>{email.subject}</strong>

                      <span>
                        {" "}
                        - {email.preview}
                      </span>
                    </span>

                    <strong className="gmail-email-time">
                      {email.time}
                    </strong>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <EmailDetail
              email={currentEmail}
              onBack={closeEmail}
              onCompose={() => setComposeOpen(true)}
            />
          )}
        </section>

        {/* RIGHT COMMUNICATION PANEL */}

        <aside
          className={
            rightCollapsed
              ? "gmail-right-sidebar collapsed"
              : "gmail-right-sidebar"
          }
        >
          <div className="gmail-right-toggle">
            <button
              type="button"
              onClick={() =>
                setRightCollapsed((value) => !value)
              }
            >
              {rightCollapsed ? (
                <ChevronRight size={19} />
              ) : (
                <ChevronLeft size={19} />
              )}
            </button>
          </div>

          <div className="gmail-channel-list">
            <button
              type="button"
              className="gmail-channel"
              onClick={() =>
                navigate("/simulations/customer-info")
              }
            >
              <span className="gmail-channel-icon info">
                <Search size={18} />
              </span>

              <span>Thông tin</span>
            </button>

            <button
              type="button"
              className="gmail-channel active"
            >
              <span className="gmail-channel-icon gmail-logo">
                <Mail size={20} />
                {unreadNotifications > 0 && (
                  <b>1</b>
                )}
              </span>

              <span>Gmail</span>
            </button>

            <button
              type="button"
              className="gmail-channel"
            >
              <span className="gmail-channel-icon wechat">
                W
              </span>

              <span>WeChat</span>
            </button>

            <button
              type="button"
              className="gmail-channel"
            >
              <span className="gmail-channel-icon whatsapp">
                W
              </span>

              <span>WhatsApp</span>
            </button>

            <button
              type="button"
              className="gmail-channel"
              onClick={() =>
                navigate("/simulations/zalo-chat")
              }
            >
              <span className="gmail-channel-icon zalo">
                Z
              </span>

              <span>Zalo</span>
            </button>
          </div>
        </aside>
      </main>

      {/* =====================================================
          COMPOSE
      ====================================================== */}

      {composeOpen && (
        <div className="gmail-compose-window">
          <div className="gmail-compose-header">
            <span>Thư mới</span>

            <div>
              <button type="button">
                <Menu size={15} />
              </button>

              <button type="button">
                <Settings size={15} />
              </button>

              <button
                type="button"
                onClick={() => setComposeOpen(false)}
              >
                <X size={17} />
              </button>
            </div>
          </div>

          <div className="gmail-compose-body">
            <div className="gmail-compose-field">
              <span>Tới</span>

              <input
                value={recipient}
                onChange={(event) =>
                  setRecipient(event.target.value)
                }
              />

              <button
                type="button"
                onClick={() =>
                  setShowCc((value) => !value)
                }
              >
                Cc
              </button>

              <button
                type="button"
                onClick={() =>
                  setShowBcc((value) => !value)
                }
              >
                Bcc
              </button>
            </div>

            {showCc && (
              <div className="gmail-compose-field">
                <span>Cc</span>

                <input
                  value={cc}
                  onChange={(event) =>
                    setCc(event.target.value)
                  }
                />
              </div>
            )}

            {showBcc && (
              <div className="gmail-compose-field">
                <span>Bcc</span>

                <input
                  value={bcc}
                  onChange={(event) =>
                    setBcc(event.target.value)
                  }
                />
              </div>
            )}

            <div className="gmail-compose-subject">
              <input
                value={subject}
                onChange={(event) =>
                  setSubject(event.target.value)
                }
                placeholder="Chủ đề"
              />
            </div>

            <textarea
              value={message}
              onChange={(event) =>
                setMessage(event.target.value)
              }
            />
          </div>

          <div className="gmail-compose-footer">
            <div className="gmail-compose-footer-left">
              <button
                type="button"
                className="gmail-send-button"
                onClick={sendEmail}
              >
                Gửi
                <ChevronDown size={14} />
              </button>

              <button type="button">
                <FileText size={19} />
              </button>

              <button type="button">
                <Paperclip size={19} />
              </button>

              <button type="button">
                <Link size={19} />
              </button>

              <button type="button">
                <Image size={19} />
              </button>
            </div>

            <button
              type="button"
              onClick={() => setComposeOpen(false)}
            >
              <Trash2 size={19} />
            </button>
          </div>
        </div>
      )}

      {/* =====================================================
          SPEED MODAL
      ====================================================== */}

      {showSpeedModal && (
        <div className="gmail-speed-modal">
          <div className="gmail-speed-backdrop" />

          <div className="gmail-speed-dialog">
            <div className="gmail-speed-icon">
              <Zap size={22} />
            </div>

            <h3>Xác nhận thay đổi tốc độ</h3>

            <p>
              Bạn đang chuẩn bị thay đổi tốc độ mô phỏng
              sang <strong>{pendingSpeed}</strong>. Thời gian
              trong kịch bản sẽ trôi nhanh hơn. Bạn có muốn
              tiếp tục?
            </p>

            <div className="gmail-speed-actions">
              <button
                type="button"
                onClick={() => {
                  setShowSpeedModal(false);
                  setPendingSpeed(null);
                }}
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

function EmailDetail({ email, onBack, onCompose }) {
  return (
    <div className="gmail-detail">
      <div className="gmail-detail-toolbar">
        <div>
          <button type="button" onClick={onBack}>
            <ArrowLeft size={19} />
          </button>

          <button type="button">
            <Archive size={18} />
          </button>

          <button type="button">
            <MailOpen size={18} />
          </button>

          <button type="button">
            <Trash2 size={18} />
          </button>
        </div>

        <div>
          <button type="button">
            <Printer size={18} />
          </button>

          <button type="button">
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <div className="gmail-detail-scroll">
        <div className="gmail-detail-inner">
          <div className="gmail-detail-title">
            <h2>{email.subject}</h2>

            <div>
              <button type="button">
                <Printer size={17} />
              </button>

              <button type="button">
                <ArrowRight size={17} />
              </button>
            </div>
          </div>

          <div className="gmail-detail-sender">
            <div className="gmail-detail-avatar">
              {email.avatar}
            </div>

            <div>
              <div className="gmail-detail-sender-name">
                <strong>{email.sender}</strong>
                <span>
                  &lt;{email.senderEmail}&gt;
                </span>
              </div>

              <div className="gmail-to-me">
                tới tôi
              </div>
            </div>

            <div className="gmail-detail-time">
              <span>10:45 AM (2 giờ trước)</span>

              <button type="button">
                <Star size={18} />
              </button>

              <button
                type="button"
                onClick={onCompose}
              >
                <Reply size={18} />
              </button>

              <button type="button">
                <MoreVertical size={18} />
              </button>
            </div>
          </div>

          <div className="gmail-detail-body">
            <p>Kính gửi Quý Khách,</p>

            <p>
              Chúng tôi xin xác nhận việc đặt chỗ cho lô
              hàng của quý khách với các thông tin chi tiết
              như sau:
            </p>

            <ul>
              <li>
                <strong>Số Booking:</strong> HL12345678
              </li>

              <li>
                <strong>Tàu/Chuyến:</strong> HAPAG LLOYD
                EXPRESS V.024E
              </li>

              <li>
                <strong>Cảng Xếp Hàng (POL):</strong> Cát
                Lái, Hồ Chí Minh
              </li>

              <li>
                <strong>Cảng Dỡ Hàng (POD):</strong>{" "}
                Hamburg, Germany
              </li>

              <li>
                <strong>Ngày Tàu Chạy Dự Kiến (ETD):</strong>{" "}
                30/05/2024
              </li>

              <li>
                <strong>Loại Container:</strong> 1 x 40'HC
              </li>
            </ul>

            <p>
              Vui lòng kiểm tra kỹ các thông tin trên. Nếu
              có bất kỳ sai sót nào, xin vui lòng phản hồi
              lại email này trước 17:00 ngày 26/05/2024.
            </p>

            <p>
              Để lấy vỏ container, quý khách vui lòng xuất
              trình booking confirmation này tại bãi lấy
              rỗng (Depot) được chỉ định.
            </p>

            <p>Trân trọng,</p>

            <p>
              <strong>Đội ngũ Dịch vụ Khách hàng</strong>
            </p>

            <span>Hapag-Lloyd Vietnam</span>
          </div>

          <div className="gmail-attachment">
            <div className="gmail-pdf">
              PDF
            </div>

            <div>
              <strong>Booking_HL12345678.pdf</strong>
              <span>142 KB</span>
            </div>
          </div>

          <div className="gmail-detail-actions">
            <button
              type="button"
              onClick={onCompose}
            >
              <Reply size={17} />
              Trả lời
            </button>

            <button type="button">
              <Forward size={17} />
              Chuyển tiếp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}