"use client";
import {useState} from "react";
export default function MobileMenu(){
 const [open,setOpen]=useState(false);
 return <div className="mobileMenu">
  <button className="mobileMenuButton" type="button" aria-label={open?"Menüyü kapat":"Menüyü aç"} aria-expanded={open} onClick={()=>setOpen(!open)}>
   <span></span><span></span><span></span>
  </button>
  {open&&<><button className="mobileMenuBackdrop" aria-label="Menüyü kapat" onClick={()=>setOpen(false)}/><nav className="mobileMenuPanel" aria-label="Mobil menü">
   <a href="/biz-kimiz" onClick={()=>setOpen(false)}>Biz Kimiz</a>
   <a href="/hizmetler" onClick={()=>setOpen(false)}>Hizmetlerimiz</a>
   <a href="/referanslar" onClick={()=>setOpen(false)}>Çalıştığımız Markalar</a>
   <a href="/iletisim" onClick={()=>setOpen(false)}>İletişim</a>
  </nav></>}
 </div>
}