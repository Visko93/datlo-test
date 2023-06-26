export const metadata = {
  title: 'Ricky Morty',
  description: 'Datlo - test',
  icon: '/favicon.ico'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
