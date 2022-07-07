import React, { useState, useEffect, useCallback } from 'react';
import { toastEventManager } from 'utils/toast';

import ToastMessage from '../ToastMessage';

import * as S from './styles';

export function ToastContainer() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    function handleAddToast({ type, text, duration }) {
      setMessages((prev) => [
        ...prev,
        {
          id: Math.round(Math.random() * 100),
          type,
          text,
          duration,
        },
      ]);
    }

    toastEventManager.on('addtoast', handleAddToast);

    return () => toastEventManager.removeListener('addtoast', handleAddToast);
  }, []);

  const handleRemoveMessage = useCallback((id) => {
    setMessages((prev) => prev.filter((message) => message.id !== id));
  }, []);

  return (
    <S.Container>
      {messages.map((message) => (
        <ToastMessage
          key={message.id}
          message={message}
          onRemoveMessage={handleRemoveMessage}
        />
      ))}
    </S.Container>
  );
}
