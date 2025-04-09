
export interface Transaction {
  id: string;
  date: string;
  amount: number;
  merchant: string;
  category: string;
  description: string;
  status: 'normal' | 'suspicious' | 'fraudulent';
  riskScore: number;
  riskFactors?: string[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
  relatedTransaction?: string;
}
