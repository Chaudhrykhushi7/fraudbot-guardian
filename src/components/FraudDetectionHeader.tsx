
import { Shield, HeartPulse } from "lucide-react";

const FraudDetectionHeader = () => {
  return (
    <header className="border-b border-security-border py-4 px-6 bg-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Shield className="w-7 h-7 text-security-primary mr-3" />
          <div>
            <h1 className="text-xl font-bold text-security-primary">Marengo Hospital Fraud Guardian</h1>
            <p className="text-sm text-gray-500">AI-powered healthcare billing fraud detection</p>
          </div>
        </div>
        <div className="flex items-center">
          <HeartPulse className="w-5 h-5 text-security-primary mr-2" />
          <div className="w-3 h-3 rounded-full bg-security-success animate-pulse-slow mr-2"></div>
          <span className="text-sm text-gray-600">Actively monitoring</span>
        </div>
      </div>
    </header>
  );
};

export default FraudDetectionHeader;
