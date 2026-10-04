# NetStudy React

NetStudy là nền tảng học tập và mô phỏng nghiệp vụ Logistics được xây dựng bằng React.

## 📌 Giới thiệu

Project được phát triển nhằm mô phỏng môi trường học tập nghiệp vụ Logistics, bao gồm:

* Khóa học Logistics
* Lộ trình học tập
* Module học tập
* Bài kiểm tra và tình huống thực tế
* Mô phỏng giao tiếp với khách hàng
* Mô phỏng Gmail
* Mô phỏng Zalo
* Mô phỏng WhatsApp
* Đánh giá Incoterms
* Khu vực nhà tuyển dụng
* Quản lý công việc tuyển dụng
* Hồ sơ ứng viên
* Portfolio cá nhân

## 🛠 Công nghệ sử dụng

* React
* Vite
* React Router
* Lucide React
* JavaScript
* CSS

## 💻 Yêu cầu môi trường

Trước khi chạy project, cần cài:

* Node.js
* npm
* Git

Kiểm tra phiên bản:

```bash
node -v
npm -v
git --version
```

## 📥 Clone project

Mở Terminal hoặc CMD và chạy:

```bash
git clone https://github.com/Nhan20521698/netstudy-react.git
```

Sau khi clone xong:

```bash
cd netstudy-react
```

## 📦 Cài đặt thư viện

Chạy:

```bash
npm install
```

Lệnh này sẽ tự động cài đặt các thư viện cần thiết dựa trên `package.json` và `package-lock.json`.

## ▶️ Chạy project

Sau khi cài đặt xong:

```bash
npm run dev
```

Terminal sẽ hiển thị địa chỉ tương tự:

```text
http://localhost:5173/
```

Mở trình duyệt và truy cập:

```text
http://localhost:5173/
```

## 🏗 Build project

Để kiểm tra project có thể build production hay không:

```bash
npm run build
```

Nếu build thành công, thư mục `dist` sẽ được tạo.

Có thể chạy thử bản build bằng:

```bash
npm run preview
```

## 📂 Cấu trúc project

```text
netstudy-react/
├── public/
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   ├── data/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── .gitignore
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## 🧭 Các route chính

### Dashboard

```text
/dashboard
```

### Authentication

```text
/login
/register
```

### Courses

```text
/courses
/courses/international-shipping
```

### Learning

```text
/learning/roadmap
/learning/module
/enrollments
```

### Simulations

```text
/simulations/case
/simulations/customer-info
/simulations/customer-info-group
/simulations/gmail
/simulations/zalo-chat
/simulations/zalo-quote
/simulations/whatsapp-notification
/simulations/incoterms-assessment
```

### Recruiter

```text
/recruiter
/recruiter/post-job
/recruiter/jobs/manage
/recruiter/candidate-profile
/recruiter/simulation-review
```

### Profile

```text
/profile
/profile/portfolio
```

## 🔄 Cập nhật project

Nếu đã clone project và muốn lấy phiên bản mới nhất:

```bash
git pull
```

Nếu project có thay đổi thư viện:

```bash
npm install
```

Sau đó chạy lại:

```bash
npm run dev
```

## ⚠️ Lưu ý

Không upload thư mục `node_modules` lên GitHub.

Thư mục này đã được thêm vào `.gitignore` và sẽ được tạo lại tự động bằng:

```bash
npm install
```

Không commit các file chứa thông tin nhạy cảm như:

```text
.env
.env.local
API keys
passwords
access tokens
```

## 👨‍💻 Tác giả

**Nhan20521698**

GitHub:

https://github.com/Nhan20521698

## 📄 License

Project được xây dựng cho mục đích học tập và phát triển cá nhân.
