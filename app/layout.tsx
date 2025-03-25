import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@/components/analytics"
import { AuthProvider } from "@/hooks/use-auth"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MGLink Connect - Freelance Marketplace",
  description: "Connect with top freelancers and find your next project on MGLink Connect.",
  keywords: "freelance, marketplace, remote work, hire freelancers, find projects, gig economy",
  authors: [{ name: "MGLink Connect Team" }],
  creator: "MGLink Connect",
  publisher: "MGLink Connect",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mglinkconnect.com",
    title: "MGLink Connect - Freelance Marketplace",
    description: "Connect with top freelancers and find your next project on MGLink Connect.",
    siteName: "MGLink Connect",
  },
  twitter: {
    card: "summary_large_image",
    title: "MGLink Connect - Freelance Marketplace",
    description: "Connect with top freelancers and find your next project on MGLink Connect.",
    creator: "@mglinkconnect",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>{/* Usercentrics Scripts - will be added during client-side rendering */}</head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <AuthProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <Toaster />
            <Analytics />
          </AuthProvider>
        </ThemeProvider>

        {/* Usercentrics Scripts with conditional loading */}
        <Script id="usercentrics-domain-check" strategy="beforeInteractive">
          {`
            (function() {
              // List of allowed domains for Usercentrics
              var allowedDomains = [
                'mglinkconnect.com',
                'www.mglinkconnect.com',
                'mglinkconnect.vercel.app'
                // Add your production and staging domains here
              ];
              
              // Get the current hostname
              var hostname = window.location.hostname;
              
              // Check if current domain is in the allowed list or is localhost
              var isAllowedDomain = allowedDomains.indexOf(hostname) !== -1 || 
                                    hostname === 'localhost' || 
                                    hostname === '127.0.0.1';
              
              // Only load Usercentrics on allowed domains
              if (isAllowedDomain) {
                // Create and append the autoblocker script
                var autoblockerScript = document.createElement('script');
                autoblockerScript.src = 'https://web.cmp.usercentrics.eu/modules/autoblocker.js';
                document.head.appendChild(autoblockerScript);
                
                // Create and append the main Usercentrics script
                var mainScript = document.createElement('script');
                mainScript.id = 'usercentrics-cmp';
                mainScript.src = 'https://web.cmp.usercentrics.eu/ui/loader.js';
                mainScript.setAttribute('data-settings-id', 'vU0gVngonBGF5g');
                mainScript.async = true;
                document.head.appendChild(mainScript);
                
                console.log('Usercentrics scripts loaded for domain:', hostname);
              } else {
                console.log('Usercentrics scripts not loaded for domain:', hostname);
              }
            })();
          `}
        </Script>
      </body>
    </html>
  )
}



import './globals.css'