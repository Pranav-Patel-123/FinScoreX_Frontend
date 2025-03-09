"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { 
    Building2, DollarSign, History, 
    ChevronRight, ChevronLeft, CheckCircle2 
} from "lucide-react";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;


const BusinessDataForm = () => {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        Business_ID: "BUS123456",
        Business_Type: "Private Limited",
        Industry_Sector: "Technology",
        Years_in_Operation: 15,
        Monthly_Revenue: 500000,
        Monthly_Expenses: 200000,
        Loan_Repayment_History: "Early Payment",
        Outstanding_Debt: 1000,
        Cash_Flow_Stability_Score: 100,
        GST_Filings: 12,
        Supplier_Payment_Delay: 0,
        Ecommerce_Sales_Volume: 100000,
        Digital_Invoice_Payment_Rate: 100,
        Credit_Default_History: 0,
        Business_Growth_Rate: 25,
        Macroeconomic_Risk_Score: 5,
        Social_Media_Sentiment: 100,
        Regulatory_Compliance_Score: 100,
        Month: "March",
    });

    const [loading, setLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value === "" ? "" : isNaN(value) ? value : Number(value),
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setResponseMessage("");

        try {
            const response = await fetch(`${backendUrl}/calculate`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Failed to submit data");
            }

            const result = await response.json();
            const score = result.AI_Credit_Score.toFixed(2);

            // Redirect to /dashboard/ with the calculated score
            router.push(`/dashboard?score=${score}`);
        } catch (error) {
            setResponseMessage("❌ Error: Failed to fetch AI Credit Score.");
        } finally {
            setLoading(false);
        }
    };

    const formFields = {
        1: ["Business_ID", "Business_Type", "Industry_Sector", "Years_in_Operation"],
        2: ["Monthly_Revenue", "Monthly_Expenses", "Outstanding_Debt", "Cash_Flow_Stability_Score"],
        3: ["Loan_Repayment_History", "Credit_Default_History", "GST_Filings", "Supplier_Payment_Delay", "Ecommerce_Sales_Volume", "Digital_Invoice_Payment_Rate", "Business_Growth_Rate", "Macroeconomic_Risk_Score", "Social_Media_Sentiment", "Regulatory_Compliance_Score", "Month"]
    };

    const stepTitles = {
        1: { title: "Business Information", icon: Building2 },
        2: { title: "Financial Details", icon: DollarSign },
        3: { title: "Credit History & Additional Metrics", icon: History }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                
                {/* Progress Steps */}
                <div className="mb-8">
                    <div className="flex justify-between items-center">
                        {Object.entries(stepTitles).map(([step, { title, icon: Icon }]) => (
                            <div key={step} className="flex flex-col items-center w-1/3">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                    parseInt(step) === currentStep
                                        ? "bg-blue-600 text-white"
                                        : parseInt(step) < currentStep
                                        ? "bg-green-500 text-white"
                                        : "bg-gray-200 text-gray-500"
                                }`}>
                                    {parseInt(step) < currentStep ? (
                                        <CheckCircle2 className="w-6 h-6" />
                                    ) : (
                                        <Icon className="w-5 h-5" />
                                    )}
                                </div>
                                <p className={`mt-2 text-sm font-medium ${
                                    parseInt(step) === currentStep ? "text-blue-600" : "text-gray-500"
                                }`}>{title}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Form Card */}
                <div className="bg-white rounded-xl shadow-xl p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">{stepTitles[currentStep]?.title}</h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {formFields[currentStep]?.map((key) => (
                                <div key={key}>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        {key.replace(/_/g, " ")}
                                    </label>
                                    <input
                                        type={typeof formData[key] === "number" ? "number" : "text"}
                                        name={key}
                                        value={formData[key] || ""}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                                        placeholder={`Enter ${key.replace(/_/g, " ")}`}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex justify-between mt-8">
                            {currentStep > 1 && (
                                <button
                                    type="button"
                                    onClick={() => setCurrentStep(currentStep - 1)}
                                    className="flex items-center px-6 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-150"
                                >
                                    <ChevronLeft className="w-5 h-5 mr-2" />
                                    Previous
                                </button>
                            )}
                            {currentStep < 3 ? (
                                <button
                                    type="button"
                                    onClick={() => setCurrentStep(currentStep + 1)}
                                    className="flex items-center px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-150 ml-auto"
                                >
                                    Next
                                    <ChevronRight className="w-5 h-5 ml-2" />
                                </button>
                            ) : (
                                <button type="submit" className="px-8 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition duration-150 ml-auto" disabled={loading}>
                                    {loading ? "Processing..." : "Calculate Score"}
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BusinessDataForm;
