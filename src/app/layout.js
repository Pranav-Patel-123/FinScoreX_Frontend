import { Inter } from "next/font/google"
import "./globals.css"
import Header from "../components/header"
import Footer from "../components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "CreditAI - AI-Powered CIBIL Score System",
  description: "Get real-time CIBIL scores and comprehensive risk analysis for macro finance businesses.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}

