// app/layout.tsx

import '../styles/globals.css';

export const metadata = {
  title: 'ChatSearchX',
  description: 'Smarter Such-Chat mit GPT-Integration',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="bg-neutral-900 text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}