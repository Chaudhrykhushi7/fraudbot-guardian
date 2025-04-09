
import { Transaction } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface TransactionCardProps {
  transaction: Transaction;
  onAnalyze: (transaction: Transaction) => void;
}

const TransactionCard = ({ transaction, onAnalyze }: TransactionCardProps) => {
  const { 
    Transaction_ID, 
    Hospital_Name, 
    Department, 
    Billing_Amount,
    Transaction_Time, 
    Payment_Mode,
    Fraud_Flag,
    status,
    riskScore 
  } = transaction;
  
  const getStatusColor = () => {
    if (Fraud_Flag === "Yes") return 'bg-security-warning text-white';
    
    switch (status) {
      case 'normal':
        return 'bg-security-success text-white';
      case 'suspicious':
        return 'bg-yellow-500 text-white';
      case 'fraudulent':
        return 'bg-security-warning text-white';
      default:
        return 'bg-gray-200 text-gray-800';
    }
  };
  
  const getStatusText = () => {
    if (Fraud_Flag === "Yes") return 'Fraudulent';
    
    switch (status) {
      case 'normal': 
        return 'Safe';
      case 'suspicious':
        return 'Suspicious';
      case 'fraudulent':
        return 'Fraudulent';
      default:
        return 'Unknown';
    }
  };

  // Format date for display
  const formatDate = (dateString: string) => {
    try {
      const [datePart, timePart] = dateString.split(' ');
      return `${datePart} • ${timePart}`;
    } catch (e) {
      return dateString;
    }
  };

  return (
    <Card className="mb-4 overflow-hidden border-l-4 shadow-sm hover:shadow-md transition-shadow" 
      style={{ borderLeftColor: Fraud_Flag === "Yes" ? '#FF6B6B' : status === 'normal' ? '#06D6A0' : status === 'suspicious' ? '#FFD166' : '#FF6B6B' }}>
      <CardHeader className="py-3">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-lg font-semibold">{Department}</CardTitle>
            <CardDescription>{formatDate(Transaction_Time)}</CardDescription>
          </div>
          <div className="text-xl font-bold">₹{Billing_Amount.toFixed(2)}</div>
        </div>
      </CardHeader>
      <CardContent className="py-2">
        <div className="flex justify-between items-center">
          <Badge className={cn("font-medium", getStatusColor())}>
            {getStatusText()}
          </Badge>
          <div className="flex items-center">
            <span className="text-sm mr-2">Risk Score:</span>
            <div className="w-24 h-3 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full rounded-full" 
                style={{
                  width: `${riskScore}%`,
                  backgroundColor: riskScore < 30 ? '#06D6A0' : riskScore < 70 ? '#FFD166' : '#FF6B6B'
                }}
              />
            </div>
            <span className="text-sm ml-2">{riskScore}/100</span>
          </div>
        </div>
        <div className="mt-2 text-sm text-gray-600">
          <p>Payment: {Payment_Mode}</p>
          <p>ID: {Transaction_ID}</p>
        </div>
      </CardContent>
      <CardFooter className="pt-2 pb-3">
        <Button 
          variant="outline"
          onClick={() => onAnalyze(transaction)}
          className="w-full border-security-border hover:bg-security-primary hover:text-white transition-colors"
        >
          Analyze
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TransactionCard;
