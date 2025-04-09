
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
  // Adding more data with calculated risk scores
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
    "riskScore": 22,
    "status": "normal"
  },
  {
    "Transaction_ID": 700023,
    "Hospital_Name": "Marengo Asia Hospital, Faridabad",
    "Patient_ID": 7257,
    "Doctor_ID": 532,
    "Department": "Cardiology",
    "Billing_Amount": 155608.1,
    "Payment_Mode": "UPI",
    "Insurance_Claimed": "No",
    "Duplicate_Billing": "No",
    "Transaction_Time": "1/2/2024 13:33",
    "Fraud_Flag": "Yes",
    "riskScore": 85,
    "status": "fraudulent",
    "riskFactors": ["unusual pattern", "high amount"]
  },
  {
    "Transaction_ID": 700032,
    "Hospital_Name": "Marengo Asia Hospital, Faridabad",
    "Patient_ID": 2174,
    "Doctor_ID": 882,
    "Department": "Cardiology",
    "Billing_Amount": 139680.32,
    "Payment_Mode": "UPI",
    "Insurance_Claimed": "No",
    "Duplicate_Billing": "No",
    "Transaction_Time": "2/25/2024 20:15",
    "Fraud_Flag": "Yes",
    "riskScore": 78,
    "status": "fraudulent",
    "riskFactors": ["unusual pattern", "high amount"]
  },
  {
    "Transaction_ID": 700038,
    "Hospital_Name": "Marengo Asia Hospital, Faridabad",
    "Patient_ID": 6976,
    "Doctor_ID": 690,
    "Department": "Cardiology",
    "Billing_Amount": 154828.99,
    "Payment_Mode": "UPI",
    "Insurance_Claimed": "No",
    "Duplicate_Billing": "No",
    "Transaction_Time": "6/11/2023 9:53",
    "Fraud_Flag": "Yes",
    "riskScore": 82,
    "status": "fraudulent",
    "riskFactors": ["unusual pattern", "high amount"]
  },
  {
    "Transaction_ID": 700067,
    "Hospital_Name": "Marengo Asia Hospital, Faridabad",
    "Patient_ID": 2073,
    "Doctor_ID": 778,
    "Department": "Neurology",
    "Billing_Amount": 199198.16,
    "Payment_Mode": "UPI",
    "Insurance_Claimed": "No",
    "Duplicate_Billing": "Yes",
    "Transaction_Time": "9/2/2023 21:01",
    "Fraud_Flag": "No",
    "riskScore": 65,
    "status": "suspicious",
    "riskFactors": ["duplicate billing", "high amount"]
  },
  {
    "Transaction_ID": 700086,
    "Hospital_Name": "Marengo Asia Hospital, Faridabad",
    "Patient_ID": 3384,
    "Doctor_ID": 927,
    "Department": "General Surgery",
    "Billing_Amount": 83419.99,
    "Payment_Mode": "UPI",
    "Insurance_Claimed": "No",
    "Duplicate_Billing": "Yes",
    "Transaction_Time": "1/21/2024 19:34",
    "Fraud_Flag": "Yes",
    "riskScore": 88,
    "status": "fraudulent",
    "riskFactors": ["duplicate billing", "unusual pattern"]
  },
  {
    "Transaction_ID": 700098,
    "Hospital_Name": "Marengo Asia Hospital, Faridabad",
    "Patient_ID": 6902,
    "Doctor_ID": 949,
    "Department": "Pediatrics",
    "Billing_Amount": 146438.21,
    "Payment_Mode": "Cash",
    "Insurance_Claimed": "No",
    "Duplicate_Billing": "No",
    "Transaction_Time": "1/12/2023 20:51",
    "Fraud_Flag": "Yes",
    "riskScore": 75,
    "status": "fraudulent",
    "riskFactors": ["high cash payment", "unusual hour"]
  },
  {
    "Transaction_ID": 700108,
    "Hospital_Name": "Marengo Asia Hospital, Faridabad",
    "Patient_ID": 1182,
    "Doctor_ID": 726,
    "Department": "Neurology",
    "Billing_Amount": 49951.18,
    "Payment_Mode": "Cash",
    "Insurance_Claimed": "No",
    "Duplicate_Billing": "Yes",
    "Transaction_Time": "3/1/2023 5:45",
    "Fraud_Flag": "No",
    "riskScore": 60,
    "status": "suspicious",
    "riskFactors": ["duplicate billing", "unusual hour"]
  },
  {
    "Transaction_ID": 700135,
    "Hospital_Name": "Marengo Asia Hospital, Faridabad",
    "Patient_ID": 2690,
    "Doctor_ID": 889,
    "Department": "Cardiology",
    "Billing_Amount": 185246.16,
    "Payment_Mode": "Cash",
    "Insurance_Claimed": "No",
    "Duplicate_Billing": "No",
    "Transaction_Time": "4/14/2023 15:39",
    "Fraud_Flag": "Yes",
    "riskScore": 80,
    "status": "fraudulent",
    "riskFactors": ["very high cash payment", "unusual pattern"]
  },
  {
    "Transaction_ID": 700176,
    "Hospital_Name": "Marengo Asia Hospital, Faridabad",
    "Patient_ID": 7197,
    "Doctor_ID": 681,
    "Department": "Cardiology",
    "Billing_Amount": 64779.27,
    "Payment_Mode": "UPI",
    "Insurance_Claimed": "No",
    "Duplicate_Billing": "No",
    "Transaction_Time": "3/22/2023 12:20",
    "Fraud_Flag": "Yes",
    "riskScore": 72,
    "status": "fraudulent",
    "riskFactors": ["unusual pattern"]
  },
  {
    "Transaction_ID": 700180,
    "Hospital_Name": "Marengo Asia Hospital, Faridabad",
    "Patient_ID": 7061,
    "Doctor_ID": 549,
    "Department": "Cardiology",
    "Billing_Amount": 194722.91,
    "Payment_Mode": "UPI",
    "Insurance_Claimed": "No",
    "Duplicate_Billing": "No",
    "Transaction_Time": "10/30/2023 11:33",
    "Fraud_Flag": "Yes",
    "riskScore": 86,
    "status": "fraudulent",
    "riskFactors": ["very high amount", "unusual payment method"]
  },
  {
    "Transaction_ID": 700201,
    "Hospital_Name": "Marengo Asia Hospital, Faridabad",
    "Patient_ID": 9958,
    "Doctor_ID": 751,
    "Department": "Cardiology",
    "Billing_Amount": 133285.81,
    "Payment_Mode": "Card",
    "Insurance_Claimed": "No",
    "Duplicate_Billing": "No",
    "Transaction_Time": "12/30/2023 9:25",
    "Fraud_Flag": "Yes",
    "riskScore": 70,
    "status": "fraudulent",
    "riskFactors": ["unusual pattern"]
  },
  {
    "Transaction_ID": 700265,
    "Hospital_Name": "Marengo Asia Hospital, Faridabad",
    "Patient_ID": 2430,
    "Doctor_ID": 938,
    "Department": "Cardiology",
    "Billing_Amount": 46766.03,
    "Payment_Mode": "Card",
    "Insurance_Claimed": "No",
    "Duplicate_Billing": "Yes",
    "Transaction_Time": "9/4/2023 8:54",
    "Fraud_Flag": "Yes",
    "riskScore": 82,
    "status": "fraudulent",
    "riskFactors": ["duplicate billing"]
  },
  {
    "Transaction_ID": 700267,
    "Hospital_Name": "Marengo Asia Hospital, Faridabad",
    "Patient_ID": 3109,
    "Doctor_ID": 540,
    "Department": "Neurology",
    "Billing_Amount": 49998.28,
    "Payment_Mode": "Cash",
    "Insurance_Claimed": "No",
    "Duplicate_Billing": "No",
    "Transaction_Time": "8/31/2023 15:50",
    "Fraud_Flag": "Yes",
    "riskScore": 68,
    "status": "fraudulent",
    "riskFactors": ["unusual pattern"]
  },
  {
    "Transaction_ID": 700268,
    "Hospital_Name": "Marengo Asia Hospital, Faridabad",
    "Patient_ID": 6221,
    "Doctor_ID": 673,
    "Department": "Cardiology",
    "Billing_Amount": 61706.98,
    "Payment_Mode": "Cash",
    "Insurance_Claimed": "No",
    "Duplicate_Billing": "No",
    "Transaction_Time": "9/8/2023 23:09",
    "Fraud_Flag": "Yes",
    "riskScore": 65,
    "status": "fraudulent",
    "riskFactors": ["unusual hour", "unusual pattern"]
  },
  {
    "Transaction_ID": 700275,
    "Hospital_Name": "Marengo Asia Hospital, Faridabad",
    "Patient_ID": 6843,
    "Doctor_ID": 851,
    "Department": "Neurology",
    "Billing_Amount": 22534.24,
    "Payment_Mode": "UPI",
    "Insurance_Claimed": "No",
    "Duplicate_Billing": "No",
    "Transaction_Time": "11/14/2023 20:18",
    "Fraud_Flag": "Yes",
    "riskScore": 55,
    "status": "suspicious",
    "riskFactors": ["unusual pattern"]
  },
  {
    "Transaction_ID": 700299,
    "Hospital_Name": "Marengo Asia Hospital, Faridabad",
    "Patient_ID": 8286,
    "Doctor_ID": 909,
    "Department": "Oncology",
    "Billing_Amount": 62973.7,
    "Payment_Mode": "Cash",
    "Insurance_Claimed": "No",
    "Duplicate_Billing": "No",
    "Transaction_Time": "4/7/2023 2:08",
    "Fraud_Flag": "Yes",
    "riskScore": 68,
    "status": "fraudulent",
    "riskFactors": ["unusual hour", "cash payment"]
  },
  {
    "Transaction_ID": 700303,
    "Hospital_Name": "Marengo Asia Hospital, Faridabad",
    "Patient_ID": 4837,
    "Doctor_ID": 988,
    "Department": "General Surgery",
    "Billing_Amount": 139549.38,
    "Payment_Mode": "Card",
    "Insurance_Claimed": "No",
    "Duplicate_Billing": "No",
    "Transaction_Time": "2/18/2023 16:36",
    "Fraud_Flag": "Yes",
    "riskScore": 72,
    "status": "fraudulent",
    "riskFactors": ["high amount", "unusual pattern"]
  },
  {
    "Transaction_ID": 700305,
    "Hospital_Name": "Marengo Asia Hospital, Faridabad",
    "Patient_ID": 3789,
    "Doctor_ID": 893,
    "Department": "Cardiology",
    "Billing_Amount": 26099.96,
    "Payment_Mode": "Card",
    "Insurance_Claimed": "No",
    "Duplicate_Billing": "No",
    "Transaction_Time": "12/8/2023 0:50",
    "Fraud_Flag": "Yes",
    "riskScore": 65,
    "status": "fraudulent",
    "riskFactors": ["unusual hour"]
  },
  {
    "Transaction_ID": 700323,
    "Hospital_Name": "Marengo Asia Hospital, Faridabad",
    "Patient_ID": 9673,
    "Doctor_ID": 668,
    "Department": "Cardiology",
    "Billing_Amount": 147526.78,
    "Payment_Mode": "UPI",
    "Insurance_Claimed": "No",
    "Duplicate_Billing": "No",
    "Transaction_Time": "1/31/2023 8:13",
    "Fraud_Flag": "Yes",
    "riskScore": 75,
    "status": "fraudulent",
    "riskFactors": ["high amount", "unusual pattern"]
  },
  {
    "Transaction_ID": 700333,
    "Hospital_Name": "Marengo Asia Hospital, Faridabad",
    "Patient_ID": 1923,
    "Doctor_ID": 887,
    "Department": "Cardiology",
    "Billing_Amount": 124864.02,
    "Payment_Mode": "UPI",
    "Insurance_Claimed": "No",
    "Duplicate_Billing": "No",
    "Transaction_Time": "12/10/2023 6:21",
    "Fraud_Flag": "Yes",
    "riskScore": 68,
    "status": "fraudulent",
    "riskFactors": ["unusual hour", "high amount"]
  },
  {
    "Transaction_ID": 700347,
    "Hospital_Name": "Marengo Asia Hospital, Faridabad",
    "Patient_ID": 4994,
    "Doctor_ID": 923,
    "Department": "Oncology",
    "Billing_Amount": 19040.41,
    "Payment_Mode": "Card",
    "Insurance_Claimed": "No",
    "Duplicate_Billing": "No",
    "Transaction_Time": "3/9/2023 1:16",
    "Fraud_Flag": "Yes",
    "riskScore": 60,
    "status": "suspicious",
    "riskFactors": ["unusual hour"]
  },
  {
    "Transaction_ID": 700358,
    "Hospital_Name": "Marengo Asia Hospital, Faridabad",
    "Patient_ID": 6811,
    "Doctor_ID": 679,
    "Department": "Cardiology",
    "Billing_Amount": 26285.44,
    "Payment_Mode": "Cash",
    "Insurance_Claimed": "No",
    "Duplicate_Billing": "No",
    "Transaction_Time": "10/14/2023 7:40",
    "Fraud_Flag": "Yes",
    "riskScore": 55,
    "status": "suspicious",
    "riskFactors": ["unusual pattern"]
  },
  {
    "Transaction_ID": 700371,
    "Hospital_Name": "Marengo Asia Hospital, Faridabad",
    "Patient_ID": 5560,
    "Doctor_ID": 758,
    "Department": "Cardiology",
    "Billing_Amount": 49307.82,
    "Payment_Mode": "Insurance",
    "Insurance_Claimed": "Yes",
    "Duplicate_Billing": "No",
    "Transaction_Time": "2/6/2024 1:57",
    "Fraud_Flag": "Yes",
    "riskScore": 74,
    "status": "fraudulent",
    "riskFactors": ["unusual hour", "insurance claim"]
  },
  {
    "Transaction_ID": 700402,
    "Hospital_Name": "Marengo Asia Hospital, Faridabad",
    "Patient_ID": 3713,
    "Doctor_ID": 659,
    "Department": "Cardiology",
    "Billing_Amount": 20073.08,
    "Payment_Mode": "UPI",
    "Insurance_Claimed": "No",
    "Duplicate_Billing": "No",
    "Transaction_Time": "1/23/2024 18:16",
    "Fraud_Flag": "Yes",
    "riskScore": 58,
    "status": "suspicious",
    "riskFactors": ["unusual pattern"]
  },
  {
    "Transaction_ID": 700440,
    "Hospital_Name": "Marengo Asia Hospital, Faridabad",
    "Patient_ID": 8710,
    "Doctor_ID": 622,
    "Department": "Cardiology",
    "Billing_Amount": 166231.73,
    "Payment_Mode": "Cash",
    "Insurance_Claimed": "No",
    "Duplicate_Billing": "No",
    "Transaction_Time": "1/10/2023 23:07",
    "Fraud_Flag": "Yes",
    "riskScore": 90,
    "status": "fraudulent",
    "riskFactors": ["very high cash payment", "unusual hour"]
  },
  {
    "Transaction_ID": 700452,
    "Hospital_Name": "Marengo Asia Hospital, Faridabad",
    "Patient_ID": 4664,
    "Doctor_ID": 640,
    "Department": "Cardiology",
    "Billing_Amount": 46316.36,
    "Payment_Mode": "Insurance",
    "Insurance_Claimed": "Yes",
    "Duplicate_Billing": "No",
    "Transaction_Time": "11/11/2023 16:42",
    "Fraud_Flag": "Yes",
    "riskScore": 65,
    "status": "fraudulent",
    "riskFactors": ["unusual insurance pattern"]
  },
  {
    "Transaction_ID": 700453,
    "Hospital_Name": "Marengo Asia Hospital, Faridabad",
    "Patient_ID": 8687,
    "Doctor_ID": 910,
    "Department": "Cardiology",
    "Billing_Amount": 190065.96,
    "Payment_Mode": "Insurance",
    "Insurance_Claimed": "Yes",
    "Duplicate_Billing": "No",
    "Transaction_Time": "1/31/2023 12:27",
    "Fraud_Flag": "Yes",
    "riskScore": 88,
    "status": "fraudulent",
    "riskFactors": ["very high amount", "insurance irregularity"]
  },
  {
    "Transaction_ID": 700469,
    "Hospital_Name": "Marengo Asia Hospital, Faridabad",
    "Patient_ID": 6256,
    "Doctor_ID": 966,
    "Department": "Cardiology",
    "Billing_Amount": 190267.18,
    "Payment_Mode": "Insurance",
    "Insurance_Claimed": "Yes",
    "Duplicate_Billing": "No",
    "Transaction_Time": "12/18/2023 23:25",
    "Fraud_Flag": "Yes",
    "riskScore": 85,
    "status": "fraudulent",
    "riskFactors": ["very high amount", "unusual hour"]
  },
  {
    "Transaction_ID": 700472,
    "Hospital_Name": "Marengo Asia Hospital, Faridabad",
    "Patient_ID": 7956,
    "Doctor_ID": 517,
    "Department": "Oncology",
    "Billing_Amount": 161840.08,
    "Payment_Mode": "Cash",
    "Insurance_Claimed": "No",
    "Duplicate_Billing": "No",
    "Transaction_Time": "3/20/2023 13:35",
    "Fraud_Flag": "Yes",
    "riskScore": 92,
    "status": "fraudulent",
    "riskFactors": ["very high cash payment"]
  }
];

