import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Bell,
  Check,
  ChevronRight,
  Clock3,
  FileText,
  Image as ImageIcon,
  Info,
  MessageCircle,
  Paperclip,
  Phone,
  Plus,
  Search,
  Send,
  Smile,
  Users,
  Video,
  UserPlus,
  Zap,
  CheckCheck,
  Bold,
  CircleAlert,
  X,
} from "lucide-react";

import "./ZaloQuote.css";

const avatarMain =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDFwM5TGnF748ebtha4jdMPXHgPExlX8Cs0N5YhioJY4CIUSKkoAHCuMK59w7MuHYjRzzQNM6RAnVavS6FpaTWy0Rxw7h4pHRdDxqcgDCLf3QEXkoP5yCRaYg1xwyDP-g5Ie_SGterkq4epr99Iu7yYRT4FK_SR12FhQhsQUB8dSTESHQrEGT2eYrrppKbJ9r9yDTxSANMpY7wn7AsoJWuAi7W6WdumlsQpQCCj7WMcxv7DpOmSnpDc";

const scheduleImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCtuTGvBi-hoO2k-xkgpgeMtJs4lk17OqCFc2TvMD0DhTxZS_hI9f-_qViwT1Zsyf3Zrge-oOhg2dKQTYKPsH7u8sRTm_Hb6RYZiTH07lNvpc7B3USlm7jESskoe39Fs8zOU4OSGxx9pz2ejhDdszDE0Vp2xLmtRHqJxZa-X8dsdMQNBkp6y7hJnD-5wOQtCozEj3Zkpn0bKz_XXvLXfBdwxjgAmBHc206Udr4d8Mx8j29wPAI8Iysyg1czkZzzmaUXJg";

const channelIcons = {
  Gmail:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAhq2PipY3MzOMZU_K1RTJcZz6wl31Kog1esDE3uaW9W1wlCdqIK9gbTiQGTSxkaJ1WmnlMKNhAS3x9gRm0ppK0lsNUAyucWEkQd2OGNp3ZT3dzTShwlXoDd4BFD07AOBI81X4rMck9Jp47cnE1OnJQOsyW_VDtylEiW_sHMHJud_WE8NP2kxSrd_S3Ysx-k0Ow4sg43JwaJ4tObJOBYf2P5aFCMixMsYtWKEQeSY0-KGvjc7rn8HKph0UXXThPypnLSnYdCWFg93c9g",
  WeChat:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAdt7x0r7SEVwiatws7lIi_9w918CHnvK6sL2t5n8htj4_8Kv4_FYUi5lShUKlq2skzCFD7woSR7E51UkDwIDyB-YkZwIO8tfgrwQ6kKycr8SWrwUfWcbHaKF9ULLrdA4-sgZaRj8wIDAFvTAp_39VB3oDRrlrqHGgt3XGUOdwA-kc501fBOleO7Oan1ELXbWecyuPAhZIacZCP_Zl4knq-IDcuEH9L_fm3HT2Kot6pinyBg65xCVrEAQJXXxpA-S0XZl141WYh5jzXbA",
  WhatsApp:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAmw_Zp2MDuXowHmlLTFLeuRil3SYfu3LkjtwUJm02ikkPksrzuR5vK7FxFPjaOrgBX79kRhdvS5R56InyfiJ7I3SB6a-t9qLR-Pa0t-iKF0CkrnAJuZatGZfrfAxk8fnH_1L2GR12zdeCe-m4pVy0x6AG4g5ZW7UV_rT5lQ-bPxXjF7SejDmZgp0kC36sUO5i8HJOgrZpNA0Wx6qDMdPHxTTJERdAjBoyc3LbSc8fpoV5QkG1wdDFVjxdYF0NmEp7lnw",
  Zalo:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA-v2Fy4F1_eWKwxYwKl0z_TzjToEJNiXNTulbJjRrojPhXeDY-jiv11cSIt0PlSq39kWJqeVmwfF15cvHI07qQlSkNAwh1DHQvFHiRVu2Qjlbuim6lEtCL_mXl636VJXEsRknU590s_PMLD0gPI3xifZDDqJR9jN4eSL0N0NVFYb9y7W7EUObnPrBxSHQyqU6JTIaaqmGO8dNpp2sCFtU39GfQIbYPOrt97D9SSimYx7CNLIi9btXLjMBajoxmbgwJeQ",
};

