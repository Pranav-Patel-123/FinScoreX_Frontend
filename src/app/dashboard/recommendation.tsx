import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent 
} from "../../components/ui/card";
import { Clock, ThumbsUp, CheckCircle2 } from "lucide-react";

interface CreditScoreCardProps {
  score: number;
}

export default function CreditScoreCard({ score }: CreditScoreCardProps) {
  // Define score category & colors
  let category = "";
  let color = "";
  let suggestions: { title: string; impact: string; color: string; advice: string }[] = [];

  if (score <= 500) {
    category = "Low";
    color = "text-red-600";
    suggestions = [
      { title: "Payment History", impact: "Strong Negative Impact", color: "text-red-600", advice: "Make all payments on time to avoid defaults." },
      { title: "Credit Utilization", impact: "High Risk", color: "text-red-600", advice: "Reduce outstanding debt and avoid over-utilization of credit." },
      { title: "GST Compliance", impact: "Negative Impact", color: "text-red-600", advice: "Ensure timely GST filings to build financial credibility." }
    ];
  } else if (score <= 700) {
    category = "Medium";
    color = "text-amber-600";
    suggestions = [
      { title: "Payment History", impact: "Moderate Impact", color: "text-amber-600", advice: "Improve repayment consistency to boost score." },
      { title: "Credit Mix", impact: "Moderate Risk", color: "text-amber-600", advice: "Diversify credit types like trade credit or term loans." }
    ];
  } else {
    category = "High";
    color = "text-green-600";
    suggestions = [
      { title: "Overall Score", impact: "Strong Positive", color: "text-green-600", advice: "Keep maintaining good financial habits." }
    ];
  }

  return (
    <Card className="p-4 rounded-lg shadow-md bg-white">
      <CardHeader className="p-4">
        <CardTitle className="text-lg font-bold">Credit Score Analysis</CardTitle>
        <CardDescription className="text-gray-500">
          Insights & recommendations to improve your CIBIL score
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Score Overview */}
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold">
            Credit Score: <span className={color}>{category}</span>
          </h2>
          <span className={`text-sm font-medium ${color}`}>{score} / 900</span>
        </div>

        {/* Dynamic Suggestions */}
        {suggestions.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">{item.title}</h3>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-sm font-medium ${item.color}`}>{item.impact}</span>
                <ThumbsUp className={`h-4 w-4 ${item.color}`} />
              </div>
            </div>
            <p className="text-sm text-gray-500">{item.advice}</p>
            <div className={`mt-2 rounded-md ${item.color.replace("text-", "bg-")}-50 p-3`}>
              <div className="flex items-start gap-2">
                <CheckCircle2 className={`mt-0.5 h-4 w-4 ${item.color}`} />
                <div className="text-xs">
                  <p className="font-medium">Suggested Action</p>
                  <p>{item.advice}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
