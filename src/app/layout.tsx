import '../styles/globals.css';
import Header from './Header';
import Providers from './Providers';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 transition-all duration-700 dark:bg-zinc-900">
        <Providers>
          <Header />
          <div className="mx-auto max-w-6xl">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
