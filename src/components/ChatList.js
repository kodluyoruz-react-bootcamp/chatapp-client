import { useContext, useRef, useEffect } from 'react';

import styles from './style.module.css';

import ChatContext from '../contexts/ChatContext';
import ChatItem from './ChatItem';

function ChatList() {
	const chatListRef = useRef(null);

	const { messages } = useContext(ChatContext);

	useEffect(() => {
		chatListRef.current.scrollIntoView({ behavior: 'smooth' });
	}, [messages]);

	return (
		<div className={styles.chatlist} ref={chatListRef}>
			{messages.map((item, key) => (
				<ChatItem key={key} item={item} />
			))}
		</div>
	);
}

export default ChatList;
