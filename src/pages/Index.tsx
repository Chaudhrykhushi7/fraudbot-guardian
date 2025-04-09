
import FraudDetectionHeader from "@/components/FraudDetectionHeader";
import FraudDetectionChatbot from "@/components/FraudDetectionChatbot";

const Index = () => {
  return (
    <div className="flex flex-col h-screen bg-security-background">
      <FraudDetectionHeader />
      <div className="flex-1 overflow-hidden">
        <FraudDetectionChatbot />
      </div>
    </div>
  );
};

export default Index;
