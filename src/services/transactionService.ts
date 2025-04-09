
import { Transaction } from '@/types';

// Hospital transaction data
const hospitalTransactions: Transaction[] = [
  {
    "Transaction_ID": 700000,
    "Hospital_Name": "Marengo Asia Hospital, Faridabad",
    "Patient_ID": 8813,
    "Doctor_ID": 653,
    "Department": "Cardiology",
    "Billing_Amount": 58874.23,
    "Payment_Mode": "UPI",
    "Insurance_Claimed": "No",
    "Duplicate_Billing": "No",
    "Transaction_Time": "11/29/2023 12:33",
    "Fraud_Flag": "No",
    "riskScore": 20,
    "status": "normal"
  },
  {
    "Transaction_ID": 700001,
    "Hospital_Name": "Marengo Asia Hospital, Faridabad",
    "Patient_ID": 4954,
    "Doctor_ID": 943,
    "Department": "Cardiology",
    "Billing_Amount": 78574.49,
    "Payment_Mode": "UPI",
    "Insurance_Claimed": "No",
    "Duplicate_Billing": "No",
    "Transaction_Time": "1/22/2023 22:14",
    "Fraud_Flag": "No",
    "riskScore": 15,
    "status": "normal"
  },
  {
    "Transaction_ID": 700002,
    "Hospital_Name": "Marengo Asia Hospital, Faridabad",
    "Patient_ID": 7586,
    "Doctor_ID": 582,
    "Department": "Oncology",
    "Billing_Amount": 46798.76,
    "Payment_Mode": "Card",
    "Insurance_Claimed": "No",
    "Duplicate_Billing": "No",
    "Transaction_Time": "2/12/2023 11:31",
    "Fraud_Flag": "No",
    "riskScore": 18,
    "status": "normal"
  },
  {
    "Transaction_ID": 700003,
    "Hospital_Name": "Marengo Asia Hospital, Faridabad",
    "Patient_ID": 8178,
    "Doctor_ID": 767,
    "Department": "Cardiology",
    "Billing_Amount": 163261.14,
    "Payment_Mode": "UPI",
    "Insurance_Claimed": "No",
    "Duplicate_Billing": "No",
    "Transaction_Time": "8/12/2023 2:07",
    "Fraud_Flag": "No",
    "riskScore": 35,
    "status": "suspicious",
    "riskFactors": ["high amount", "unusual hour"]
  },
  {
    "Transaction_ID": 700004,
    "Hospital_Name": "Marengo Asia Hospital, Faridabad",
    "Patient_ID": 8076,
    "Doctor_ID": 526,
    "Department": "Cardiology",
    "Billing_Amount": 107742.91,
    "Payment_Mode": "Insurance",
    "Insurance_Claimed": "Yes",
    "Duplicate_Billing": "No",
    "Transaction_Time": "6/20/2023 7:31",
    "Fraud_Flag": "No",
    "riskScore": 25,
    "status": "normal"
  },
  {
    "Transaction_ID": 700005,
    "Hospital_Name": "Marengo Asia Hospital, Faridabad",
    "Patient_ID": 2393,
    "Doctor_ID": 827,
    "Department": "Cardiology",
    "Billing_Amount": 90844.01,
    "Payment_Mode": "Insurance",
    "Insurance_Claimed": "Yes",
    "Duplicate_Billing": "No",
    "Transaction_Time": "9/3/2023 16:21",
    "Fraud_Flag": "No",
    "riskScore": 28,
    "status": "normal"
  },
  {
    "Transaction_ID": 700006,
    "Hospital_Name": "Marengo Asia Hospital, Faridabad",
    "Patient_ID": 1069,
    "Doctor_ID": 968,
    "Department": "Oncology",
    "Billing_Amount": 107498.78,
    "Payment_Mode": "Insurance",
    "Insurance_Claimed": "Yes",
    "Duplicate_Billing": "No",
    "Transaction_Time": "5/27/2023 8:53",
    "Fraud_Flag": "No",
    "riskScore": 22,
    "status": "normal"
  },
  {
    "Transaction_ID": 700007,
    "Hospital_Name": "Marengo Asia Hospital, Faridabad",
    "Patient_ID": 2044,
    "Doctor_ID": 805,
    "Department": "Oncology",
    "Billing_Amount": 96766.11,
    "Payment_Mode": "Card",
    "Insurance_Claimed": "No",
    "Duplicate_Billing": "No",
    "Transaction_Time": "10/21/2023 14:13",
    "Fraud_Flag": "No",
    "riskScore": 20,
    "status": "normal"
  },
  {
    "Transaction_ID": 700008,
    "Hospital_Name": "Marengo Asia Hospital, Faridabad",
    "Patient_ID": 5141,
    "Doctor_ID": 976,
    "Department": "Cardiology",
    "Billing_Amount": 110573.99,
    "Payment_Mode": "Cash",
    "Insurance_Claimed": "No",
    "Duplicate_Billing": "No",
    "Transaction_Time": "6/22/2023 16:38",
    "Fraud_Flag": "No",
    "riskScore": 30,
    "status": "normal"
  },
  {
    "Transaction_ID": 700009,
    "Hospital_Name": "Marengo Asia Hospital, Faridabad",
    "Patient_ID": 5059,
    "Doctor_ID": 841,
    "Department": "Oncology",
    "Billing_Amount": 66492.64,
    "Payment_Mode": "Card",
    "Insurance_Claimed": "No",
    "Duplicate_Billing": "No",
    "Transaction_Time": "5/23/2023 11:07",
    "Fraud_Flag": "No",
    "riskScore": 15,
    "status": "normal"
  },
  {
    "Transaction_ID": 700010,
    "Hospital_Name": "Marengo Asia Hospital, Faridabad",
    "Patient_ID": 9280,
    "Doctor_ID": 609,
    "Department": "Orthopedics",
    "Billing_Amount": 69077.36,
    "Payment_Mode": "Card",
    "Insurance_Claimed": "No",
    "Duplicate_Billing": "No",
    "Transaction_Time": "8/11/2023 7:53",
    "Fraud_Flag": "No",
    "riskScore": 18,
    "status": "normal"
  },
  {
    "Transaction_ID": 700011,
    "Hospital_Name": "Marengo Asia Hospital, Faridabad",
    "Patient_ID": 4316,
    "Doctor_ID": 788,
    "Department": "Cardiology",
    "Billing_Amount": 160748.16,
    "Payment_Mode": "Insurance",
    "Insurance_Claimed": "Yes",
    "Duplicate_Billing": "No",
    "Transaction_Time": "1/31/2023 6:22",
    "Fraud_Flag": "No",
    "riskScore": 40,
    "status": "suspicious",
    "riskFactors": ["high amount", "unusual hour"]
  },
  {
    "Transaction_ID": 700012,
    "Hospital_Name": "Marengo Asia Hospital, Faridabad",
    "Patient_ID": 6858,
    "Doctor_ID": 824,
    "Department": "Orthopedics",
    "Billing_Amount": 4231.54,
    "Payment_Mode": "Cash",
    "Insurance_Claimed": "No",
    "Duplicate_Billing": "No",
    "Transaction_Time": "1/25/2024 18:54",
    "Fraud_Flag": "No",
    "riskScore": 10,
    "status": "normal"
  },
  {
    "Transaction_ID": 700013,
    "Hospital_Name": "Marengo Asia Hospital, Faridabad",
    "Patient_ID": 4405,
    "Doctor_ID": 678,
    "Department": "Cardiology",
    "Billing_Amount": 118586.13,
    "Payment_Mode": "Insurance",
    "Insurance_Claimed": "Yes",
    "Duplicate_Billing": "No",
    "Transaction_Time": "1/18/2023 15:34",
    "Fraud_Flag": "No",
    "riskScore": 32,
    "status": "normal"
  },
  {
    "Transaction_ID": 700014,
    "Hospital_Name": "Marengo Asia Hospital, Faridabad",
    "Patient_ID": 6127,
    "Doctor_ID": 981,
    "Department": "Cardiology",
    "Billing_Amount": 45656.03,
    "Payment_Mode": "Cash",
    "Insurance_Claimed": "No",
    "Duplicate_Billing": "No",
    "Transaction_Time": "8/29/2023 2:23",
    "Fraud_Flag": "No",
    "riskScore": 55,
    "status": "suspicious",
    "riskFactors": ["unusual hour", "payment method"]
  },
  {
    "Transaction_ID": 700015,
    "Hospital_Name": "Marengo Asia Hospital, Faridabad",
    "Patient_ID": 3137,
    "Doctor_ID": 544,
    "Department": "General Surgery",
    "Billing_Amount": 26415.36,
    "Payment_Mode": "Insurance",
    "Insurance_Claimed": "Yes",
    "Duplicate_Billing": "No",
    "Transaction_Time": "1/13/2024 7:08",
    "Fraud_Flag": "No",
    "riskScore": 20,
    "status": "normal"
  },
  {
    "Transaction_ID": 700016,
    "Hospital_Name": "Marengo Asia Hospital, Faridabad",
    "Patient_ID": 4846,
    "Doctor_ID": 792,
    "Department": "Cardiology",
    "Billing_Amount": 67545.77,
    "Payment_Mode": "UPI",
    "Insurance_Claimed": "No",
    "Duplicate_Billing": "No",
    "Transaction_Time": "1/18/2024 22:11",
    "Fraud_Flag": "No",
    "riskScore": 22,
    "status": "normal"
  },
  {
    "Transaction_ID": 700017,
    "Hospital_Name": "Marengo Asia Hospital, Faridabad",
    "Patient_ID": 4445,
    "Doctor_ID": 550,
    "Department": "General Surgery",
    "Billing_Amount": 187881.32,
    "Payment_Mode": "Insurance",
    "Insurance_Claimed": "Yes",
    "Duplicate_Billing": "No",
    "Transaction_Time": "6/1/2023 17:25",
    "Fraud_Flag": "No",
    "riskScore": 60,
    "status": "suspicious",
    "riskFactors": ["very high amount", "unusual pattern"]
  },
  {
    "Transaction_ID": 700018,
    "Hospital_Name": "Marengo Asia Hospital, Faridabad",
    "Patient_ID": 3006,
    "Doctor_ID": 804,
    "Department": "Cardiology",
    "Billing_Amount": 184992.22,
    "Payment_Mode": "Card",
    "Insurance_Claimed": "No",
    "Duplicate_Billing": "No",
    "Transaction_Time": "7/4/2023 15:19",
    "Fraud_Flag": "No",
    "riskScore": 75,
    "status": "suspicious",
    "riskFactors": ["very high amount", "unusual payment for amount"]
  },
  {
    "Transaction_ID": 700019,
    "Hospital_Name": "Marengo Asia Hospital, Faridabad",
    "Patient_ID": 5923,
    "Doctor_ID": 714,
    "Department": "Neurology",
    "Billing_Amount": 241578.89,
    "Payment_Mode": "Insurance",
    "Insurance_Claimed": "Yes",
    "Duplicate_Billing": "No",
    "Transaction_Time": "3/15/2023 9:42",
    "Fraud_Flag": "No",
    "riskScore": 45,
    "status": "suspicious",
    "riskFactors": ["very high amount"]
  },
  {
    "Transaction_ID": 700020,
    "Hospital_Name": "Marengo Asia Hospital, Faridabad",
    "Patient_ID": 7102,
    "Doctor_ID": 629,
    "Department": "Gastroenterology",
    "Billing_Amount": 37892.55,
    "Payment_Mode": "UPI",
    "Insurance_Claimed": "No",
    "Duplicate_Billing": "No",
    "Transaction_Time": "5/7/2023 14:37",
    "Fraud_Flag": "No",
    "riskScore": 20,
    "status": "normal"
  },
  {
    "Transaction_ID": 700021,
    "Hospital_Name": "Marengo Asia Hospital, Faridabad",
    "Patient_ID": 9281,
    "Doctor_ID": 764,
    "Department": "Pulmonology",
    "Billing_Amount": 89125.78,
    "Payment_Mode": "Card",
    "Insurance_Claimed": "No",
    "Duplicate_Billing": "No",
    "Transaction_Time": "2/19/2023 16:05",
    "Fraud_Flag": "No",
    "riskScore": 25,
    "status": "normal"
  },
  {
    "Transaction_ID": 700022,
    "Hospital_Name": "Marengo Asia Hospital, Faridabad",
    "Patient_ID": 8813,
    "Doctor_ID": 653,
    "Department": "Cardiology",
    "Billing_Amount": 58874.23,
    "Payment_Mode": "UPI",
    "Insurance_Claimed": "No",
    "Duplicate_Billing": "Yes",
    "Transaction_Time": "11/29/2023 12:43",
    "Fraud_Flag": "Yes",
    "riskScore": 90,
    "status": "fraudulent",
    "riskFactors": ["duplicate billing", "same patient", "same amount", "within 10 minutes"]
  },
  {
    "Transaction_ID": 700023,
    "Hospital_Name": "Marengo Asia Hospital, Faridabad",
    "Patient_ID": 6127,
    "Doctor_ID": 981,
    "Department": "Cardiology",
    "Billing_Amount": 142329.64,
    "Payment_Mode": "Insurance",
    "Insurance_Claimed": "Yes",
    "Duplicate_Billing": "No",
    "Transaction_Time": "12/3/2023 23:17",
    "Fraud_Flag": "Yes",
    "riskScore": 85,
    "status": "fraudulent",
    "riskFactors": ["unusual claim pattern", "late hour", "abnormal amount increase"]
  },
  {
    "Transaction_ID": 700024,
    "Hospital_Name": "Marengo Asia Hospital, Faridabad",
    "Patient_ID": 3547,
    "Doctor_ID": 582,
    "Department": "Orthopedics",
    "Billing_Amount": 32789.45,
    "Payment_Mode": "Card",
    "Insurance_Claimed": "No",
    "Duplicate_Billing": "No",
    "Transaction_Time": "9/28/2023 13:26",
    "Fraud_Flag": "No",
    "riskScore": 18,
    "status": "normal"
  }
];

