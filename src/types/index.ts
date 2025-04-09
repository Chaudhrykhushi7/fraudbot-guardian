
export interface Transaction {
  Transaction_ID: number;
  Hospital_Name: string;
  Patient_ID: number;
  Doctor_ID: number;
  Department: string;
  Billing_Amount: number;
  Payment_Mode: string;
  Insurance_Claimed: string;
  Duplicate_Billing: string;
  Transaction_Time: string;
  Fraud_Flag: string;
  riskScore?: number; // Added for compatibility with existing UI
  riskFactors?: string[];
  status?: 'normal' | 'suspicious' | 'fraudulent'; // Added for compatibility with existing UI
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
  relatedTransaction?: string;
}
