
import '../styles/globals.css';

export const metadata = {
  title: 'ChatSearchX',
  description: 'Smartes Such-Frontend mit GPT-Funktionalität',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
