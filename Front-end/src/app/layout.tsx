import { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Real-Time Employee Task Management Tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
