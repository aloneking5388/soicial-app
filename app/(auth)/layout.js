import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "../globals.css";

export const metadata = {
  title: "Lufixo Auth",
  description: "Lufixo Social Media App",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} flex items-center justify-center mt-20 bg-purple-2`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