const conversations = [
  {
    name: "Thu Vân (Shipper Cashew)",
    preview: "Còn mấy phí local charge thì phải xem...",
    time: "Vừa xong",
    avatar: avatarMain,
    active: true,
  },
  {
    name: "Khách hàng RFQ Hamburg",
    preview: "2x40'HC VP Vuphuong",
    time: "17/08",
  },
  {
    name: "Lê Quang Minh",
    preview: "Cảm ơn ad nhé, tàu cập cảng an toàn rồi",
    time: "17/08",
  },
  {
    name: "Quốc Khải",
    preview: "Vậy giờ cần chuẩn bị chứng từ MSDS gì nữa á?",
    time: "15/08",
  },
  {
    name: "Võ Văn Duy",
    preview: "You: Chào anh, em gửi bảng lịch tàu tuyến Châu Âu",
    time: "15/08",
  },
];

const notifications = [
  ["Lô hàng mới đã cập nhật", "Lịch trình tàu cho lô hàng Hamburg đã được cập nhật trong hệ thống.", "10 phút trước"],
  ["Bài tập thực hành 2 đã hoàn thành", "Bạn đã hoàn thành xuất sắc phần mô phỏng kịch bản vận chuyển.", "1 giờ trước"],
  ["Thông báo từ giảng viên", "Chào Nam, hãy chú ý kiểm tra kỹ phần phí local charge nhé.", "Hôm qua"],
  ["Cập nhật tài liệu Logistics v2.4", "Giáo trình và biểu phí vận tải đường biển quốc tế đã được bổ sung vào học phần.", "2 ngày trước"],
  ["Chào mừng đến với NetStudy", "Bạn đã đăng nhập thành công vào hệ thống mô phỏng thực hành tương tác trực tuyến.", "3 ngày trước"],
];

