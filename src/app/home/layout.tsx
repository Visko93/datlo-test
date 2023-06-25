import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Search a character',
  description: 'Datlo - Rick and Morty Test'
};

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <body
      className={inter.className}
      style={{
        margin: 0,
        padding: 0,
        boxSizing: 'border-box'
      }}
    >
      {children}
    </body>
  );
}
