import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="flex flex-col min-h-screen bg-primary">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
