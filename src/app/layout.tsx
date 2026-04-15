// src/app/layout.tsx
import "./globals.css"; // CERTIFIQUE-SE DE QUE O CSS ESTÁ AQUI

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="antialiased">{children}</body>
    </html>
  );
}
