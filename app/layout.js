import {  Raleway, Space_Mono, Open_Sans } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  weight: ['100','200','300','500','600','700','800','900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rale',
})

const mono = Space_Mono({
  weight:['400','700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',

})

const sans = Open_Sans({
  weight: ['300','500','600','700','800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans'
})

export const metadata = {
  title: "Atlas - Spending, Dining, Travelling",
  description: "Your key to the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${mono.variable} ${sans.variable} `}>{children}</body>
    </html>
  );
}
