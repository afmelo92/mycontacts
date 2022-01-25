import { useToast } from 'hooks/useToast';
import ReactDOM from 'react-dom';

import ToastItem from './ToastItem';

import * as S from './styles';

export const Toast = () => {
  const { messages } = useToast();

  return ReactDOM.createPortal(
    <S.Container>
      {messages.length > 0 && messages.map((message) => (
        <ToastItem key={message.id} message={message} />
      ))}
    </S.Container>,
    document.getElementById('modal-root'),
  );
};
