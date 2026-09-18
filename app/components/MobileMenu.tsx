"use client";
import {useState} from "react";

export default function MobileMenu(){
 const [open,setOpen]=useState(false);
 return <div className={"mobileMenu"+(open?" isOpen":"")}>
  <button className="mobileMenuButton" type="button" aria-label={open?"Menüyü kapat":"Menüyü aç"} aria-expanded={open} onClick={()=>setOpen(v=>!v)}>
   <span></span><span></span><span></span>
  </button>
  <div className="mobileMenuSheet" aria-hidden={!open}>
   <nav aria-label="Mobil menü">
    <a href="/biz-kimiz">Biz Kimiz</a>
    <a href="/hizmetler">Hizmetlerimiz</a>
    <a href="/referanslar">Çalıştığımız Markalar</a>
    <a href="/iletisim">İletişim</a>
   </nav>
  </div>
 </div>
}