export const metadata = {
  title: 'ChatSearchX',
  description: 'Die Suche, die alles kann – bald.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
