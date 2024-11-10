import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { CssBaseline, Box } from "@mui/material";
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Grievances portal",
  description: "A portal for submitting grievances",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <CssBaseline />
        
        {/* Navbar at the top with a higher z-index */}
        <Navbar />

        {/* Sidebar and main content layout */}
        <Box sx={{ display: "flex", mt: "64px" }}> {/* Add margin to push down content below navbar */}
          
          {/* Sidebar with a fixed width */}
          <Sidebar />

          {/* Main content area */}
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            {children}
          </Box>
        </Box>
      </body>
    </html>
  );
}
