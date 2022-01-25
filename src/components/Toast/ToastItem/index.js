/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useToast } from 'hooks/useToast';
import PropTypes from 'prop-types';

import * as S from './styles';

function ToastItem({ message }) {
  const { deleteMessage } = useToast();

  return (
    <S.Container type={message.type}>
      <span role="button" onClick={() => deleteMessage(message.id)}>X</span>
      <h1>{message.title}</h1>
      <p>{message.message}</p>
    </S.Container>
  );
}

export default ToastItem;

ToastItem.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }).isRequired,
};
