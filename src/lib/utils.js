import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// /lib/utils.js or /lib/utils.ts
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const calculateCibilScore = (formData) => {
  // This is a simplified scoring algorithm - in real world this would be much more complex
  let score = 750; // Base score
  
  // Deduct points for payment delays
  if (formData.loanRepaymentHistory === 'delayed') score -= 100;
  
  // Add points for business longevity
  score += Math.min(formData.yearsInOperation * 10, 50);
  
  // Adjust for cash flow stability
  score += (formData.cashFlowStabilityScore / 100) * 50;
  
  // Cap the score between 300 and 900
  return Math.max(300, Math.min(900, score));
};

export const getRiskLevel = (score) => {
  if (score >= 800) return { level: "Very Low", color: "text-green-600" };
  if (score >= 750) return { level: "Low", color: "text-green-500" };
  if (score >= 650) return { level: "Medium", color: "text-yellow-600" };
  if (score >= 550) return { level: "High", color: "text-orange-600" };
  return { level: "Very High", color: "text-red-600" };
};
