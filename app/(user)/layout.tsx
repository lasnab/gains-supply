import Header from '../../components/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <Header />
      <body>{children}</body>
    </html>
  );
}
