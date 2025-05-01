export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <p>PrivateLayout</p>
      {children}
    </div>
  );
}