export default function ZaloQuote() {
  const navigate = useNavigate();
  const [speed, setSpeed] = useState("1X");
  const [showSpeedModal, setShowSpeedModal] = useState(false);
  const [pendingSpeed, setPendingSpeed] = useState("1X");
  const [showNotifications, setShowNotifications] = useState(false);
  const [message, setMessage] = useState("");
  const [sentMessages, setSentMessages] = useState([]);
  const [showSchedule, setShowSchedule] = useState(false);

  const requestSpeed = (nextSpeed) => {
    if (nextSpeed === speed) return;
    setPendingSpeed(nextSpeed);
    setShowSpeedModal(true);
  };

  const confirmSpeed = () => {
    setSpeed(pendingSpeed);
    setShowSpeedModal(false);
  };

  const sendMessage = () => {
    const value = message.trim();
    if (!value) return;
    setSentMessages((items) => [...items, value]);
    setMessage("");
  };

  const onComposerKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="zq-page">
      <header className="zq-topbar">
        <button className="zq-back" onClick={() => navigate("/learning/module")}>
          <ArrowLeft size={19} />
          <span>Quay lại học tập</span>
        </button>

        <div className="zq-top-center">
          <div className="zq-clock">
            <Clock3 size={15} />
            <span>14:30:05 | 24/05/2024</span>
          </div>

          <div className="zq-speed">
            {["1X", "2X", "3X", "5X"].map((item) => (
              <button
                key={item}
                className={speed === item ? "active" : ""}
                onClick={() => requestSpeed(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="zq-notification-wrap">
          <button
            className="zq-icon-btn"
            onClick={() => setShowNotifications((v) => !v)}
          >
            <Bell size={22} />
            <span className="zq-notification-dot" />
          </button>

          {showNotifications && (
            <div className="zq-notification-dropdown">
              <div className="zq-notification-head">
                <strong>Thông báo (5)</strong>
                <button>Đánh dấu tất cả đã đọc</button>
              </div>
              {notifications.map(([title, body, time]) => (
                <div className="zq-notification-item" key={title}>
                  <div className="zq-notification-title">
                    <strong>{title}</strong>
                    <span />
                  </div>
                  <p>{body}</p>
                  <small>{time}</small>
                </div>
              ))}
              <button className="zq-all-notifications">Xem tất cả thông báo</button>
            </div>
          )}
        </div>
      </header>

      <div className="zq-workspace">
        <aside className="zq-left-rail">
          <div className="zq-logo">AJ</div>
          <button className="active"><MessageCircle size={21} /></button>
          <button><Users size={21} /></button>
          <button><FileText size={21} /></button>
          <button><Zap size={21} /></button>
          <button><Plus size={21} /></button>
        </aside>

        <aside className="zq-conversations">
          <div className="zq-conv-head">
            <div className="zq-conv-brand">
              <strong>AJ</strong>
              <span>chat</span>
            </div>
            <span className="zq-contact-count">3 contacts</span>
          </div>

          <div className="zq-conv-tools">
            <button><Search size={17} /></button>
            <button><UserPlus size={17} /></button>
            <button><Users size={17} /></button>
          </div>

          <div className="zq-tabs">
            <button className="active">Tất cả</button>
            <button>Chưa đọc <b>2</b></button>
            <button>Phân loại <span>⌄</span></button>
          </div>

          <div className="zq-conv-list">
            {conversations.map((item) => (
              <button
                className={`zq-conversation ${item.active ? "active" : ""}`}
                key={item.name}
              >
                {item.avatar ? (
                  <img src={item.avatar} alt={item.name} />
                ) : (
                  <div className="zq-avatar-placeholder">
                    {item.name.charAt(0)}
                  </div>
                )}
                <div className="zq-conversation-main">
                  <div className="zq-conversation-line">
                    <strong>{item.name}</strong>
                    <small>{item.time}</small>
                  </div>
                  <p>{item.preview}</p>
                </div>
              </button>
            ))}
          </div>
        </aside>

        <main className="zq-chat">
          <div className="zq-chat-header">
            <div className="zq-person">
              <img src={avatarMain} alt="Thu Vân" />
              <div>
                <div className="zq-person-name">
                  <strong>Thu Vân</strong>
                  <span>STRANGER</span>
                </div>
                <p>Nhóm chung: Cộng đồng Logistics Việt Nam</p>
              </div>
            </div>

            <div className="zq-chat-actions">
              <button><Search size={18} /></button>
              <button><Phone size={18} /></button>
              <button><Video size={18} /></button>
              <button><Info size={18} /></button>
            </div>
          </div>

          <div className="zq-friend-bar">
            <div>
              <strong>Đang trực tuyến</strong>
              <span>• Shipper hạt điều & tiêu đen xuất khẩu Hamburg</span>
            </div>
            <button><UserPlus size={16} /> Kết bạn</button>
          </div>

          <div className="zq-chat-content">
            <div className="zq-scenario">
              <CircleAlert size={16} />
              <div>
                <strong>Kịch bản thực hành:</strong>
                <span>
                  Khách hàng yêu cầu kiểm tra lịch tàu KMTC/Hapag đi Hamburg xuất phát đầu tháng 6 và báo trọn gói cước Ocean Freight + Local Charges Cát Lái kèm 14 ngày Dem/Det free time.
                </span>
              </div>
              <b>Bước 2/3</b>
            </div>

            <div className="zq-day">Hôm nay</div>

            <div className="zq-message incoming">
              <img src={avatarMain} alt="Thu Vân" />
              <div>
                <small>14:15</small>
                <div className="zq-bubble">
                  <strong>Thu Vân</strong>
                  <p>
                    Dạ chào em Alex, chị thấy em có bình luận tư vấn cước trên bài đăng nhóm Logistics. Lô hàng của chị là 2x40'HC hạt điều và tiêu đen đóng bao đi từ Cát Lái đến cảng Hamburg (Đức), hàng dự kiến xong ngày 05/06 tới nha.
                  </p>
                </div>
              </div>
            </div>

            <div className="zq-message incoming">
              <img src={avatarMain} alt="Thu Vân" />
              <div>
                <div className="zq-bubble">
                  <p>
                    Em check lịch tàu trên website hãng tàu trước khi hỏi báo giá nè, check xem tàu còn lịch ngày mấy phù hợp rồi hỏi giá ngày đó, những ngày màu đỏ là hết chỗ rồi nên hông đặt được:
                  </p>
                  <button
                    className="zq-schedule-card"
                    onClick={() => setShowSchedule(true)}
                  >
                    <img src={scheduleImage} alt="Lịch tàu KMTC / Carrier Schedule" />
                    <span>
                      <Search size={15} />
                      Bấm để xem chi tiết lịch tàu
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <div className="zq-message incoming">
              <img src={avatarMain} alt="Thu Vân" />
              <div>
                <div className="zq-bubble">
                  <p>
                    Chị thấy các chuyến ngày 16/06 (INCHEON VOYAGER), 19/06, 23/06 và 25/06 đều màu đỏ (đã full booking). Chị cần chuyến ETD quanh ngày 08/06 - 12/06 để kịp giao khách.
                  </p>
                </div>
              </div>
            </div>

            <div className="zq-time">14:20</div>

            <div className="zq-message incoming">
              <img src={avatarMain} alt="Thu Vân" />
              <div>
                <div className="zq-bubble">
                  <p>
                    Còn mấy phí local charge thì phải xem trên hãng tàu họ thu như thế nào nè. Em gửi bảng báo giá cước và lịch trình tàu sớm giúp chị nhé! Lưu ý giúp chị: Yêu cầu hãng tàu duyệt 14 ngày Free Demurrage/Detention tại cảng Hamburg giúp chị nha.
                  </p>
                </div>
              </div>
            </div>

            <div className="zq-time">14:23</div>

            <div className="zq-message outgoing">
              <div className="zq-outgoing-inner">
                <div className="zq-bubble outgoing-bubble">
                  <div className="zq-quote-head">
                    <FileText size={16} />
                    <strong>BẢNG BÁO GIÁ CƯỚC BIỂN & LOCAL CHARGES (DỰ THẢO)</strong>
                  </div>
                  <p>Dạ em chào chị Vân! Em gửi chị phương án tối ưu nhất cho lô 2x40'HC Cát Lái - Hamburg :</p>
                  <p><b>Hãng tàu:</b> Hapag-Lloyd / KMTC Direct Line</p>
                  <p><b>Lịch tàu (ETD HCM):</b> 08/06/2024 (Transit: 26-28 ngày)</p>
                  <p><b>Ocean Freight (O/F):</b> $2,850 / 40'HC (All-in)</p>
                  <p><b>Free Dem/Det tại Hamburg:</b> Đã xác nhận 14 ngày miễn phí</p>
                  <p><b>Local charges tại Cát Lái (theo quy định hãng tàu):</b></p>
                  <p>THC (Terminal Handling): $190 / 40'HC</p>
                  <p>Bill of Lading fee (B/L): $45 / Set</p>
                  <p>Seal fee: $10 / Cont</p>
                  <p>Telex release / Surrender: $35 (nếu phát hành điện giao hàng)</p>
                </div>
                <div className="zq-read-status">
                  <CheckCheck size={15} />
                  Đã nhận
                </div>
              </div>
            </div>

            {sentMessages.map((item, index) => (
              <div className="zq-message outgoing" key={`${item}-${index}`}>
                <div className="zq-outgoing-inner">
                  <div className="zq-bubble outgoing-bubble">{item}</div>
                  <div className="zq-read-status">
                    <CheckCheck size={15} />
                    Đã gửi
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="zq-suggestion-bar">
            <span>Gợi ý kịch bản:</span>
            <button onClick={() => setMessage("Xác nhận giữ chỗ ngày 08/06")}>
              <FileText size={14} />
              Xác nhận giữ chỗ ngày 08/06
            </button>
            <button onClick={() => setMessage("Đính kèm file PDF Báo Giá")}>
              <Paperclip size={14} />
              Đính kèm file PDF Báo Giá
            </button>
            <button onClick={() => setMessage("Xin chứng từ Fumigation/Phyto")}>
              <Check size={14} />
              Xin chứng từ Fumigation/Phyto
            </button>
          </div>

          <div className="zq-composer">
            <textarea
              value={
                message ||
                (sentMessages.length === 0
                  ? "Chị Vân kiểm tra lại booking schedule ngày 08/06 em giữ chỗ và báo em xuất Booking Confirmation nhé ạ!"
                  : "")
              }
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={onComposerKeyDown}
              placeholder="Nhập tin nhắn..."
              aria-label="Nhập tin nhắn"
            />
            <div className="zq-composer-tools">
              <button><Paperclip size={17} /></button>
              <button><CircleAlert size={17} /></button>
              <button><Smile size={17} /></button>
              <button><ImageIcon size={17} /></button>
              <button><Bold size={17} /></button>
              <span>Nhấn Enter để gửi, Shift + Enter để xuống dòng</span>
              <button className="zq-send" onClick={sendMessage}>
                Gửi <Send size={15} />
              </button>
            </div>
          </div>
        </main>

        <aside className="zq-channel-panel">
          <button className="zq-channel-arrow"><ChevronRight size={17} /></button>
          <h3>Thông tin</h3>

          {["Gmail", "WeChat", "WhatsApp", "Zalo"].map((name, index) => (
            <button
              key={name}
              className={`zq-channel ${name === "Zalo" ? "active" : ""}`}
              onClick={() => {
                if (name === "Gmail") navigate("/simulations/gmail");
                if (name === "WhatsApp") navigate("/simulations/whatsapp-notification");
              }}
            >
              <img src={channelIcons[name]} alt={name} />
              <span>{name}</span>
              {index === 2 && <b>3</b>}
              {index === 1 && <b>1</b>}
            </button>
          ))}
        </aside>
      </div>

      {showSchedule && (
        <div className="zq-image-modal" onClick={() => setShowSchedule(false)}>
          <div className="zq-image-modal-inner" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowSchedule(false)}><X size={20} /></button>
            <img src={scheduleImage} alt="Lịch tàu KMTC / Carrier Schedule" />
          </div>
        </div>
      )}

      {showSpeedModal && (
        <div className="zq-modal-backdrop">
          <div className="zq-speed-modal">
            <div className="zq-modal-icon"><Zap size={20} /></div>
            <h3>Xác nhận thay đổi tốc độ</h3>
            <p>
              Bạn đang chuẩn bị thay đổi tốc độ mô phỏng sang <strong>{pendingSpeed}</strong>.
              Thời gian trong kịch bản sẽ trôi nhanh hơn. Bạn có muốn tiếp tục?
            </p>
            <div className="zq-modal-actions">
              <button onClick={() => setShowSpeedModal(false)}>Hủy</button>
              <button className="confirm" onClick={confirmSpeed}>Đồng ý</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}