// Add normal transactions
for (let i = 6; i < 20; i++) {
  if (![23, 32, 38, 67, 86, 98, 108, 135, 176, 180, 201].includes(i)) {
    hospitalTransactions.push({
      "Transaction_ID": 700000 + i,
      "Hospital_Name": "Marengo Asia Hospital, Faridabad",
      "Patient_ID": Math.floor(Math.random() * 9000) + 1000,
      "Doctor_ID": Math.floor(Math.random() * 400) + 600,
      "Department": ["Cardiology", "Oncology", "Orthopedics", "Neurology", "General Surgery", "Pediatrics"][Math.floor(Math.random() * 6)],
      "Billing_Amount": Math.random() * 100000 + 10000,
      "Payment_Mode": ["Cash", "Card", "UPI", "Insurance"][Math.floor(Math.random() * 4)],
      "Insurance_Claimed": Math.random() > 0.5 ? "Yes" : "No",
      "Duplicate_Billing": "No",
      "Transaction_Time": `${Math.floor(Math.random() * 12 + 1)}/${Math.floor(Math.random() * 28 + 1)}/2023 ${Math.floor(Math.random() * 24)}:${Math.floor(Math.random() * 60)}`,
      "Fraud_Flag": "No",
      "riskScore": Math.floor(Math.random() * 25) + 10,
      "status": "normal"
    });
  }
}

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
  const deptOptions = ["Cardiology", "Oncology", "Orthopedics", "Neurology", "General Surgery", "Pediatrics"];
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
