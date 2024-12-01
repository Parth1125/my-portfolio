import "./globals.css";
import { Inter, Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Parth Gera - Software Developer",
  description:
    "Portfolio of Parth Gera, a skilled software developer specializing in React.js, Next.js, Express.js, Node.js, and MongoDB.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 z-[-1]" />
        {children}
      </body>
    </html>
  );
}
