import type { Metadata } from "next";
import { Outfit, Manrope, JetBrains_Mono } from "next/font/google"; // Outfit for headings, Manrope for body
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import JsonLd from "@/components/seo/json-ld";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Abhishek Mohanty | Full Stack Developer & UI/UX Designer",
    template: "%s | Abhishek Mohanty",
  },
  description: "Portfolio of Abhishek Mohanty, a Full Stack Developer and UI/UX Designer specializing in building modern, user-centric web applications.",
  keywords: ["Abhishek Mohanty", "Full Stack Developer", "UI/UX Designer", "Next.js", "React", "TypeScript", "Tailwind CSS", "Portfolio"],
  authors: [{ name: "Abhishek Mohanty", url: "https://abhishekmohanty.dev" }],
  creator: "Abhishek Mohanty",
  metadataBase: new URL("https://abhishekmohanty.dev"), // Replace with actual domain
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abhishekmohanty.dev",
    title: "Abhishek Mohanty | Full Stack Developer & UI/UX Designer",
    description: "Portfolio of Abhishek Mohanty, building modern, user-centric web applications.",
    siteName: "Abhishek Mohanty Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Needs to be added to public/
        width: 1200,
        height: 630,
        alt: "Abhishek Mohanty Portfolio",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: '/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${manrope.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground min-h-screen flex flex-col font-sans`}
      >
        <JsonLd />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
            <main className="mt-8 flex-1 flex flex-col">
              {children}
            </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}