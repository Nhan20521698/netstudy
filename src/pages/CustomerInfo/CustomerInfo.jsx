import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Bell,
  Bookmark,
  ChevronDown,
  ChevronRight,
  Globe2,
  Heart,
  Info,
  MessageCircle,
  MoreHorizontal,
  Paperclip,
  Send,
  Share2,
  Users,
  X,
  Zap,
} from "lucide-react";

import "./CustomerInfo.css";

export default function CustomerInfo() {
  const navigate = useNavigate();

  const [speed, setSpeed] = useState("1X");
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSpeedModal, setShowSpeedModal] = useState(false);
  const [pendingSpeed, setPendingSpeed] = useState("1X");
  const [comment, setComment] = useState("");
  const [sentComments, setSentComments] = useState([]);

  const notifications = [
    {
      title: "Lô hàng mới đã cập nhật",
      text: "Lịch trình tàu cho lô hàng Hamburg đã được cập nhật trong hệ thống.",
      time: "10 phút trước",
    },
    {
      title: "Bài tập thực hành 2 đã hoàn thành",
      text: "Bạn đã hoàn thành xuất sắc phần mô phỏng kịch bản vận chuyển.",
      time: "1 giờ trước",
    },
    {
      title: "Thông báo từ giảng viên",
      text: "Chào Nam, hãy chú ý kiểm tra kỹ phần phí local charge nhé.",
      time: "Hôm qua",
    },
    {
      title: "Cập nhật tài liệu Logistics v2.4",
      text: "Giáo trình và biểu phí vận tải đường biển quốc tế đã được bổ sung vào học phần.",
      time: "2 ngày trước",
    },
    {
      title: "Chào mừng đến với NetStudy",
      text: "Bạn đã đăng nhập thành công vào hệ thống mô phỏng thực hành tương tác trực tuyến.",
      time: "3 ngày trước",
    },
  ];

  const comments = [
    {
      name: "Hoàng Nam",
      avatar: "HN",
      text:
        "Dạ chào chị Vân, tuyến HCM - Hamburg bên em đi direct service hãng Hapag-Lloyd thời gian transit time 26-28 ngày, giá cước cạnh tranh đợt này. Em đã gửi bảng chào giá chi tiết và schedule tàu rời cảng ngày 08/06 qua Gmail/Zalo chị check giúp em nhé!",
      likes: 4,
      time: "1 giờ",
    },
    {
      name: "Minh Quân",
      avatar: "MQ",
      text:
        "Chào chị Vân, bên em có sẵn slot đi Hamburg qua hãng CMA/COSCO bao gồm free time 14 ngày Dem/Det theo đúng yêu cầu bên mình ạ. Em xin phép inbox kết bạn qua Zalo để tư vấn kỹ phần phụ phí local charge nhé!",
      likes: 2,
      time: "45 phút",
    },
  ];

  const sendComment = () => {
    const value = comment.trim();

    if (!value) return;

    setSentComments((current) => [
      ...current,
      {
        name: "Alex Johnson",
        avatar: "AJ",
        text: value,
        time: "vừa xong",
      },
    ]);

    setComment("");
  };

  const changeSpeed = (value) => {
    if (value === speed) return;

    setPendingSpeed(value);
    setShowSpeedModal(true);
  };

  const confirmSpeed = () => {
    setSpeed(pendingSpeed);
    setShowSpeedModal(false);
  };

  return (
    <div className="ci-page">
      {/* TOP SIMULATION BAR */}
      <div className="ci-simulation-bar">
        <button
          type="button"
          className="ci-back-button"
          onClick={() => navigate("/learning/module")}
        >
          <ArrowLeft size={18} />
          <span>Quay lại học tập</span>
        </button>

        <div className="ci-simulation-center">
          <div className="ci-clock">
            <span className="ci-clock-icon">◷</span>
            <strong>14:30:05</strong>
            <span>|</span>
            <strong>24/05/2024</strong>
          </div>

          <div className="ci-speed-control">
            {["1X", "2X", "3X", "5X"].map((item) => (
              <button
                key={item}
                type="button"
                className={speed === item ? "active" : ""}
                onClick={() => changeSpeed(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="ci-notification-button"
          onClick={() => setShowNotifications((value) => !value)}
        >
          <Bell size={21} />
          <span className="ci-notification-dot">5</span>
        </button>

        {showNotifications && (
          <div className="ci-notification-panel">
            <div className="ci-notification-header">
              <strong>Thông báo</strong>
              <button
                type="button"
                onClick={() => setShowNotifications(false)}
              >
                <X size={17} />
              </button>
            </div>

            <button className="ci-read-all" type="button">
              Đánh dấu tất cả đã đọc
            </button>

            {notifications.map((item) => (
              <div className="ci-notification-item" key={item.title}>
                <div className="ci-notification-icon">
                  <Bell size={15} />
                </div>

                <div>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                  <span>{item.time}</span>
                </div>
              </div>
            ))}

            <button className="ci-all-notifications" type="button">
              Xem tất cả thông báo
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>

      {/* GROUP HEADER */}
      <div className="ci-group-header">
        <div className="ci-group-main">
          <div className="ci-group-logo">
            <Users size={29} />
          </div>

          <div>
            <h1>
              CỘNG ĐỒNG LOGISTICS & FORWARDER VIỆT NAM
              <span> (EXIM & FREIGHT)</span>
            </h1>

            <div className="ci-group-meta">
              <Globe2 size={13} />
              <span>Nhóm công khai</span>
              <span>•</span>
              <span>128.5K thành viên</span>
            </div>
          </div>
        </div>

        <button type="button" className="ci-group-arrow">
          <ChevronRight size={21} />
        </button>
      </div>

      {/* MAIN */}
      <div className="ci-main">
        <div className="ci-content">
          {/* POST */}
          <article className="ci-post-card">
            <div className="ci-post-header">
              <div className="ci-user">
                <div className="ci-avatar ci-avatar-image">TV</div>

                <div>
                  <strong>Thu Vân</strong>

                  <div className="ci-user-meta">
                    <span>2 giờ trước</span>
                    <span>•</span>
                    <Globe2 size={12} />
                  </div>
                </div>
              </div>

              <div className="ci-post-actions">
                <button type="button">
                  <Bookmark size={18} />
                </button>

                <button type="button">
                  <MoreHorizontal size={19} />
                </button>
              </div>
            </div>

            <div className="ci-post-body">
              <p>Chào mọi người trong group ạ!</p>

              <p>
                Bên em chuẩn bị xuất 2 cont 40'HC hạt điều và tiêu đen đóng bao
                từ Cát Lái (Hồ Chí Minh) đi Hamburg (Đức), hàng dự kiến sẵn
                sàng ngày 05/06 tới.
              </p>

              <p>
                Cần tìm hãng tàu / quý anh chị Forwarder có giá cước tốt và
                lịch tàu direct/transit time đẹp trong tháng 6 này báo giá giúp
                em với ạ. Yêu cầu xin free time Dem/Det tối thiểu 14 ngày tại
                cảng đến giúp em nhé.
              </p>

              <p>
                Anh chị nào làm tuyến này inbox hoặc để lại thông tin em chủ
                động liên hệ lại nha. Em cảm ơn nhiều ạ!
              </p>
            </div>

            <div className="ci-post-stats">
              <div className="ci-reaction-count">
                <span className="ci-like-dot">👍</span>
                <span className="ci-love-dot">♥</span>
                <span>34 người quan tâm</span>
              </div>

              <div>
                <span>18 bình luận</span>
                <span>7 lượt chia sẻ</span>
              </div>
            </div>

            <div className="ci-post-buttons">
              <button type="button">
                <Heart size={17} />
                <span>Thích</span>
              </button>

              <button type="button" className="active">
                <MessageCircle size={17} />
                <span>Bình luận</span>
              </button>

              <button type="button">
                <Share2 size={17} />
                <span>Chia sẻ</span>
              </button>
            </div>
          </article>

          {/* COMMENTS */}
          <section className="ci-comments-card">
            <div className="ci-comments-top">
              <button type="button" className="ci-sort-button">
                Phù hợp nhất
                <ChevronDown size={14} />
              </button>

              <span className="ci-live-comments">
                <i />
                18 bình luận trực tiếp
              </span>
            </div>

            {/* COMMENT INPUT */}
            <div className="ci-comment-input-row">
              <div className="ci-avatar ci-avatar-blue">AJ</div>

              <div className="ci-input-wrapper">
                <input
                  value={comment}
                  onChange={(event) => setComment(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      sendComment();
                    }
                  }}
                  placeholder="Viết bình luận công khai dưới tên Alex Johnson..."
                />

                <button type="button" onClick={sendComment}>
                  <Send size={19} />
                </button>
              </div>
            </div>

            <div className="ci-enter-hint">
              Nhấn Enter để gửi
            </div>

            {/* EXISTING COMMENTS */}
            <div className="ci-comment-list">
              {comments.map((item) => (
                <div className="ci-comment" key={item.name}>
                  <div className="ci-avatar ci-comment-avatar">
                    {item.avatar}
                  </div>

                  <div className="ci-comment-content">
                    <div className="ci-comment-bubble">
                      <strong>{item.name}</strong>
                      <p>{item.text}</p>
                    </div>

                    <div className="ci-comment-actions">
                      <button type="button">Thích</button>
                      <button type="button">Phản hồi</button>
                      <button type="button">Chia sẻ</button>
                      <span>{item.time}</span>

                      {item.likes && (
                        <span className="ci-comment-likes">
                          👍 {item.likes}
                        </span>
                      )}
                    </div>

                    {item.name === "Hoàng Nam" && (
                      <div className="ci-reply">
                        <div className="ci-avatar ci-reply-avatar">
                          TV
                        </div>

                        <div>
                          <div className="ci-reply-bubble">
                            <strong>Thu Vân</strong>
                            <span className="ci-author-tag">
                              Tác giả
                            </span>

                            <p>
                              Dạ em đã nhận được mail rồi anh Nam nhé, đang so
                              sánh lịch transit với sếp ạ.
                            </p>
                          </div>

                          <div className="ci-comment-actions">
                            <button type="button">Thích</button>
                            <button type="button">Phản hồi</button>
                            <span>35 phút</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {sentComments.map((item, index) => (
                <div className="ci-comment" key={`${item.time}-${index}`}>
                  <div className="ci-avatar ci-avatar-blue">
                    {item.avatar}
                  </div>

                  <div className="ci-comment-content">
                    <div className="ci-comment-bubble">
                      <strong>{item.name}</strong>
                      <p>{item.text}</p>
                    </div>

                    <div className="ci-comment-actions">
                      <button type="button">Thích</button>
                      <button type="button">Phản hồi</button>
                      <button type="button">Chia sẻ</button>
                      <span>{item.time}</span>
                    </div>
                  </div>
                </div>
              ))}

              <button type="button" className="ci-more-comments">
                <ChevronDown size={16} />
                Xem thêm 15 bình luận khác...
              </button>
            </div>
          </section>
        </div>

        {/* RIGHT CHANNEL SIDEBAR */}
        <aside className="ci-channel-sidebar">
          <button type="button" className="ci-sidebar-collapse">
            <ChevronRight size={21} />
          </button>

          <button type="button" className="ci-channel active">
            <span className="ci-channel-icon">
              <Info size={20} />
            </span>
            <strong>Thông tin</strong>
          </button>

          <button
            type="button"
            className="ci-channel"
            onClick={() => navigate("/simulations/gmail")}
          >
            <span className="ci-channel-icon ci-gmail">M</span>
            <span>Gmail</span>
          </button>

          <button
            type="button"
            className="ci-channel"
          >
            <span className="ci-channel-icon ci-wechat">
              <MessageCircle size={19} />
            </span>
            <span>WeChat</span>
          </button>

          <button
            type="button"
            className="ci-channel"
          >
            <span className="ci-channel-icon ci-whatsapp">
              <MessageCircle size={19} />
            </span>
            <span>WhatsApp</span>
            <span className="ci-channel-badge">1</span>
          </button>

          <button
            type="button"
            className="ci-channel"
            onClick={() => navigate("/simulations/zalo-chat")}
          >
            <span className="ci-channel-icon ci-zalo">Z</span>
            <span>Zalo</span>
          </button>
        </aside>
      </div>

      {/* SPEED MODAL */}
      {showSpeedModal && (
        <div className="ci-modal-overlay">
          <div className="ci-speed-modal">
            <div className="ci-speed-modal-icon">
              <Zap size={24} />
            </div>

            <h2>Xác nhận thay đổi tốc độ</h2>

            <p>
              Bạn đang chuẩn bị thay đổi tốc độ mô phỏng sang{" "}
              <strong>{pendingSpeed}</strong>. Thời gian trong kịch bản sẽ
              trôi nhanh hơn. Bạn có muốn tiếp tục?
            </p>

            <div className="ci-modal-actions">
              <button
                type="button"
                className="ci-modal-cancel"
                onClick={() => setShowSpeedModal(false)}
              >
                Hủy
              </button>

              <button
                type="button"
                className="ci-modal-confirm"
                onClick={confirmSpeed}
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