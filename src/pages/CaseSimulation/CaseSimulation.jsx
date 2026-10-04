import React, { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookmarkPlus,
  Bold,
  CalendarClock,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  CloudCheck,
  FileText,
  Italic,
  List,
  ListOrdered,
  Paperclip,
  Send,
  Ship,
  Table2,
  Timer,
} from "lucide-react";

import "./CaseSimulation.css";

const quizOptions = [
  {
    value: "A",
    label: "Commercial Invoice (Hóa đơn thương mại)",
  },
  {
    value: "B",
    label: "FIATA Multimodal Transport Bill of Lading (FBL)",
    correct: true,
  },
  {
    value: "C",
    label: "Certificate of Origin (Chứng nhận xuất xứ C/O)",
  },
  {
    value: "D",
    label: "Air Waybill (Vận đơn hàng không AWB)",
  },
];

const scenarios = [
  {
    id: 1,
    title: "Sự cố Kênh đào Suez",
    status: "Đang làm",
    points: "25 Điểm",
    category: "Khủng hoảng tuyến biển",
  },
  {
    id: 2,
    title: "Tranh chấp DEM/DET Cát Lái",
    status: "Chưa làm",
    points: "15 Điểm",
    category: "Phụ phí & Giao nhận cảng",
  },
  {
    id: 3,
    title: "Tổn thất chung (General Average)",
    status: "Chưa làm",
    points: "10 Điểm",
    category: "Bảo hiểm Hàng hải",
  },
];