export const getTransactions = (): Transaction[] => {
  return hospitalTransactions;
};

export const getTransaction = (id: string): Transaction | undefined => {
  const numericId = parseInt(id, 10);
  return hospitalTransactions.find(tx => tx.Transaction_ID === numericId);
};

export const analyzeTransaction = (details: string): Transaction => {
  // In a real application, this would use AI or ML to analyze
  // For now, we'll create a mock transaction based on the hospital data format
  const deptOptions = ["Cardiology", "Oncology", "Orthopedics", "Neurology", "General Surgery", "Gastroenterology", "Pulmonology"];
  const paymentOptions = ["Cash", "Card", "UPI", "Insurance"];
  
  const isHighAmount = details.includes('large') || details.includes('high');
  const isInsurance = details.includes('insurance');
  const isDuplicate = details.includes('duplicate');
  const isInternational = details.includes('international');
  
  const amount = isHighAmount ? 
    parseFloat((Math.random() * 200000 + 100000).toFixed(2)) : 
    parseFloat((Math.random() * 80000 + 20000).toFixed(2));
  
  const dept = deptOptions[Math.floor(Math.random() * deptOptions.length)];
  const payment = isInsurance ? "Insurance" : paymentOptions[Math.floor(Math.random() * paymentOptions.length)];
  
  // Determine fraud status based on keywords
  let fraudFlag = "No";
  let status: 'normal' | 'suspicious' | 'fraudulent' = 'normal';
  let riskScore = 20;
  let riskFactors: string[] = [];
  
  if (isDuplicate) {
    fraudFlag = "Yes";
    status = 'fraudulent';
    riskScore = 95;
    riskFactors = ['duplicate billing', 'potential fraud'];
  } else if (isInternational) {
    fraudFlag = "Yes";
    status = 'fraudulent';
    riskScore = 85;
    riskFactors = ['international transaction', 'unusual pattern'];
  } else if (isHighAmount) {
    status = 'suspicious';
    riskScore = 70;
    riskFactors = ['high amount', 'unusual pattern'];
  }
  
  return {
    Transaction_ID: 700000 + Math.floor(Math.random() * 10000),
    Hospital_Name: "Marengo Asia Hospital, Faridabad",
    Patient_ID: Math.floor(Math.random() * 10000),
    Doctor_ID: Math.floor(Math.random() * 500) + 500,
    Department: dept,
    Billing_Amount: amount,
    Payment_Mode: payment,
    Insurance_Claimed: payment === "Insurance" ? "Yes" : "No",
    Duplicate_Billing: isDuplicate ? "Yes" : "No",
    Transaction_Time: new Date().toLocaleString(),
    Fraud_Flag: fraudFlag,
    riskScore: riskScore,
    status: status,
    riskFactors: riskFactors.length > 0 ? riskFactors : undefined
  };
};
