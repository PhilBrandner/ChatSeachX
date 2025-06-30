
import '../styles/globals.css';

export const metadata = {
  title: 'ChatSearchX',
  description: 'Deine smarte Suche',
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
