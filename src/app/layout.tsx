import '../styles/globals.css';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode}) {
  return (
    <html lang="en">
      <body>
        <header className="bg-blue-600 text-center p-4 mt-10">
          <h1 className="text-xl font-bold">TripBookr</h1>
        </header>

        <main>{children}</main>

        <footer className="bg-gray-100 text-center p-4 mt-10">
          © 2025 TripBookr
        </footer>
      </body>
    </html>
  )
}
