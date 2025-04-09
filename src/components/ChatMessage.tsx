
import { ChatMessage as ChatMessageType } from '@/types';
import { cn } from '@/lib/utils';

interface ChatMessageProps {
  message: ChatMessageType;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  const isBot = message.sender === 'bot';
  
  return (
    <div 
      className={cn(
        "flex w-full mb-4", 
        isBot ? "justify-start" : "justify-end"
      )}
    >
      <div 
        className={cn(
          "max-w-[80%] rounded-lg px-4 py-3",
          isBot 
            ? "bg-security-primary text-white rounded-tl-none" 
            : "bg-security-secondary text-white rounded-tr-none"
        )}
      >
        <p className="text-sm">{message.text}</p>
        <p className="text-xs opacity-70 mt-1">
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
    </div>
  );
};

export default ChatMessage;
