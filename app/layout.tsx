import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {title:"Runtechh | Bilişim Teknolojileri",description:"Fiber optik, yapısal kablolama, network, Wi-Fi, IP kamera ve sistem odası çözümleri."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="tr"><body>{children}</body></html>}