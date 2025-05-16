import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const myFont = localFont({
    src: [
        {
          path: "./fonts/Kodchasan-ExtraLight.ttf",
          style: "extra-light",
          weight: "200",
        },
        {
          path: "./fonts/Kodchasan-Light.ttf",
          style: "light",
          weight: "300",
        },
        {
          path: "./fonts/Kodchasan-Regular.ttf",
          style: "normal",
          weight: "400",
        },
        {
          path: "./fonts/Kodchasan-Medium.ttf",
          style: "medium",
          weight: "500",
        },
        {
          path: "./fonts/Kodchasan-SemiBold.ttf",
          style: "semibold",
          weight: "600",
        },
        {
          path: "./fonts/Kodchasan-Bold.ttf",
          style: "bold",
          weight: "700",
        },
    ],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Trang chủ",
    description: "Trang chủ của website với nội dung hấp dẫn.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="mdl-js">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>
      </head>
      <body
        className={`${myFont.className} transition-colors duration-300 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
