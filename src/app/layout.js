import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Texprocess",
  description: "The complete textile processing is here!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="myTheme">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
