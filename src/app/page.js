"use client";

import Link from "next/link";
import { Button } from "../components/ui/button";
import { ArrowRight, BarChart3, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center text-center">
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-blue-50 flex justify-center">
          <div className="container px-4 md:px-6 flex flex-col items-center">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2 place-items-center">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                    AI-Powered CIBIL Score System
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Revolutionize credit assessment with our advanced AI system. Get real-time CIBIL scores, risk analysis, and comprehensive financial insights for macro finance businesses.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/onboarding" passHref>
                    <Button className="h-10 rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:ring-1 focus-visible:ring-blue-700">
                      Check CIBIL
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/api-integration" passHref>
                    <Button variant="outline" className="h-10 border border-gray-200 px-8 text-sm font-medium shadow-sm hover:bg-gray-100 hover:text-gray-900 focus-visible:ring-1 focus-visible:ring-gray-950">
                      API Documentation
                    </Button>
                  </Link>
                </div>
              </div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex items-center justify-center">
                <img
                  alt="Credit Score Dashboard"
                  className="mx-auto aspect-video rounded-xl object-cover object-center sm:w-full"
                  src="/credit-score-2.png"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white flex justify-center">
          <div className="container px-4 md:px-6 flex flex-col items-center">
            <div className="text-center space-y-4">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Key Features</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Comprehensive Credit Assessment</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl">Our AI-powered system analyzes multiple parameters to provide accurate credit scores and risk assessments.</p>
            </div>
            <div className="grid max-w-5xl gap-6 py-12 lg:grid-cols-3 lg:gap-12 place-items-center">
              {[ 
                { icon: <BarChart3 className="h-6 w-6" />, title: "Real-time CIBIL Scores", description: "Get instant credit scores based on financial data analysis." },
                { icon: <Shield className="h-6 w-6" />, title: "Risk Assessment", description: "Detailed risk analysis with actionable insights." },
                { icon: <Zap className="h-6 w-6" />, title: "API Integration", description: "Seamless integration with fintech systems." }
              ].map((feature, index) => (
                <motion.div key={index} whileHover={{ y: -5 }} className="grid gap-1 rounded-lg border bg-white p-6 shadow-sm text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 mx-auto">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold">{feature.title}</h3>
                  <p className="text-sm text-gray-500">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
