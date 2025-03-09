"use client";  // Ensures it's a Client Component

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from "recharts";
import { ArrowUpRight, ArrowDownRight, Minus } from "lucide-react";
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;


// Define the data structure
interface ScoreData {
  _id: string;
  businessId: string;
  month: string;
  date: string;  // Include date field
  score: number;
  previousScore: number;
}

// Define API response structure
interface APIResponse {
  months: string[];
  data: ScoreData[];
}

export default function Dashboard() {
  const [historicalData, setHistoricalData] = useState<APIResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedMonth, setSelectedMonth] = useState("all");
  const [selectedBusiness, setSelectedBusiness] = useState("all");

  // Fetch data from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${backendUrl}/cibil`);
        if (!response.ok) throw new Error("Failed to fetch data");

        const data: APIResponse = await response.json();
        console.log("📊 Fetched CIBIL Scores:", data);

        setHistoricalData(data);
        setLoading(false);
      } catch (err) {
        console.error("🚨 Fetch error:", (err as Error).message);
        setError((err as Error).message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading data...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">Error: {error}</p>;
  if (!historicalData || historicalData.data.length === 0) return <p className="text-center mt-10">No data available</p>;

  // Extract unique months & business IDs
  const months = historicalData.months;
  const businessIds = [...new Set(historicalData.data.map(item => item.businessId))];

  // Filter data based on selected month & business
  const filteredData = historicalData.data.filter(item => {
    if (selectedMonth !== "all" && item.month !== selectedMonth) return false;
    if (selectedBusiness !== "all" && item.businessId !== selectedBusiness) return false;
    return true;
  });

  // Compute Chart Data for "All Businesses"
  const chartData = selectedBusiness === "all"
    ? months.map(month => {
        const scores = historicalData.data.filter(item => item.month === month).map(item => item.score);
        const averageScore = scores.length ? Math.round(scores.reduce((acc, curr) => acc + curr, 0) / scores.length) : 0;
        return { month, averageScore };
      })
    : filteredData;

  // Calculate Score Change
  const getScoreChange = (current: number, previous: number) => {
    const diff = current - previous;
    if (diff > 0) return { icon: ArrowUpRight, color: "text-green-600", text: `+${diff}` };
    if (diff < 0) return { icon: ArrowDownRight, color: "text-red-600", text: diff.toString() };
    return { icon: Minus, color: "text-gray-600", text: "0" };
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-xl shadow-lg p-6">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 space-y-4 lg:space-y-0">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Historical CIBIL Scores</h2>
            <p className="text-gray-600 mt-1">Track and analyze credit score trends over time</p>
          </div>
          
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Business ID Filter */}
            <select value={selectedBusiness} onChange={(e) => setSelectedBusiness(e.target.value)} className="px-4 py-2 border rounded-lg">
              <option value="all">All Businesses</option>
              {businessIds.map(business => <option key={business} value={business}>{business}</option>)}
            </select>
            
            {/* Month Filter */}
            <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)} className="px-4 py-2 border rounded-lg">
              <option value="all">All Months</option>
              {months.map(month => <option key={month} value={month}>{month}</option>)}
            </select>
          </div>
        </div>

        {/* Line Chart */}
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={selectedBusiness === "all" ? chartData : filteredData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="month" tick={{ fill: "#4B5563" }} />
              <YAxis domain={[300, 900]} tick={{ fill: "#4B5563" }} />
              <Tooltip contentStyle={{ backgroundColor: "#FFF", borderRadius: "0.5rem" }} />
              <Legend />
              <Line name="CIBIL Score" type="monotone" dataKey={selectedBusiness === "all" ? "averageScore" : "score"} stroke="#2563EB" strokeWidth={2} dot={{ fill: "#2563EB", r: 4 }} activeDot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Score Table */}
        <div className="mt-8">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium">Business ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium">Month</th>
                
                <th className="px-6 py-3 text-left text-xs font-medium">CIBIL Score</th>
                <th className="px-6 py-3 text-left text-xs font-medium">Change</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredData.map((item, index) => {
                const change = getScoreChange(item.score, item.previousScore);
                const ChangeIcon = change.icon;
                return (
                  <tr key={index}>
                    <td className="px-6 py-4">{item.businessId}</td>
                    <td className="px-6 py-4">{item.month}</td>
                    
                    <td className="px-6 py-4">{item.score}</td>
                    <td className="px-6 py-4 flex items-center"><ChangeIcon className="h-4 w-4 mr-1" />{change.text}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
