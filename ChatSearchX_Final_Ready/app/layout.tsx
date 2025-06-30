import "./globals.css";

export const metadata = {
  title: "ChatSearchX",
  description: "Dein smarter KI-Suchassistent"
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
