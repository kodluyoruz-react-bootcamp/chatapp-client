import { useContext, useRef, useEffect } from 'react';

import styles from './style.module.css';

import ChatContext from '../contexts/ChatContext';
import ChatItem from './ChatItem';

import ScrollableFeed from 'react-scrollable-feed';

function ChatList() {
	const chatListRef = useRef(null);

	const { messages } = useContext(ChatContext);

	useEffect(() => {
		chatListRef.current.scrollIntoView({ behavior: 'smooth' });
	}, [messages]);

	return (
		<div className={styles.chatlist} ref={chatListRef}>
			<ScrollableFeed forceScroll={true}>
				{messages.map((item, key) => (
					<ChatItem key={key} item={item} />
				))}
			</ScrollableFeed>
		</div>
	);
}

export default ChatList;
