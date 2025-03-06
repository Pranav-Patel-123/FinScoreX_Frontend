"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Check } from "lucide-react"

export default function ApiDocsPage() {
  const [copied, setCopied] = useState(null);

const copyToClipboard = (text, id) => {
  navigator.clipboard.writeText(text);
  setCopied(id);
  setTimeout(() => setCopied(null), 2000);
};



  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">API Documentation</h1>
          <p className="mt-2 text-gray-500">Integrate our AI-powered CIBIL Score System into your applications</p>
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="authentication">Authentication</TabsTrigger>
            <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
            <TabsTrigger value="examples">Examples</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>API Overview</CardTitle>
                <CardDescription>
                  Our RESTful API allows you to integrate AI-powered credit assessment into your applications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  The CreditAI API provides programmatic access to our AI-powered CIBIL Score System, allowing financial
                  institutions and fintechs to integrate real-time credit assessment capabilities into their existing
                  systems.
                </p>
                <h3 className="text-lg font-medium">Key Features</h3>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Real-time CIBIL score calculation based on comprehensive business data</li>
                  <li>Detailed risk assessment with factor-by-factor breakdown</li>
                  <li>Loan eligibility and interest rate recommendations</li>
                  <li>Historical payment analysis and trend detection</li>
                  <li>AI-powered recommendations for credit improvement</li>
                </ul>
                <h3 className="text-lg font-medium">Base URL</h3>
                <div className="relative rounded-md bg-gray-100 p-4">
                  <code className="text-sm">https://api.creditai.com/v1</code>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-2 h-8 w-8 p-0"
                    onClick={() => copyToClipboard("https://api.creditai.com/v1", "base-url")}
                  >
                    {copied === "base-url" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    <span className="sr-only">Copy</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Getting Started</CardTitle>
                <CardDescription>Follow these steps to start using the CreditAI API</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ol className="ml-6 list-decimal space-y-4">
                  <li>
                    <p className="font-medium">Sign up for an API key</p>
                    <p className="text-sm text-gray-500">
                      Create an account on our developer portal and generate an API key for authentication.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">Choose the right endpoints</p>
                    <p className="text-sm text-gray-500">
                      Review our available endpoints to determine which ones best suit your application needs.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">Implement authentication</p>
                    <p className="text-sm text-gray-500">Add your API key to the request headers for authentication.</p>
                  </li>
                  <li>
                    <p className="font-medium">Make your first API call</p>
                    <p className="text-sm text-gray-500">Start with a simple request to test your integration.</p>
                  </li>
                  <li>
                    <p className="font-medium">Handle responses</p>
                    <p className="text-sm text-gray-500">
                      Implement proper error handling and response processing in your application.
                    </p>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="authentication" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Authentication</CardTitle>
                <CardDescription>Secure your API requests with API keys</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  All API requests must include your API key in the request headers for authentication. API keys are
                  tied to your account and should be kept secure.
                </p>
                <h3 className="text-lg font-medium">API Key Header</h3>
                <div className="relative rounded-md bg-gray-100 p-4">
                  <code className="text-sm">X-API-Key: your_api_key_here</code>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-2 h-8 w-8 p-0"
                    onClick={() => copyToClipboard("X-API-Key: your_api_key_here", "api-key-header")}
                  >
                    {copied === "api-key-header" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    <span className="sr-only">Copy</span>
                  </Button>
                </div>
                <h3 className="text-lg font-medium">Example Request with Authentication</h3>
                <div className="relative rounded-md bg-gray-100 p-4">
                  <pre className="text-sm">
                    {`curl -X GET https://api.creditai.com/v1/business/score \\
  -H "X-API-Key: your_api_key_here" \\
  -H "Content-Type: application/json"`}
                  </pre>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-2 h-8 w-8 p-0"
                    onClick={() =>
                      copyToClipboard(
                        `curl -X GET https://api.creditai.com/v1/business/score \\
  -H "X-API-Key: your_api_key_here" \\
  -H "Content-Type: application/json"`,
                        "curl-example",
                      )
                    }
                  >
                    {copied === "curl-example" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    <span className="sr-only">Copy</span>
                  </Button>
                </div>
                <h3 className="text-lg font-medium">API Key Management</h3>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Generate and manage API keys from your developer dashboard</li>
                  <li>Rotate keys periodically for enhanced security</li>
                  <li>Set permissions and rate limits for each key</li>
                  <li>Monitor API key usage and detect suspicious activities</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="endpoints" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>API Endpoints</CardTitle>
                <CardDescription>Available endpoints for credit assessment and analysis</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">Business Credit Score</h3>
                    <div className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">GET</div>
                  </div>
                  <p className="text-sm text-gray-500">
                    Retrieve the CIBIL score and risk assessment for a business based on provided parameters.
                  </p>
                  <div className="rounded-md bg-gray-100 p-3">
                    <code className="text-sm">GET /business/score</code>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Required Parameters:</p>
                    <ul className="ml-6 list-disc space-y-1 text-sm text-gray-500">
                      <li>business_id: Unique identifier for the business</li>
                      <li>business_type: Type of business entity</li>
                      <li>industry_sector: Industry classification</li>
                      <li>years_in_operation: Number of years in business</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Optional Parameters:</p>
                    <ul className="ml-6 list-disc space-y-1 text-sm text-gray-500">
                      <li>monthly_revenue: Average monthly revenue</li>
                      <li>monthly_expenses: Average monthly expenses</li>
                      <li>loan_repayment_history: History of loan repayments</li>
                      <li>outstanding_debt: Current outstanding debt</li>
                      <li>And more...</li>
                    </ul>
                  </div>
                  <div className="rounded-md border-l-4 border-blue-500 bg-blue-50 p-4">
                    <p className="text-sm text-blue-800">
                      <span className="font-medium">Note:</span> The more parameters you provide, the more accurate the
                      credit assessment will be.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">Payment History Analysis</h3>
                    <div className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">GET</div>
                  </div>
                  <p className="text-sm text-gray-500">Retrieve detailed payment history analysis for a business.</p>
                  <div className="rounded-md bg-gray-100 p-3">
                    <code className="text-sm">GET /business/payment-history</code>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Required Parameters:</p>
                    <ul className="ml-6 list-disc space-y-1 text-sm text-gray-500">
                      <li>business_id: Unique identifier for the business</li>
                      <li>time_period: Period for analysis (e.g., "1y", "2y", "5y")</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">Loan Eligibility</h3>
                    <div className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">POST</div>
                  </div>
                  <p className="text-sm text-gray-500">
                    Calculate loan eligibility and recommended interest rates based on business credit profile.
                  </p>
                  <div className="rounded-md bg-gray-100 p-3">
                    <code className="text-sm">POST /business/loan-eligibility</code>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Request Body:</p>
                    <div className="relative rounded-md bg-gray-100 p-4">
                      <pre className="text-sm">
                        {`{
  "business_id": "string",
  "loan_amount": "number",
  "loan_term": "number",
  "loan_type": "string",
  "purpose": "string"
}`}
                      </pre>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-2 h-8 w-8 p-0"
                        onClick={() =>
                          copyToClipboard(
                            `{
  "business_id": "string",
  "loan_amount": "number",
  "loan_term": "number",
  "loan_type": "string",
  "purpose": "string"
}`,
                            "loan-eligibility-body",
                          )
                        }
                      >
                        {copied === "loan-eligibility-body" ? (
                          <Check className="h-4 w-4" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                        <span className="sr-only">Copy</span>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">Credit Improvement Recommendations</h3>
                    <div className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">GET</div>
                  </div>
                  <p className="text-sm text-gray-500">
                    Get AI-powered recommendations to improve business credit score.
                  </p>
                  <div className="rounded-md bg-gray-100 p-3">
                    <code className="text-sm">GET /business/recommendations</code>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Required Parameters:</p>
                    <ul className="ml-6 list-disc space-y-1 text-sm text-gray-500">
                      <li>business_id: Unique identifier for the business</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Response Format</CardTitle>
                <CardDescription>Standard response structure for all API endpoints</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>All API responses follow a consistent JSON format with the following structure:</p>
                <div className="relative rounded-md bg-gray-100 p-4">
                  <pre className="text-sm">
                    {`{
  "status": "success" | "error",
  "data": {
    // Response data specific to the endpoint
  },
  "meta": {
    "request_id": "string",
    "timestamp": "string"
  }
}`}
                  </pre>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-2 h-8 w-8 p-0"
                    onClick={() =>
                      copyToClipboard(
                        `{
  "status": "success" | "error",
  "data": {
    // Response data specific to the endpoint
  },
  "meta": {
    "request_id": "string",
    "timestamp": "string"
  }
}`,
                        "response-format",
                      )
                    }
                  >
                    {copied === "response-format" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    <span className="sr-only">Copy</span>
                  </Button>
                </div>
                <h3 className="text-lg font-medium">Error Responses</h3>
                <p className="text-sm text-gray-500">
                  When an error occurs, the response will include an error object with details:
                </p>
                <div className="relative rounded-md bg-gray-100 p-4">
                  <pre className="text-sm">
                    {`{
  "status": "error",
  "error": {
    "code": "string",
    "message": "string",
    "details": {}
  },
  "meta": {
    "request_id": "string",
    "timestamp": "string"
  }
}`}
                  </pre>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-2 h-8 w-8 p-0"
                    onClick={() =>
                      copyToClipboard(
                        `{
  "status": "error",
  "error": {
    "code": "string",
    "message": "string",
    "details": {}
  },
  "meta": {
    "request_id": "string",
    "timestamp": "string"
  }
}`,
                        "error-format",
                      )
                    }
                  >
                    {copied === "error-format" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    <span className="sr-only">Copy</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="examples" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Example: Get Business Credit Score</CardTitle>
                <CardDescription>Example request and response for retrieving a business credit score</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Request</h3>
                  <div className="relative rounded-md bg-gray-100 p-4">
                    <pre className="text-sm">
                      {`curl -X GET `}
                    </pre>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-2 h-8 w-8 p-0"
                      onClick={() =>
                        copyToClipboard(
                          `curl -X GET "https://api.creditai.com/v1/business/score?business_id=BIZ12345&business_type=private_limited&industry_sector=technology&years_in_operation=5" \\
  -H "X-API-Key: your_api_key_here" \\
  -H "Content-Type: application/json"`,
                          "score-request",
                        )
                      }
                    >
                      {copied === "score-request" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      <span className="sr-only">Copy</span>
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Response</h3>
                  <div className="relative rounded-md bg-gray-100 p-4">
                    <pre className="text-sm">
                      {`{
  "status": "success",
  "data": {
    "business_id": "BIZ12345",
    "cibil_score": 750,
    "score_factors": {
      "payment_history": {
        "score": 85,
        "weight": 35,
        "impact": "positive"
      },
      "credit_utilization": {
        "score": 70,
        "weight": 30,
        "impact": "positive"
      },
      "credit_mix": {
        "score": 60,
        "weight": 15,
        "impact": "moderate"
      },
      "business_growth": {
        "score": 90,
        "weight": 10,
        "impact": "positive"
      },
      "other_factors": {
        "score": 75,
        "weight": 10,
        "impact": "positive"
      }
    },
    "risk_assessment": {
      "level": "Low",
      "score": 25,
      "details": "Business shows strong financial health with minimal risk indicators."
    },
    "loan_eligibility": {
      "max_amount": 2500000,
      "interest_rate_range": {
        "min": 8.5,
        "max": 10.2
      }
    }
  },
  "meta": {
    "request_id": "req_123456789",
    "timestamp": "2023-06-15T10:30:45Z"
  }
}`}
                    </pre>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-2 h-8 w-8 p-0"
                      onClick={() =>
                        copyToClipboard(
                          `{
  "status": "success",
  "data": {
    "business_id": "BIZ12345",
    "cibil_score": 750,
    "score_factors": {
      "payment_history": {
        "score": 85,
        "weight": 35,
        "impact": "positive"
      },
      "credit_utilization": {
        "score": 70,
        "weight": 30,
        "impact": "positive"
      },
      "credit_mix": {
        "score": 60,
        "weight": 15,
        "impact": "moderate"
      },
      "business_growth": {
        "score": 90,
        "weight": 10,
        "impact": "positive"
      },
      "other_factors": {
        "score": 75,
        "weight": 10,
        "impact": "positive"
      }
    },
    "risk_assessment": {
      "level": "Low",
      "score": 25,
      "details": "Business shows strong financial health with minimal risk indicators."
    },
    "loan_eligibility": {
      "max_amount": 2500000,
      "interest_rate_range": {
        "min": 8.5,
        "max": 10.2
      }
    }
  },
  "meta": {
    "request_id": "req_123456789",
    "timestamp": "2023-06-15T10:30:45Z"
  }
}`,
                          "score-response",
                        )
                      }
                    >
                      {copied === "score-response" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      <span className="sr-only">Copy</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Code Samples</CardTitle>
                <CardDescription>Implementation examples in various programming languages</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="text-sm font-medium">JavaScript (Node.js)</h3>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 gap-1 text-xs"
                        onClick={() =>
                          copyToClipboard(
                            `const axios = require('axios');

async function getBusinessScore(businessId, businessType, industrySector, yearsInOperation) {
  try {
    const response = await axios.get('https://api.creditai.com/v1/business/score', {
      params: {
        business_id: businessId,
        business_type: businessType,
        industry_sector: industrySector,
        years_in_operation: yearsInOperation
      },
      headers: {
        'X-API-Key': 'your_api_key_here',
        'Content-Type': 'application/json'
      }
    });
    
    return response.data;
  } catch (error) {
    console.error('Error fetching business score:', error.response ? error.response.data : error.message);
    throw error;
  }
}

// Example usage
getBusinessScore('BIZ12345', 'private_limited', 'technology', 5)
  .then(data => console.log(data))
  .catch(err => console.error(err));`,
                            "js-example",
                          )
                        }
                      >
                        {copied === "js-example" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        Copy Code
                      </Button>
                    </div>
                    <div className="rounded-md bg-gray-100 p-4">
                      <pre className="text-sm">
                        {`const axios = require('axios');

async function getBusinessScore(businessId, businessType, industrySector, yearsInOperation) {
  try {
    const response = await axios.get('https://api.creditai.com/v1/business/score', {
      params: {
        business_id: businessId,
        business_type: businessType,
        industry_sector: industrySector,
        years_in_operation: yearsInOperation
      },
      headers: {
        'X-API-Key': 'your_api_key_here',
        'Content-Type': 'application/json'
      }
    });
    
    return response.data;
  } catch (error) {
    console.error('Error fetching business score:', error.response ? error.response.data : error.message);
    throw error;
  }
}

// Example usage
getBusinessScore('BIZ12345', 'private_limited', 'technology', 5)
  .then(data => console.log(data))
  .catch(err => console.error(err));`}
                      </pre>
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="text-sm font-medium">Python</h3>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 gap-1 text-xs"
                        onClick={() =>
                          copyToClipboard(
                            `import requests

def get_business_score(business_id, business_type, industry_sector, years_in_operation):
    url = "https://api.creditai.com/v1/business/score"
    
    params = {
        "business_id": business_id,
        "business_type": business_type,
        "industry_sector": industry_sector,
        "years_in_operation": years_in_operation
    }
    
    headers = {
        "X-API-Key": "your_api_key_here",
        "Content-Type": "application/json"
    }
    
    try:
        response = requests.get(url, params=params, headers=headers)
        response.raise_for_status()  # Raise exception for 4XX/5XX responses
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error fetching business score: {e}")
        raise

# Example usage
try:
    result = get_business_score("BIZ12345", "private_limited", "technology", 5)
    print(result)
except Exception as e:
    print(f"Failed to get business score: {e}")`,
                            "python-example",
                          )
                        }
                      >
                        {copied === "python-example" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        Copy Code
                      </Button>
                    </div>
                    <div className="rounded-md bg-gray-100 p-4">
                      <pre className="text-sm">
                        {`import requests

def get_business_score(business_id, business_type, industry_sector, years_in_operation):
    url = "https://api.creditai.com/v1/business/score"
    
    params = {
        "business_id": business_id,
        "business_type": business_type,
        "industry_sector": industry_sector,
        "years_in_operation": years_in_operation
    }
    
    headers = {
        "X-API-Key": "your_api_key_here",
        "Content-Type": "application/json"
    }
    
    try:
        response = requests.get(url, params=params, headers=headers)
        response.raise_for_status()  # Raise exception for 4XX/5XX responses
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error fetching business score: {e}")
        raise

# Example usage
try:
    result = get_business_score("BIZ12345", "private_limited", "technology", 5)
    print(result)
except Exception as e:
    print(f"Failed to get business score: {e}")
`}
                      </pre>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

