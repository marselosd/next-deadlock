// app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'NextDeadlock',
  description: 'Descrição do site',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>
        {children}
      </body>
    </html>
  );
}