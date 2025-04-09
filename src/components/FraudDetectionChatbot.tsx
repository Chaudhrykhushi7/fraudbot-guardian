
import { useState, useEffect, useRef } from 'react';
import { ChatMessage as ChatMessageType, Transaction } from '@/types';
import { generateBotResponse } from '@/services/chatbotService';
import { getTransactions } from '@/services/transactionService';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import TransactionCard from './TransactionCard';

const FraudDetectionChatbot = () => {
  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fetch transactions
    const txs = getTransactions();
    setTransactions(txs);
    
    // Add welcome message
    const welcomeMessage: ChatMessageType = {
      id: 'welcome',
      sender: 'bot',
      text: "Hello! I'm your FraudBot Guardian assistant. I can help you understand your transactions and identify potential fraud. You can ask me about specific transactions or general fraud detection patterns.",
      timestamp: new Date()
    };
    
    setMessages([welcomeMessage]);
  }, []);
  
  useEffect(() => {
    // Scroll to bottom of chat when messages change
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = (message: string) => {
    // Add user message
    const userMessage: ChatMessageType = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: message,
      timestamp: new Date(),
      relatedTransaction: selectedTransaction?.id
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    
    // Simulate processing delay
    setTimeout(() => {
      // Generate bot response
      const botResponse = generateBotResponse(
        message, 
        selectedTransaction?.id
      );
      
      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
      
      if (selectedTransaction) {
        setSelectedTransaction(null);
      }
    }, 1000);
  };
  
  const handleAnalyzeTransaction = (transaction: Transaction) => {
    setSelectedTransaction(transaction);
    
    // Add system message about transaction
    const systemMessage: ChatMessageType = {
      id: `system-${Date.now()}`,
      sender: 'bot',
      text: `I've selected transaction #${transaction.id} from ${transaction.merchant} for $${transaction.amount}. What would you like to know about it?`,
      timestamp: new Date(),
      relatedTransaction: transaction.id
    };
    
    setMessages(prev => [...prev, systemMessage]);
  };

  return (
    <div className="flex h-full">
      {/* Chat area */}
      <div className="flex flex-col w-full lg:w-2/3 h-full bg-security-background">
        {/* Chat messages */}
        <div 
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto px-4 py-4"
        >
          {messages.map(message => (
            <ChatMessage key={message.id} message={message} />
          ))}
        </div>
        
        {/* Chat input */}
        <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
      </div>
      
      {/* Transactions sidebar */}
      <div className="hidden lg:block lg:w-1/3 h-full border-l border-security-border bg-white p-4 overflow-y-auto">
        <h2 className="font-bold text-lg mb-4 text-security-primary">Recent Transactions</h2>
        {transactions.map(transaction => (
          <TransactionCard 
            key={transaction.id} 
            transaction={transaction}
            onAnalyze={handleAnalyzeTransaction}
          />
        ))}
      </div>
    </div>
  );
};

export default FraudDetectionChatbot;
