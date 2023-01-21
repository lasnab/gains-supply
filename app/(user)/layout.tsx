import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../styles/globals.css';
import EmailCollectionForm from '@/components/EmailCollectionForm';

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
        {/* <EmailCollectionForm /> */}
        <Footer />
      </body>
    </html>
  );
}
