import React from "react";
import {useNavigate} from "react-router-dom";
import "./StitchPage.css";
export default function StitchPage({title,group,description,slug,backTo="/dashboard"}){const nav=useNavigate();return <section className="page-shell"><div className="page-heading"><div><div className="eyebrow">{group}</div><h1>{title}</h1><p>{description}</p></div><button className="back-button" onClick={()=>nav(backTo)}>← Khu vực trước</button></div><div className="stitch-frame"><iframe title={title} src={`/stitch-screens/${slug}/index.html`}/></div></section>}
