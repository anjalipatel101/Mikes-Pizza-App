import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";
import { UserContextProvider } from "./context/userContext";
import { OrderProvider } from "./context/OrderContext";
import { Amplify } from "aws-amplify";
import awsExports from "./awsExports";

Amplify.configure(awsExports);

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  // Add fallback fonts
  fallback: [
    "system-ui",
    "-apple-system",
    "Segoe UI",
    "Roboto",
    "Arial",
    "sans-serif",
  ],
});

export const metadata: Metadata = {
  title: "Mike's",
  description: "Order food online from our Mike's Pizza",
  icons: {
    icon: "/images/pizza-slice-light.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserContextProvider>
          <OrderProvider>
            <CartProvider>
              <Navbar />
              {children}
            </CartProvider>
          </OrderProvider>
        </UserContextProvider>
      </body>
    </html>
  );
}
