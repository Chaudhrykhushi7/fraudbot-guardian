
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading?: boolean;
}

const ChatInput = ({ onSendMessage, isLoading = false }: ChatInputProps) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() === '') return;
    
    onSendMessage(message);
    setMessage('');
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="flex items-center gap-2 border-t border-security-border p-4 bg-white"
    >
      <Input
        type="text"
        placeholder="Ask about transaction fraud..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1 focus-visible:ring-security-accent"
        disabled={isLoading}
      />
      <Button 
        type="submit" 
        disabled={message.trim() === '' || isLoading}
        style={{ backgroundColor: '#0F3460' }}
        className="hover:bg-security-secondary transition-colors"
      >
        {isLoading ? 'Analyzing...' : 'Send'}
      </Button>
    </form>
  );
};

export default ChatInput;
