"use client";

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { Button } from "../../components/ui/button"
import { Progress } from "../../components/ui/progress"
import { getRiskLevel } from "../../lib/utils"
import CreditScoreCard from "./recommendation"
import { motion } from "framer-motion"
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  AlertCircle,
  ArrowDown,
  ArrowUp,
  BarChart3,
  Calendar,
  CheckCircle2,
  Clock,
  Download,
  FileText,
  HelpCircle,
  Info,
  Percent,
  PieChart,
  RefreshCw,
  Shield,
  ThumbsUp,
  TrendingDown,
  TrendingUp,
} from "lucide-react"


export default function DashboardPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DashboardContent />
    </Suspense>
  );
}

function DashboardContent() {
  
  const [refreshing, setRefreshing] = useState(false)

  const searchParams = useSearchParams();
    const scoreParam = searchParams.get("score");

    // Ensure CIBIL score is a valid number
    const cibilScore = scoreParam ? parseFloat(scoreParam) : null;

    // Get the Risk Level Description & Color
    const { level, color } = cibilScore !== null ? getRiskLevel(cibilScore) : { level: "N/A", color: "text-gray-500" };


    
  const handleRefresh = () => {
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
    }, 2000)
  }

  const getRiskColor = (risk) => {
    switch (risk) {
      case "Very Low":
        return "text-green-600";
      case "Low":
        return "text-emerald-600";
      case "Medium":
        return "text-amber-600";
      case "High":
        return "text-orange-600";
      case "Very High":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };
  
  const getScoreColor = (score) => {
    if (score >= 750) return "text-green-600";
    if (score >= 650) return "text-emerald-600";
    if (score >= 550) return "text-amber-600";
    if (score >= 450) return "text-orange-600";
    return "text-red-600";
  };
  
  const getScoreProgressColor = (score) => {
    if (score >= 750) return "bg-green-600";
    if (score >= 650) return "bg-emerald-600";
    if (score >= 550) return "bg-amber-600";
    if (score >= 450) return "bg-orange-600";
    return "bg-red-600";
  };
  

  return (
    <div className="container py-10">
      <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Business Credit Dashboard</h1>
          <p className="text-gray-500">AI-powered credit assessment for your business</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2" onClick={handleRefresh}>
            {refreshing ? <RefreshCw className="h-4 w-4 animate-spin" /> : <RefreshCw className="h-4 w-4" />}
            Refresh Data
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <Calendar className="h-4 w-4" />
            Last 30 Days
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">CIBIL Score</CardTitle>
              <HelpCircle className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline justify-between">
                <div className={`text-3xl font-bold ${getScoreColor(cibilScore)}`}>{cibilScore}</div>
                <div className="flex items-center gap-1 text-sm text-green-600">
                  <ArrowUp className="h-4 w-4" />
                  <span>+15 pts</span>
                </div>
              </div>
              <Progress
                value={(cibilScore / 900) * 100}
                className="mt-3 h-2"
                indicatorClassName={getScoreProgressColor(cibilScore)}
              />
              <div className="mt-2 flex justify-between text-xs text-gray-500">
                <span>Poor</span>
                <span>Fair</span>
                <span>Good</span>
                <span>Excellent</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
           <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Risk Assessment</CardTitle>
                        <Shield className="h-4 w-4 text-gray-400" />
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-baseline justify-between">
                            {/* ✅ Show Risk Level (Very Low, Low, etc.) instead of Score */}
                            <div className={`text-3xl font-bold ${color}`}>
                                {level}
                            </div>
                            <div className="flex items-center gap-1 text-sm text-green-600">
                                <TrendingDown className="h-4 w-4" />
                                <span>-5%</span>
                            </div>
                        </div>
                        {/* Risk Level Indicator */}
                        <div className="mt-3 grid grid-cols-5 gap-1">
                            <div className="h-2 rounded-l-full bg-green-600"></div>
                            <div className="h-2 bg-emerald-500"></div>
                            <div className="h-2 bg-amber-500"></div>
                            <div className="h-2 bg-orange-500"></div>
                            <div className="h-2 rounded-r-full bg-red-600"></div>
                        </div>
                        <div className="mt-2 flex justify-between text-xs text-gray-500">
                            <span>Very Low</span>
                            <span>Low</span>
                            <span>Medium</span>
                            <span>High</span>
                            <span>Very High</span>
                        </div>
                    </CardContent>
                </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Loan Eligibility</CardTitle>
              <FileText className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline justify-between">
                <div className="text-3xl font-bold text-blue-600">₹25L</div>
                <div className="flex items-center gap-1 text-sm text-green-600">
                  <ArrowUp className="h-4 w-4" />
                  <span>+10%</span>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <Progress value={75} className="h-2" />
                <span className="text-xs font-medium">75%</span>
              </div>
              <div className="mt-2 text-xs text-gray-500">Estimated maximum loan amount based on current score</div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Interest Rate Range</CardTitle>
              <Percent className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline justify-between">
                <div className="text-3xl font-bold text-blue-600">8.5-10.2%</div>
                <div className="flex items-center gap-1 text-sm text-green-600">
                  <ArrowDown className="h-4 w-4" />
                  <span>-0.5%</span>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <Progress value={65} className="h-2" />
                <span className="text-xs font-medium">65%</span>
              </div>
              <div className="mt-2 text-xs text-gray-500">Estimated interest rate range based on current score</div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <Tabs defaultValue="overview" className="mt-8">
        <TabsList className="grid w-full grid-cols-4 md:w-auto">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="factors">Score Factors</TabsTrigger>
          <TabsTrigger value="history">Payment History</TabsTrigger>
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <Card>
                <CardHeader>
                  <CardTitle>Score Breakdown</CardTitle>
                  <CardDescription>Key factors affecting your credit score</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-blue-600" />
                          <span className="text-sm font-medium">Payment History</span>
                        </div>
                        <span className="text-sm font-medium">35%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Good - Occasional minor delays</span>
                        <span className="font-medium text-green-600">85/100</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <BarChart3 className="h-4 w-4 text-blue-600" />
                          <span className="text-sm font-medium">Credit Utilization</span>
                        </div>
                        <span className="text-sm font-medium">30%</span>
                      </div>
                      <Progress value={70} className="h-2" />
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Good - 30% utilization</span>
                        <span className="font-medium text-emerald-600">70/100</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <PieChart className="h-4 w-4 text-blue-600" />
                          <span className="text-sm font-medium">Credit Mix</span>
                        </div>
                        <span className="text-sm font-medium">15%</span>
                      </div>
                      <Progress value={60} className="h-2" />
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Average - Limited variety</span>
                        <span className="font-medium text-amber-600">60/100</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-blue-600" />
                          <span className="text-sm font-medium">Business Growth</span>
                        </div>
                        <span className="text-sm font-medium">10%</span>
                      </div>
                      <Progress value={90} className="h-2" />
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Excellent - Consistent growth</span>
                        <span className="font-medium text-green-600">90/100</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Info className="h-4 w-4 text-blue-600" />
                          <span className="text-sm font-medium">Other Factors</span>
                        </div>
                        <span className="text-sm font-medium">10%</span>
                      </div>
                      <Progress value={75} className="h-2" />
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Good - Multiple positive indicators</span>
                        <span className="font-medium text-emerald-600">75/100</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <div className="grid gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Score History</CardTitle>
                    <CardDescription>Your CIBIL score over time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[200px] w-full">
                      {/* Chart would go here - using placeholder */}
                      <div className="flex h-full w-full items-center justify-center rounded-md border border-dashed p-4">
                        <div className="text-center">
                          <BarChart3 className="mx-auto h-10 w-10 text-gray-400" />
                          <p className="mt-2 text-sm text-gray-500">Score history chart would appear here</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Latest changes affecting your score</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium">Loan payment received on time</p>
                          <p className="text-xs text-gray-500">3 days ago</p>
                        </div>
                        <div className="ml-auto flex items-center text-sm font-medium text-green-600">
                          <ArrowUp className="mr-1 h-4 w-4" />
                          +5 pts
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                          <Info className="h-4 w-4 text-blue-600" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium">Credit utilization decreased</p>
                          <p className="text-xs text-gray-500">1 week ago</p>
                        </div>
                        <div className="ml-auto flex items-center text-sm font-medium text-green-600">
                          <ArrowUp className="mr-1 h-4 w-4" />
                          +10 pts
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100">
                          <AlertCircle className="h-4 w-4 text-amber-600" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium">New credit inquiry</p>
                          <p className="text-xs text-gray-500">2 weeks ago</p>
                        </div>
                        <div className="ml-auto flex items-center text-sm font-medium text-red-600">
                          <ArrowDown className="mr-1 h-4 w-4" />
                          -3 pts
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="factors" className="mt-6">
        <CreditScoreCard score={scoreParam} />
        </TabsContent>
        <TabsContent value="history" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Payment History</CardTitle>
              <CardDescription>Detailed record of your loan and payment activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="rounded-md border">
                  <div className="grid grid-cols-6 gap-2 border-b bg-gray-50 p-3 text-xs font-medium text-gray-500">
                    <div>Lender</div>
                    <div>Type</div>
                    <div>Amount</div>
                    <div>Due Date</div>
                    <div>Status</div>
                    <div>Days Late</div>
                  </div>
                  <div className="divide-y">
                    <div className="grid grid-cols-6 gap-2 p-3 text-sm">
                      <div className="font-medium">HDFC Bank</div>
                      <div>Term Loan</div>
                      <div>₹25,000</div>
                      <div>15 May 2023</div>
                      <div className="flex items-center gap-1 text-green-600">
                        <CheckCircle2 className="h-4 w-4" />
                        <span>Paid</span>
                      </div>
                      <div>0</div>
                    </div>
                    <div className="grid grid-cols-6 gap-2 p-3 text-sm">
                      <div className="font-medium">ICICI Bank</div>
                      <div>Line of Credit</div>
                      <div>₹50,000</div>
                      <div>10 Apr 2023</div>
                      <div className="flex items-center gap-1 text-green-600">
                        <CheckCircle2 className="h-4 w-4" />
                        <span>Paid</span>
                      </div>
                      <div>0</div>
                    </div>
                    <div className="grid grid-cols-6 gap-2 p-3 text-sm">
                      <div className="font-medium">Axis Bank</div>
                      <div>Term Loan</div>
                      <div>₹35,000</div>
                      <div>22 Mar 2023</div>
                      <div className="flex items-center gap-1 text-amber-600">
                        <Clock className="h-4 w-4" />
                        <span>Late</span>
                      </div>
                      <div>15</div>
                    </div>
                    <div className="grid grid-cols-6 gap-2 p-3 text-sm">
                      <div className="font-medium">SBI</div>
                      <div>Working Capital</div>
                      <div>₹75,000</div>
                      <div>05 Feb 2023</div>
                      <div className="flex items-center gap-1 text-green-600">
                        <CheckCircle2 className="h-4 w-4" />
                        <span>Paid</span>
                      </div>
                      <div>0</div>
                    </div>
                    <div className="grid grid-cols-6 gap-2 p-3 text-sm">
                      <div className="font-medium">Kotak Bank</div>
                      <div>Term Loan</div>
                      <div>₹40,000</div>
                      <div>18 Jan 2023</div>
                      <div className="flex items-center gap-1 text-green-600">
                        <CheckCircle2 className="h-4 w-4" />
                        <span>Paid</span>
                      </div>
                      <div>0</div>
                    </div>
                    <div className="grid grid-cols-6 gap-2 p-3 text-sm">
                      <div className="font-medium">Yes Bank</div>
                      <div>Equipment Loan</div>
                      <div>₹100,000</div>
                      <div>30 Dec 2022</div>
                      <div className="flex items-center gap-1 text-amber-600">
                        <Clock className="h-4 w-4" />
                        <span>Late</span>
                      </div>
                      <div>7</div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Button variant="outline" className="gap-2">
                    <Download className="h-4 w-4" />
                    Download Full History
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="recommendations" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Recommendations to Improve Your Score</CardTitle>
              <CardDescription>AI-powered suggestions to enhance your creditworthiness</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="rounded-md border bg-green-50 p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                      <ThumbsUp className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium text-green-800">What You&apos;re Doing Well</h3>
                      <ul className="ml-5 list-disc space-y-1 text-sm text-green-700">
                        <li>Consistent on-time payments for most obligations</li>
                        <li>Maintaining moderate credit utilization (30%)</li>
                        <li>Strong business growth trajectory (22% YoY)</li>
                        <li>Regular GST filings with minimal delays</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">High-Impact Recommendations</h3>
                  <div className="rounded-md border p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                        <BarChart3 className="h-4 w-4 text-blue-600" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-medium">Reduce Credit Utilization</h4>
                        <p className="text-sm text-gray-500">
                          Lower your credit utilization from 30% to below 25% to significantly improve your score.
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <span className="text-xs font-medium text-blue-600">Potential Impact:</span>
                          <div className="flex">
                            <ArrowUp className="h-4 w-4 text-blue-600" />
                            <span className="text-xs font-medium text-blue-600">+15-25 points</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-md border p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                        <PieChart className="h-4 w-4 text-blue-600" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-medium">Diversify Credit Mix</h4>
                        <p className="text-sm text-gray-500">
                          Add trade credit relationships with suppliers to demonstrate a more diverse credit portfolio.
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <span className="text-xs font-medium text-blue-600">Potential Impact:</span>
                          <div className="flex">
                            <ArrowUp className="h-4 w-4 text-blue-600" />
                            <span className="text-xs font-medium text-blue-600">+10-20 points</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Medium-Impact Recommendations</h3>
                  <div className="rounded-md border p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                        <Clock className="h-4 w-4 text-blue-600" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-medium">Improve Payment Timeliness</h4>
                        <p className="text-sm text-gray-500">
                          Set up automatic payments to ensure all future payments are made on time, avoiding the recent
                          7-15 day delays.
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <span className="text-xs font-medium text-blue-600">Potential Impact:</span>
                          <div className="flex">
                            <ArrowUp className="h-4 w-4 text-blue-600" />
                            <span className="text-xs font-medium text-blue-600">+5-15 points</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Long-Term Strategies</h3>
                  <div className="rounded-md border p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                        <TrendingUp className="h-4 w-4 text-blue-600" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-medium">Build Credit History Length</h4>
                        <p className="text-sm text-gray-500">
                          Maintain existing credit accounts in good standing to extend your credit history length over
                          time.
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <span className="text-xs font-medium text-blue-600">Potential Impact:</span>
                          <div className="flex">
                            <ArrowUp className="h-4 w-4 text-blue-600" />
                            <span className="text-xs font-medium text-blue-600">+20-30 points (over 1-2 years)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
