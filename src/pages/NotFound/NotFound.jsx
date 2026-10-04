import React from "react";
import {useNavigate} from "react-router-dom";
import "./NotFound.css";
export default function NotFound(){const nav=useNavigate();return <section className="not-found-page"><div className="not-found-card"><span className="eyebrow">NETSTUDY</span><div className="code">404</div><h1>Không tìm thấy trang</h1><p>Đường dẫn bạn truy cập không tồn tại hoặc trang đã được thay đổi.</p><div className="actions"><button onClick={()=>nav('/dashboard')}>Về trang chủ</button><button className="secondary" onClick={()=>nav(-1)}>← Quay lại</button></div></div></section>}
