import React, { useState, useRef } from 'react';
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

const ChatBox = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const chatContainerRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message.trim() === '') return;

    setLoading(true);
    setChatHistory(prevChatHistory => [...prevChatHistory, { role: 'user', content: message }]);

    try {
      const response = await axios.post('http://127.0.0.1:5000/chat', { message });
      setChatHistory(prevChatHistory => [
        ...prevChatHistory,
        { role: 'assistant', content: response.data.reply },
      ]);
      setMessage('');

      // Scroll to the bottom of the chat container
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderChatBubble = (chat) => (
    <div
      key={chat.content}
      className={`chat-bubble ${chat.role === 'user' ? 'chat-bubble-user' : 'chat-bubble-assistant'}`}
      style={chat.role === 'user' ? styles.chatBubbleUser : styles.chatBubbleAssistant}
    >
      {chat.content}
    </div>
  );

  return (
    <div style={styles.chatContainer}>
      {/* Welcome Message */}
      <div style={styles.welcomeMessage}>
        <i className="fas fa-user-graduate" style={styles.welcomeIcon}></i>
        <h1>Welcome to your Career Counsellor</h1>
      </div>

      {/* Chat History */}
      <div style={styles.chatHistory} ref={chatContainerRef}>
        {chatHistory.map(renderChatBubble)}
        {loading && <div style={styles.loading}>Sending...</div>}
      </div>

      {/* Message Input */}
      <form onSubmit={handleSubmit} style={styles.chatInputForm}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={styles.chatInput}
          placeholder="Type a message..."
        />
        <button
          type="submit"
          style={styles.chatSubmit}
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
};

// Inline styles
const styles = {
  chatContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '80vh',
    width: '80%',
    margin: '20px auto',
    backgroundColor: '#F5F5F7', // Darker background
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    border: '1px solid #444',
  },
  welcomeMessage: {
    padding: '20px',
    backgroundColor: '#F5F5F7',
    color: 'white',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    textAlign: 'center', // Center align text
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center align icon and text
    gap: '10px',
    animation: 'fadeIn 1s ease-in-out', // Animation
  },
  welcomeIcon: {
    fontSize: '24px',
    color: 'black'
  },
  chatHistory: {
    flexGrow: 1,
    padding: '20px',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  chatBubble: {
    maxWidth: '75%',
    padding: '10px',
    borderRadius: '15px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
    color: 'white', // White text
    fontSize: '14px',
    opacity: 0,
    animation: 'fadeIn 0.5s forwards', // Animation
  },
  chatBubbleUser: {
    alignSelf: 'flex-end',
    backgroundColor: '#007bff',
    padding: '1px 20px',
    borderRadius: '25px',
    animationName: 'slideInRight', // User bubble slide-in animation
  },
  chatBubbleAssistant: {
    alignSelf: 'flex-start',
    backgroundColor: '#4a4a4a', // Dark grey
    padding: '5px 20px',
    borderRadius: '25px',
    animationName: 'slideInLeft', // Assistant bubble slide-in animation
  },
  loading: {
    textAlign: 'center',
    color: '#b0b0b0', // Light grey
    fontSize: '14px',
  },
  chatInputForm: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#3a3a3a', // Darker grey
    borderTop: '1px solid #444',
  },
  chatInput: {
    flex: 1,
    padding: '10px',
    border: '1px solid #555', // Dark border
    borderRadius: '25px',
    fontSize: '14px',
    color: 'white', // White text
    backgroundColor: '#2c2c2c', // Dark background
    outline: 'none',
    boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.2)',
  },
  chatSubmit: {
    marginLeft: '10px',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '25px',
    backgroundColor: '#007bff', // Corporate blue
    color: 'white', // White text
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    ':hover': {
      backgroundColor: '#0056b3', // Darker blue on hover
      transform: 'scale(1.05)',
    },
  },
};

// Keyframes for animations
const keyframes = `
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideInRight {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes slideInLeft {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;

// Add keyframes to the head of the document
const styleTag = document.createElement('style');
styleTag.innerHTML = keyframes;
document.head.appendChild(styleTag);

export default ChatBox;
