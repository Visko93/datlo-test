import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Ricky and Morty',
  description: 'Datlo - Rick and Morty Test',
  icon: '/favicon.ico'
};

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <body
      className={inter.className}
      style={{
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        backgroundColor: '#000'
      }}
    >
      {children}
    </body>
  );
}
