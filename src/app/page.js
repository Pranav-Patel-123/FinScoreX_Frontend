"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, Shield, Zap } from "lucide-react"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-blue-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                    AI-Powered CIBIL Score System
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Revolutionize credit assessment with our advanced AI system. Get real-time CIBIL scores, risk
                    analysis, and comprehensive financial insights for macro finance businesses.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/onboarding ">
                    <Button className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700 disabled:pointer-events-none disabled:opacity-50">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/api-docs">
                    <Button
                      variant="outline"
                      className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                    >
                      API Documentation
                    </Button>
                  </Link>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex items-center justify-center"
              >
                <img
                  alt="Credit Score Dashboard"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                  src='credit-score-2.png'
                />
              </motion.div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Comprehensive Credit Assessment</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our AI-powered system analyzes multiple parameters to provide accurate credit scores and risk
                  assessments for businesses of all sizes.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <motion.div whileHover={{ y: -5 }} className="grid gap-1 rounded-lg border bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold">Real-time CIBIL Scores</h3>
                <p className="text-sm text-gray-500">
                  Get instant credit scores based on comprehensive financial data analysis.
                </p>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} className="grid gap-1 rounded-lg border bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold">Risk Assessment</h3>
                <p className="text-sm text-gray-500">
                  Detailed risk analysis with actionable insights for better decision making.
                </p>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} className="grid gap-1 rounded-lg border bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold">API Integration</h3>
                <p className="text-sm text-gray-500">
                  Seamless integration with banking and fintech systems for instant credit assessment.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

