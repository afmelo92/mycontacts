import PropTypes from 'prop-types';
import {
  createContext, useCallback, useContext, useState, useEffect,
} from 'react';

const ToastContext = createContext({
  messages: [],
  addMessage: () => null,
  deleteMessage: () => null,
});

function ToastProvider({ children }) {
  const [messages, setMessages] = useState([]);
  const [removing, setRemoving] = useState('');

  const addMessage = useCallback((message) => {
    const newMessages = [...messages, { ...message }];
    setMessages(newMessages);
  }, [messages]);

  const deleteMessage = useCallback((id) => {
    const filteredMessages = messages.filter((message) => message.id !== id);
    setMessages(filteredMessages);
  }, [messages]);

  useEffect(() => {
    if (removing) {
      setMessages((prev) => prev.filter((msg) => msg.id !== removing));
    }
  }, [removing, setMessages]);

  useEffect(() => {
    if (messages.length) {
      const { id } = messages[messages.length - 1];
      setTimeout(() => setRemoving(id), 5000);
    }
  }, [messages]);

  return (
    <ToastContext.Provider value={{
      messages,
      addMessage,
      deleteMessage,
    }}
    >
      {children}
    </ToastContext.Provider>
  );
}

const useToast = () => useContext(ToastContext);

export {
  ToastProvider,
  useToast,
};

ToastProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
