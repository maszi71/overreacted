import type { Metadata } from "next";
import "./globals.scss";
import { merriweather } from "./font";
import StoreProvider from "./redux/StoreProvider";

export const metadata: Metadata = {
  title: "overreacted — A blog by Dan Abramov",
  description: "A personal blog by Dan Abramov",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={merriweather.className}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
