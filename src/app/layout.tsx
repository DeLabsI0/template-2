import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-gray-800 text-white p-4">
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link href="/tailwind-example" className="hover:text-gray-300">Tailwind Example</Link></li>
            <li><Link href="/tailwind_gpt" className="hover:text-gray-300">TailwindGPT Demo</Link></li>
            <li><Link href="/gocardless-test" className="hover:text-gray-300">GoCardless Test</Link></li>
            <li><Link href="/accounts" className="hover:text-gray-300">Accounts</Link></li>
            <li><Link href="/ocr" className="hover:text-gray-300">OCR</Link></li>
            <li><Link href="/openai" className="hover:text-gray-300">OpenAI</Link></li>
            <li><Link href="/invoice-processor" className="hover:text-gray-300">Invoice Processor</Link></li>
            <li><Link href="/ocr-gpt" className="hover:text-gray-300">OCR&GPT</Link></li>
          </ul>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  )
}
