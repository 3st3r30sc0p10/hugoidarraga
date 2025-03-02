import React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hugo Idarraga - Portfolio",
  description: "A minimal computing approach to web development and digital humanities",
  keywords: ["minimal computing", "digital humanities", "sustainable web", "accessibility"],
  authors: [{ name: "Hugo Idarraga" }],
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/fonts/system-ui.css"
          as="style"
        />
        {/* Use system fonts instead of loading external fonts */}
        <style>
          {`
            body {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, 
                         "Helvetica Neue", Arial, sans-serif;
            }
          `}
        </style>
      </head>
      <body className="bg-white text-gray-900 antialiased">
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}