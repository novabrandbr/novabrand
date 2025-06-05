import './globals.css';

export const metadata = {
  title: 'NovaBrand',
  description: 'Cole todas as suas links em um só lugar',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-purple-700 flex items-center justify-center min-h-screen">
        {children}
      </body>
    </html>
  );
}
