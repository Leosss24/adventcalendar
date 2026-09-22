import type {Metadata} from "next";import "./globals.css";export const metadata:Metadata={title:"Calendario de Adviento",description:"Un calendario de adviento hecho con cariño.",icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"}};export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es"><body>{children}</body></html>}

