import ChatContext from '@/contexts/ChatContext';
import { useContext } from 'react';

export default function useChat() {
	const context = useContext(ChatContext);

	return context;
}