export default function CaseSimulation() {
  const [selectedAnswer, setSelectedAnswer] = useState("B");
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [currentScenario, setCurrentScenario] = useState(1);

  const [answer, setAnswer] = useState("");

  const [remainingSeconds, setRemainingSeconds] = useState(45 * 60);

  const [saved, setSaved] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingSeconds((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = String(
    Math.floor(remainingSeconds / 60)
  ).padStart(2, "0");

  const seconds = String(
    remainingSeconds % 60
  ).padStart(2, "0");

  const wordCount = answer.trim()
    ? answer.trim().split(/\s+/).length
    : 0;

  const handleSaveDraft = () => {
    setSaved(true);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion((prev) => Math.min(prev + 1, 5));
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestion((prev) => Math.max(prev - 1, 1));
  };

  const handleScenarioChange = (id) => {
    setCurrentScenario(id);
    setSaved(false);
  };

  return (
    <div className="cs-page">
      <div className="cs-container">

        {/* PAGE HEADER */}
        <section className="cs-assessment-header">
          <div className="cs-header-main">
            <div className="cs-header-badges">
              <span className="cs-test-badge">
                BÀI KIỂM TRA
              </span>

              <span className="cs-duration-badge">
                45 PHÚT
              </span>
            </div>

            <h1>
              Kiểm tra & Bài tập Tình huống
              (Assessment & Case Study)
            </h1>

            <p>
              Đánh giá kiến thức về các điều khoản thương mại quốc tế
              Incoterms 2020, quy trình vận tải đa phương thức và xử lý
              tình huống thực tế.
            </p>
          </div>

          <div className="cs-timer">
            <Timer size={21} />

            <div>
              <span>THỜI GIAN CÒN LẠI</span>

              <strong>
                {minutes}:{seconds}
              </strong>
            </div>
          </div>
        </section>

        {/* PART 1 */}
        <section className="cs-card cs-quiz-card">

          <div className="cs-section-header">
            <div className="cs-section-heading">
              <ClipboardList size={21} />

              <h2>
                Phần 1: Trắc nghiệm khách quan
              </h2>
            </div>

            <div className="cs-question-progress">
              <span>
                Câu hỏi {currentQuestion} / 5
              </span>

              <div className="cs-small-progress">
                <div
                  style={{
                    width: `${(currentQuestion / 5) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>

          <div className="cs-quiz-body">

            <div className="cs-question">
              <span className="cs-question-number">
                {currentQuestion}
              </span>

              <p>
                Khi thực hiện hợp đồng vận chuyển đa phương thức
                từ Thâm Quyến (Shenzhen, Trung Quốc) đến Munich
                (Đức), chứng từ nào sau đây đóng vai trò là hợp đồng
                vận tải đa phương thức chính thức và biên nhận hàng
                hóa xuyên suốt toàn bộ hành trình?
              </p>
            </div>

            <div className="cs-options">
              {quizOptions.map((option) => {
                const isSelected =
                  selectedAnswer === option.value;

                return (
                  <label
                    key={option.value}
                    className={`cs-option ${
                      isSelected
                        ? "cs-option-selected"
                        : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="quiz-answer"
                      value={option.value}
                      checked={isSelected}
                      onChange={() =>
                        setSelectedAnswer(option.value)
                      }
                    />

                    <span className="cs-radio">
                      {isSelected && (
                        <span />
                      )}
                    </span>

                    <div className="cs-option-content">
                      <span className="cs-option-letter">
                        {option.value}.
                      </span>

                      <span>
                        {option.label}
                      </span>
                    </div>

                    {option.correct &&
                      isSelected && (
                        <CheckCircle2
                          size={16}
                          className="cs-correct-icon"
                        />
                      )}
                  </label>
                );
              })}
            </div>

            <div className="cs-quiz-navigation">

              <button
                type="button"
                className="cs-prev-button"
                disabled={currentQuestion === 1}
                onClick={handlePreviousQuestion}
              >
                <ChevronLeft size={16} />
                Câu trước
              </button>

              <button
                type="button"
                className="cs-next-button"
                onClick={handleNextQuestion}
              >
                Câu tiếp theo
                <ChevronRight size={16} />
              </button>

            </div>
          </div>
        </section>

        {/* PART 2 */}
        <section className="cs-card cs-case-card">

          {/* CASE HEADER */}
          <div className="cs-case-header">

            <div className="cs-case-heading">
              <ClipboardList size={21} />

              <div>
                <div className="cs-case-title-row">

                  <h2>
                    Phần 2: Bài tập Tình huống Thực chiến
                  </h2>

                  <span className="cs-points-badge">
                    50 Điểm
                  </span>

                </div>

                <p>
                  Phân tích rủi ro, vận dụng Incoterms 2020 &
                  xử lý sự cố chuỗi cung ứng thực tế
                </p>
              </div>
            </div>

            <div className="cs-case-progress">

              <div className="cs-case-progress-text">
                <strong>
                  Tiến độ: 1 / 3 tình huống
                </strong>

                <span>
                  Tổng điểm đạt được: 0/50
                </span>
              </div>

              <div className="cs-case-progress-bar">
                <div style={{ width: "33.33%" }} />
              </div>

            </div>
          </div>

          {/* SCENARIO TABS */}
          <div className="cs-scenario-tabs">
            {scenarios.map((scenario) => {
              const active =
                currentScenario === scenario.id;

              return (
                <button
                  type="button"
                  key={scenario.id}
                  className={`cs-scenario-tab ${
                    active
                      ? "cs-scenario-active"
                      : ""
                  }`}
                  onClick={() =>
                    handleScenarioChange(
                      scenario.id
                    )
                  }
                >
                  <span
                    className={`cs-scenario-number ${
                      active
                        ? "cs-scenario-number-active"
                        : ""
                    }`}
                  >
                    {scenario.id}
                  </span>

                  <span className="cs-scenario-info">

                    <span className="cs-scenario-title-row">
                      <strong>
                        {scenario.title}
                      </strong>

                      <small
                        className={
                          active
                            ? "cs-status-active"
                            : "cs-status-pending"
                        }
                      >
                        {scenario.status}
                      </small>
                    </span>

                    <span className="cs-scenario-meta">
                      {scenario.points} •{" "}
                      {scenario.category}
                    </span>

                  </span>
                </button>
              );
            })}
          </div>

          {/* CASE CONTENT */}
          <div className="cs-case-content">

            {/* BRIEFING */}
            <div className="cs-briefing">

              <div className="cs-briefing-header">

                <div className="cs-briefing-title">
                  <Ship size={20} />

                  <strong>
                    Tình huống 1: Xử lý khủng hoảng
                    tắc nghẽn Kênh đào Suez &
                    Chuyển tuyến khẩn cấp
                  </strong>
                </div>

                <span className="cs-deadline">
                  <CalendarClock size={14} />
                  Hạn xử lý cam kết: 14 ngày
                </span>

              </div>

              {/* SHIPMENT DATA */}
              <div className="cs-shipment-data">

                <div>
                  <span>
                    Mã vận đơn B/L:
                  </span>

                  <strong className="cs-mono">
                    MSC-EU248910
                  </strong>
                </div>

                <div>
                  <span>
                    Quy cách hàng:
                  </span>

                  <strong>
                    15 x 40'HC Linh kiện chip
                  </strong>
                </div>

                <div>
                  <span>
                    Tuyến hành trình:
                  </span>

                  <strong>
                    Thâm Quyến → Rotterdam
                  </strong>
                </div>

                <div>
                  <span>
                    Điều kiện Incoterms:
                  </span>

                  <strong className="cs-incoterm">
                    CIP Rotterdam
                  </strong>
                </div>

              </div>

              {/* NARRATIVE */}
              <p className="cs-narrative">
                Một siêu tàu container trọng tải lớn bị sự cố
                mắc cạn chéo kênh tại Kênh đào Suez, khiến giao
                thông hàng hải qua vịnh Suez và Biển Đỏ tê liệt
                hoàn toàn trong dự kiến tối thiểu 7-10 ngày tới.
                Doanh nghiệp logistics của bạn đang phụ trách lô
                hàng gồm 15 container linh kiện điện tử vi mạch
                cao cấp (tổng trị giá hơn 6.2 triệu USD) đang trên
                tàu neo chờ tại vùng biển phía nam kênh. Hợp đồng
                mua bán quốc tế quy định điều khoản phạt trễ 1.5%
                giá trị/ngày nếu giao sau 14 ngày tới. Phương án
                đổi lộ trình vòng qua Mũi Hảo Vọng (Cape of Good
                Hope) sẽ cộng thêm 11-13 ngày hành trình và phụ phí
                Bunker Adjustment Factor (BAF) tăng vọt.
              </p>

              {/* TASKS */}
              <div className="cs-task-box">

                <div className="cs-task-heading">
                  <CheckCircle2 size={17} />

                  <strong>
                    Nhiệm vụ bắt buộc bạn cần hoàn thành:
                  </strong>
                </div>

                <ul>

                  <li>
                    <strong>
                      Nhiệm vụ 1 (8đ):
                    </strong>

                    Phân tích trách nhiệm rủi ro
                    hư hỏng/chậm trễ và phân bổ chi phí
                    bảo hiểm theo điều kiện{" "}
                    <b>
                      CIP Incoterms 2020
                    </b>{" "}
                    trong tình huống bất khả kháng
                    (Force Majeure).
                  </li>

                  <li>
                    <strong>
                      Nhiệm vụ 2 (10đ):
                    </strong>

                    Đề xuất phương án vận chuyển thay thế
                    tối ưu: (A) Giữ nguyên neo chờ, (B) Đổi
                    tuyến vòng qua Mũi Hảo Vọng, hay (C)
                    Chuyển tải đa phương thức Sea-Air qua
                    cảng Jebel Ali (Dubai) về sân bay Schiphol
                    (Amsterdam). So sánh chi phí dự kiến &
                    thời gian.
                  </li>

                  <li>
                    <strong>
                      Nhiệm vụ 3 (7đ):
                    </strong>

                    Soạn dự thảo công văn/email chính thức
                    (Notice of Contingency & Route Modification)
                    gửi đối tác khách hàng tại Rotterdam để đạt
                    thỏa thuận chia sẻ chi phí phát sinh.
                  </li>

                </ul>

              </div>

              {/* EDITOR */}
              <div className="cs-editor">

                <div className="cs-editor-toolbar">

                  <button type="button">
                    <Bold size={17} />
                  </button>

                  <button type="button">
                    <Italic size={17} />
                  </button>

                  <span className="cs-toolbar-divider" />

                  <button type="button">
                    <List size={17} />
                  </button>

                  <button type="button">
                    <ListOrdered size={17} />
                  </button>

                  <button type="button">
                    <Table2 size={17} />
                  </button>

                  <button type="button">
                    <Paperclip size={17} />
                  </button>

                  <span className="cs-toolbar-label">
                    Đính kèm tài liệu
                  </span>

                </div>

                <textarea
                  value={answer}
                  onChange={(event) => {
                    setAnswer(event.target.value);
                    setSaved(false);
                  }}
                  maxLength={500}
                  placeholder="Nhập câu trả lời của bạn..."
                />

                <div className="cs-editor-footer">

                  <div className="cs-save-status">

                    {saved ? (
                      <>
                        <CloudCheck size={16} />

                        <span>
                          Đã lưu nháp lúc 09:42
                        </span>
                      </>
                    ) : (
                      <>
                        <CloudCheck size={16} />

                        <span>
                          Chưa lưu thay đổi
                        </span>
                      </>
                    )}

                  </div>

                  <span className="cs-word-count">
                    {wordCount} / 500 từ
                  </span>

                </div>

              </div>

              {/* AI NOTICE */}
              <div className="cs-ai-notice">
                <CheckCircle2 size={17} />

                <span>
                  Bài làm tự luận được chấm tự động kết hợp
                  hội đồng chuyên gia Logistics
                </span>
              </div>

            </div>
          </div>

          {/* BOTTOM NAVIGATION */}
          <div className="cs-bottom-navigation">

            <button
              type="button"
              className="cs-case-prev"
              disabled={currentScenario === 1}
              onClick={() =>
                setCurrentScenario(
                  Math.max(currentScenario - 1, 1)
                )
              }
            >
              <ChevronLeft size={16} />
              Tình huống trước
            </button>

            <button
              type="button"
              className="cs-save-button"
              onClick={handleSaveDraft}
            >
              <BookmarkPlus size={17} />
              Lưu nháp tình huống 1
            </button>

            <button
              type="button"
              className="cs-case-next"
              onClick={() =>
                setCurrentScenario(
                  Math.min(currentScenario + 1, 3)
                )
              }
            >
              Sang tình huống 2
              <ChevronRight size={16} />
            </button>

          </div>

        </section>

        {/* FINAL ACTIONS */}
        <div className="cs-final-actions">

          <button
            type="button"
            className="cs-draft-button"
            onClick={handleSaveDraft}
          >
            <BookmarkPlus size={17} />
            Lưu bản nháp
          </button>

          <button
            type="button"
            className="cs-submit-button"
            onClick={() =>
              alert("Bài kiểm tra đã được gửi.")
            }
          >
            <Send size={17} />
            Nộp bài kiểm tra
          </button>

        </div>

      </div>
    </div>
  );
}