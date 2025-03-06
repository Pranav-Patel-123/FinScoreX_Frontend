"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import { useRouter } from "next/navigation"

const formSteps = ["Business Information", "Financial Details", "Credit History", "Additional Metrics"]

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    businessId: "",
    businessType: "",
    industrySector: "",
    yearsInOperation: "",
    monthlyRevenue: "",
    monthlyExpenses: "",
    loanRepaymentHistory: "",
    outstandingDebt: "",
    cashFlowStabilityScore: 50,
    gstFilings: "",
    supplierPaymentDelay: "",
    ecommerceVolume: "",
    digitalInvoiceRate: 50,
    creditDefaultHistory: "",
    businessGrowthRate: 50,
    macroeconomicRiskScore: 50,
    socialMediaSentiment: 50,
    regulatoryComplianceScore: 50,
  })

  const router = useRouter()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSliderChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value[0] }))
  }

  const nextStep = () => {
    if (currentStep < formSteps.length - 1) {
      setCurrentStep((prev) => prev + 1)
    } else {
      // Submit form and redirect to dashboard
      router.push("/dashboard")
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  return (
    <div className="container max-w-4xl py-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Business Onboarding</h1>
        <p className="mt-2 text-gray-500">Complete the form to get your AI-powered CIBIL score</p>
      </div>

      <div className="mb-8">
        <div className="flex justify-between">
          {formSteps.map((step, index) => (
            <div key={step} className="flex flex-col items-center">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                  index <= currentStep
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "border-gray-300 bg-white text-gray-300"
                }`}
              >
                {index < currentStep ? <Check className="h-5 w-5" /> : index + 1}
              </div>
              <span className={`mt-2 text-sm ${index <= currentStep ? "text-blue-600" : "text-gray-500"}`}>{step}</span>
            </div>
          ))}
        </div>
        <div className="relative mt-4 h-2 rounded-full bg-gray-200">
          <motion.div
            className="absolute left-0 top-0 h-2 rounded-full bg-blue-600"
            initial={{ width: `${(currentStep / (formSteps.length - 1)) * 100}%` }}
            animate={{ width: `${(currentStep / (formSteps.length - 1)) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <Card>
        <CardContent className="p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {currentStep === 0 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Business Information</h2>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="businessId">Business ID</Label>
                      <Input
                        id="businessId"
                        name="businessId"
                        value={formData.businessId}
                        onChange={handleInputChange}
                        placeholder="Enter your business ID"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="businessType">Business Type</Label>
                      <Select
                        value={formData.businessType}
                        onValueChange={(value) => handleSelectChange("businessType", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select business type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sole_proprietorship">Sole Proprietorship</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="llp">Limited Liability Partnership</SelectItem>
                          <SelectItem value="private_limited">Private Limited Company</SelectItem>
                          <SelectItem value="public_limited">Public Limited Company</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="industrySector">Industry Sector</Label>
                      <Select
                        value={formData.industrySector}
                        onValueChange={(value) => handleSelectChange("industrySector", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select industry sector" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>
                          <SelectItem value="retail">Retail</SelectItem>
                          <SelectItem value="technology">Technology</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="finance">Finance</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="hospitality">Hospitality</SelectItem>
                          <SelectItem value="agriculture">Agriculture</SelectItem>
                          <SelectItem value="construction">Construction</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="yearsInOperation">Years in Operation</Label>
                      <Input
                        id="yearsInOperation"
                        name="yearsInOperation"
                        value={formData.yearsInOperation}
                        onChange={handleInputChange}
                        placeholder="Enter years in operation"
                        type="number"
                      />
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 1 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Financial Details</h2>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="monthlyRevenue">Monthly Revenue (₹)</Label>
                      <Input
                        id="monthlyRevenue"
                        name="monthlyRevenue"
                        value={formData.monthlyRevenue}
                        onChange={handleInputChange}
                        placeholder="Enter monthly revenue"
                        type="number"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="monthlyExpenses">Monthly Expenses (₹)</Label>
                      <Input
                        id="monthlyExpenses"
                        name="monthlyExpenses"
                        value={formData.monthlyExpenses}
                        onChange={handleInputChange}
                        placeholder="Enter monthly expenses"
                        type="number"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="outstandingDebt">Outstanding Debt (₹)</Label>
                      <Input
                        id="outstandingDebt"
                        name="outstandingDebt"
                        value={formData.outstandingDebt}
                        onChange={handleInputChange}
                        placeholder="Enter outstanding debt"
                        type="number"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cashFlowStabilityScore">Cash Flow Stability Score</Label>
                      <div className="flex items-center gap-4">
                        <Slider
                          id="cashFlowStabilityScore"
                          value={[formData.cashFlowStabilityScore]}
                          onValueChange={(value) => handleSliderChange("cashFlowStabilityScore", value)}
                          max={100}
                          step={1}
                          className="flex-1"
                        />
                        <span className="w-10 text-center">{formData.cashFlowStabilityScore}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Credit History</h2>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="loanRepaymentHistory">Loan Repayment History</Label>
                      <Select
                        value={formData.loanRepaymentHistory}
                        onValueChange={(value) => handleSelectChange("loanRepaymentHistory", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select repayment history" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="excellent">Excellent - No delays</SelectItem>
                          <SelectItem value="good">Good - Occasional minor delays</SelectItem>
                          <SelectItem value="average">Average - Some delays</SelectItem>
                          <SelectItem value="poor">Poor - Frequent delays</SelectItem>
                          <SelectItem value="very_poor">Very Poor - Defaults</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="creditDefaultHistory">Credit Default History</Label>
                      <Select
                        value={formData.creditDefaultHistory}
                        onValueChange={(value) => handleSelectChange("creditDefaultHistory", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select default history" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">None</SelectItem>
                          <SelectItem value="minor">Minor - One instance</SelectItem>
                          <SelectItem value="moderate">Moderate - Few instances</SelectItem>
                          <SelectItem value="major">Major - Multiple instances</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gstFilings">GST Filings</Label>
                      <Select
                        value={formData.gstFilings}
                        onValueChange={(value) => handleSelectChange("gstFilings", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select GST filing status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="regular">Regular - Always on time</SelectItem>
                          <SelectItem value="mostly_regular">Mostly Regular - Occasional delays</SelectItem>
                          <SelectItem value="irregular">Irregular - Frequent delays</SelectItem>
                          <SelectItem value="non_compliant">Non-compliant</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="supplierPaymentDelay">Supplier Payment Delay (Days)</Label>
                      <Input
                        id="supplierPaymentDelay"
                        name="supplierPaymentDelay"
                        value={formData.supplierPaymentDelay}
                        onChange={handleInputChange}
                        placeholder="Enter average delay in days"
                        type="number"
                      />
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Additional Metrics</h2>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="ecommerceVolume">E-commerce Sales Volume (₹)</Label>
                      <Input
                        id="ecommerceVolume"
                        name="ecommerceVolume"
                        value={formData.ecommerceVolume}
                        onChange={handleInputChange}
                        placeholder="Enter e-commerce sales volume"
                        type="number"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="digitalInvoiceRate">Digital Invoice Payment Rate (%)</Label>
                      <div className="flex items-center gap-4">
                        <Slider
                          id="digitalInvoiceRate"
                          value={[formData.digitalInvoiceRate]}
                          onValueChange={(value) => handleSliderChange("digitalInvoiceRate", value)}
                          max={100}
                          step={1}
                          className="flex-1"
                        />
                        <span className="w-10 text-center">{formData.digitalInvoiceRate}%</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="businessGrowthRate">Business Growth Rate (%)</Label>
                      <div className="flex items-center gap-4">
                        <Slider
                          id="businessGrowthRate"
                          value={[formData.businessGrowthRate]}
                          onValueChange={(value) => handleSliderChange("businessGrowthRate", value)}
                          max={100}
                          step={1}
                          className="flex-1"
                        />
                        <span className="w-10 text-center">{formData.businessGrowthRate}%</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="macroeconomicRiskScore">Macroeconomic Risk Score</Label>
                      <div className="flex items-center gap-4">
                        <Slider
                          id="macroeconomicRiskScore"
                          value={[formData.macroeconomicRiskScore]}
                          onValueChange={(value) => handleSliderChange("macroeconomicRiskScore", value)}
                          max={100}
                          step={1}
                          className="flex-1"
                        />
                        <span className="w-10 text-center">{formData.macroeconomicRiskScore}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="socialMediaSentiment">Social Media Sentiment</Label>
                      <div className="flex items-center gap-4">
                        <Slider
                          id="socialMediaSentiment"
                          value={[formData.socialMediaSentiment]}
                          onValueChange={(value) => handleSliderChange("socialMediaSentiment", value)}
                          max={100}
                          step={1}
                          className="flex-1"
                        />
                        <span className="w-10 text-center">{formData.socialMediaSentiment}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="regulatoryComplianceScore">Regulatory Compliance Score</Label>
                      <div className="flex items-center gap-4">
                        <Slider
                          id="regulatoryComplianceScore"
                          value={[formData.regulatoryComplianceScore]}
                          onValueChange={(value) => handleSliderChange("regulatoryComplianceScore", value)}
                          max={100}
                          step={1}
                          className="flex-1"
                        />
                        <span className="w-10 text-center">{formData.regulatoryComplianceScore}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex justify-between">
            <Button variant="outline" onClick={prevStep} disabled={currentStep === 0} className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Previous
            </Button>
            <Button onClick={nextStep} className="gap-2">
              {currentStep === formSteps.length - 1 ? "Submit" : "Next"}{" "}
              {currentStep === formSteps.length - 1 ? (
                <Check className="h-4 w-4" />
              ) : (
                <ArrowRight className="h-4 w-4" />
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

