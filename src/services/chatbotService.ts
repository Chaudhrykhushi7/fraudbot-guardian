
import { ChatMessage, Transaction } from '@/types';
import { getTransaction } from './transactionService';

const FRAUD_PATTERNS = [
  {
    pattern: 'international',
    response: 'International transactions can sometimes be higher risk, especially in certain countries known for fraud.'
  },
  {
    pattern: 'amount',
    response: 'Unusually large transaction amounts that deviate from your normal spending patterns can be a sign of fraud.'
  },
  {
    pattern: 'location',
    response: 'Transactions made from unusual locations or IP addresses different from your normal patterns may indicate account compromise.'
  },
  {
    pattern: 'merchant',
    response: 'New or unknown merchants, especially those without established reputations, can present higher fraud risks.'
  },
  {
    pattern: 'frequency',
    response: 'Multiple transactions in rapid succession can be a sign that someone is testing your card or trying to maximize charges before detection.'
  }
];

export const generateBotResponse = (message: string, transaction?: string): ChatMessage => {
  // Check if message is about a specific transaction
  if (transaction) {
    const tx = getTransaction(transaction);
    if (!tx) {
      return createBotMessage(`I couldn't find that transaction. Please try another one.`);
    }

    if (message.toLowerCase().includes('why')) {
      return createBotMessage(generateRiskExplanation(tx));
    }
    
    return createBotMessage(generateTransactionAnalysis(tx));
  }

  // Handle general fraud questions
  for (const pattern of FRAUD_PATTERNS) {
    if (message.toLowerCase().includes(pattern.pattern)) {
      return createBotMessage(pattern.response);
    }
  }

  // Default responses based on message content
  if (message.toLowerCase().includes('help')) {
    return createBotMessage(`I can help you understand your transactions and identify potential fraud. You can ask me about specific transactions, why a transaction was flagged, or about common fraud patterns.`);
  }
  
  if (message.toLowerCase().includes('fraud') || message.toLowerCase().includes('suspicious')) {
    return createBotMessage(`Fraud detection is based on various factors including unusual spending patterns, location discrepancies, transaction amount, merchant reputation, and frequency of transactions. Is there a specific aspect you'd like to know more about?`);
  }

  // Default response
  return createBotMessage(`I'm your fraud detection assistant. You can ask me about your transactions, why something might be flagged as suspicious, or about common fraud patterns. How can I help you today?`);
};

const createBotMessage = (text: string): ChatMessage => {
  return {
    id: `bot-${Date.now()}`,
    sender: 'bot',
    text: text,
    timestamp: new Date(),
  };
};

const generateTransactionAnalysis = (transaction: Transaction): string => {
  if (transaction.status === 'normal') {
    return `This transaction for $${transaction.amount} at ${transaction.merchant} appears normal with a low risk score of ${transaction.riskScore}/100.`;
  } else if (transaction.status === 'suspicious') {
    return `This transaction for $${transaction.amount} at ${transaction.merchant} has been flagged as suspicious with a risk score of ${transaction.riskScore}/100. Risk factors include: ${transaction.riskFactors?.join(', ')}.`;
  } else {
    return `WARNING: This transaction for $${transaction.amount} at ${transaction.merchant} appears to be fraudulent with a high risk score of ${transaction.riskScore}/100. It has been flagged for: ${transaction.riskFactors?.join(', ')}. We recommend contacting your bank immediately.`;
  }
};

const generateRiskExplanation = (transaction: Transaction): string => {
  if (transaction.status === 'normal') {
    return `This transaction doesn't show any significant risk factors. It aligns with your normal spending patterns.`;
  }
  
  let explanation = `This transaction was flagged because:\n`;
  
  if (transaction.riskFactors && transaction.riskFactors.length > 0) {
    transaction.riskFactors.forEach(factor => {
      explanation += `- ${capitalizeFirstLetter(factor)}: `;
      
      if (factor.includes('amount')) {
        explanation += `The amount of $${transaction.amount} is higher than your typical spending in this category.\n`;
      } else if (factor.includes('merchant')) {
        explanation += `${transaction.merchant} is not a merchant you've transacted with before.\n`;
      } else if (factor.includes('location')) {
        explanation += `This transaction occurred in a location different from your usual activity.\n`;
      } else if (factor.includes('pattern')) {
        explanation += `This transaction doesn't match your typical spending patterns.\n`;
      } else if (factor.includes('international')) {
        explanation += `International transactions carry additional risk factors.\n`;
      } else if (factor.includes('device') || factor.includes('IP')) {
        explanation += `This transaction was made from a device or IP address not previously associated with your account.\n`;
      } else {
        explanation += `This is an unusual activity for your account.\n`;
      }
    });
  }
  
  return explanation;
};

const capitalizeFirstLetter = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
