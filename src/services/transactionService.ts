
import { Transaction } from '@/types';

// Mock transactions data
const mockTransactions: Transaction[] = [
  {
    id: 't1',
    date: '2025-04-08',
    amount: 125.99,
    merchant: 'Amazon',
    category: 'Shopping',
    description: 'Amazon.com purchase',
    status: 'normal',
    riskScore: 20,
  },
  {
    id: 't2',
    date: '2025-04-07',
    amount: 890.00,
    merchant: 'UnknownTechStore',
    category: 'Electronics',
    description: 'Electronic purchase from new merchant',
    status: 'suspicious',
    riskScore: 75,
    riskFactors: ['unusual merchant', 'high amount', 'different location']
  },
  {
    id: 't3',
    date: '2025-04-06',
    amount: 1299.99,
    merchant: 'International Transfer',
    category: 'Transfer',
    description: 'International wire transfer',
    status: 'fraudulent',
    riskScore: 92,
    riskFactors: ['international', 'unusual pattern', 'high amount', 'outside normal behavior']
  },
  {
    id: 't4',
    date: '2025-04-05',
    amount: 42.50,
    merchant: 'Starbucks',
    category: 'Food & Drink',
    description: 'Coffee shop purchase',
    status: 'normal',
    riskScore: 12,
  },
  {
    id: 't5',
    date: '2025-04-04',
    amount: 560.00,
    merchant: 'Unusual IP Purchase',
    category: 'Digital',
    description: 'Online purchase from new device',
    status: 'suspicious',
    riskScore: 68,
    riskFactors: ['new device', 'unusual time', 'different IP address']
  }
];

export const getTransactions = (): Transaction[] => {
  return mockTransactions;
};

export const getTransaction = (id: string): Transaction | undefined => {
  return mockTransactions.find(tx => tx.id === id);
};

export const analyzeTransaction = (details: string): Transaction => {
  // In a real application, this would use AI or ML to analyze
  // For now, we'll just return a mock suspicious transaction
  return {
    id: `new-${Date.now()}`,
    date: new Date().toISOString().split('T')[0],
    amount: parseFloat((Math.random() * 1000).toFixed(2)),
    merchant: details.includes('international') ? 'International Merchant' : 'Unknown Merchant',
    category: 'Other',
    description: details,
    status: details.includes('large') || details.includes('international') ? 'suspicious' : 'normal',
    riskScore: details.includes('large') || details.includes('international') ? 75 : 30,
    riskFactors: details.includes('large') ? ['high amount'] : 
                 details.includes('international') ? ['international transaction'] : []
  };
};
