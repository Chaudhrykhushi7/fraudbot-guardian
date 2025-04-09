
import { ChatMessage, Transaction } from '@/types';
import { getTransaction } from './transactionService';

const FRAUD_PATTERNS = [
  {
    pattern: 'international',
    response: 'International transactions can sometimes be higher risk, especially in certain countries known for fraud.'
  },
  {
    pattern: 'amount',
    response: 'Unusually large billing amounts that deviate from normal patterns can be a sign of fraud in healthcare transactions.'
  },
  {
    pattern: 'duplicate',
    response: 'Duplicate billing is a common fraud indicator where the same service is billed multiple times.'
  },
  {
    pattern: 'insurance',
    response: 'Insurance fraud can occur when claims are submitted for services that weren\'t provided or were unnecessarily performed.'
  },
  {
    pattern: 'department',
    response: 'Certain departments may have higher fraud risks due to the nature and cost of procedures performed.'
  },
  {
    pattern: 'time',
    response: 'Transactions made at unusual hours may indicate suspicious activity, especially when combined with other risk factors.'
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

  // Handle hospital-specific queries
  if (message.toLowerCase().includes('hospital') || message.toLowerCase().includes('marengo')) {
    return createBotMessage(`Marengo Asia Hospital in Faridabad is the medical facility where these transactions took place. Our system monitors all transactions for potential fraud indicators.`);
  }

  if (message.toLowerCase().includes('doctor') || message.toLowerCase().includes('patient')) {
    return createBotMessage(`Our system tracks both Doctor IDs and Patient IDs to identify unusual patterns or relationships that might indicate fraudulent activity. For privacy reasons, we don't display personal information about doctors or patients.`);
  }

  // Default responses based on message content
  if (message.toLowerCase().includes('help')) {
    return createBotMessage(`I can help you understand hospital transactions and identify potential fraud. You can ask me about specific transactions, why a transaction was flagged, or about common fraud patterns in healthcare billing.`);
  }
  
  if (message.toLowerCase().includes('fraud') || message.toLowerCase().includes('suspicious')) {
    return createBotMessage(`Healthcare fraud detection is based on various factors including unusual billing patterns, duplicate billing, insurance claim inconsistencies, department-specific risk factors, and transaction timing. Is there a specific aspect you'd like to know more about?`);
  }

  // Default response
  return createBotMessage(`I'm your healthcare fraud detection assistant. You can ask me about hospital transactions, why something might be flagged as suspicious, or about common fraud patterns in medical billing. How can I help you today?`);
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
  const { 
    Transaction_ID, 
    Department, 
    Billing_Amount, 
    Payment_Mode, 
    Insurance_Claimed,
    Duplicate_Billing,
    Fraud_Flag,
    status,
    riskScore,
    riskFactors
  } = transaction;
  
  if (Fraud_Flag === "Yes") {
    return `WARNING: This transaction (ID: ${Transaction_ID}) for ₹${Billing_Amount.toFixed(2)} in the ${Department} department has been flagged as fraudulent with a high risk score of ${riskScore}/100. Risk factors include: ${riskFactors?.join(', ')}. We recommend investigating immediately.`;
  }
  
  if (status === 'normal' || riskScore < 30) {
    return `This transaction (ID: ${Transaction_ID}) for ₹${Billing_Amount.toFixed(2)} in the ${Department} department appears normal with a low risk score of ${riskScore}/100. Payment was made via ${Payment_Mode}${Insurance_Claimed === "Yes" ? " with insurance claims" : ""}.`;
  } else if (status === 'suspicious' || (riskScore >= 30 && riskScore < 70)) {
    return `This transaction (ID: ${Transaction_ID}) for ₹${Billing_Amount.toFixed(2)} in the ${Department} department has been flagged as suspicious with a risk score of ${riskScore}/100. Payment via ${Payment_Mode}${Insurance_Claimed === "Yes" ? " with insurance claims" : ""}. Risk factors include: ${riskFactors?.join(', ')}.`;
  } else {
    return `WARNING: This transaction (ID: ${Transaction_ID}) for ₹${Billing_Amount.toFixed(2)} in the ${Department} department appears to be fraudulent with a high risk score of ${riskScore}/100. It has been flagged for: ${riskFactors?.join(', ')}. We recommend further investigation.`;
  }
};

const generateRiskExplanation = (transaction: Transaction): string => {
  const { 
    Department, 
    Billing_Amount, 
    Payment_Mode, 
    Insurance_Claimed,
    Duplicate_Billing,
    status,
    riskScore,
    riskFactors
  } = transaction;
  
  if ((status === 'normal' || riskScore < 30) && Duplicate_Billing === "No") {
    return `This transaction doesn't show any significant risk factors. It aligns with normal billing patterns for the ${Department} department.`;
  }
  
  let explanation = `This transaction was flagged because:\n`;
  
  if (Duplicate_Billing === "Yes") {
    explanation += `- Duplicate Billing: The system detected this as a duplicate of another transaction with the same patient and similar amount.\n`;
  }
  
  if (riskFactors && riskFactors.length > 0) {
    riskFactors.forEach(factor => {
      explanation += `- ${capitalizeFirstLetter(factor)}: `;
      
      if (factor.includes('amount')) {
        explanation += `The amount of ₹${Billing_Amount.toFixed(2)} is higher than typical for this department or procedure.\n`;
      } else if (factor.includes('duplicate')) {
        explanation += `This appears to be a duplicate bill for services already charged.\n`;
      } else if (factor.includes('pattern')) {
        explanation += `This transaction doesn't match typical billing patterns for this department or provider.\n`;
      } else if (factor.includes('hour') || factor.includes('time')) {
        explanation += `This transaction occurred at an unusual time which may indicate suspicious activity.\n`;
      } else if (factor.includes('insurance') || factor.includes('claim')) {
        explanation += `There are unusual patterns in the insurance claim for this transaction.\n`;
      } else if (factor.includes('same patient') || factor.includes('same amount')) {
        explanation += `Multiple charges for the same patient with similar amounts in a short timeframe.\n`;
      } else {
        explanation += `This represents an unusual activity pattern for hospital billing.\n`;
      }
    });
  }
  
  if (Insurance_Claimed === "Yes" && explanation.includes('amount')) {
    explanation += `\nNote: Insurance claims with unusually high amounts receive additional scrutiny in our fraud detection system.`;
  }
  
  return explanation;
};

const capitalizeFirstLetter = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
