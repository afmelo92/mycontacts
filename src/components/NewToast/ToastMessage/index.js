import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import checkCircleIcon from '../../../assets/images/icons/check-circle.svg';
import xCircleIcon from '../../../assets/images/icons/x-circle.svg';

import * as S from './styles';

function ToastMessage({
  message,
  onRemoveMessage,
}) {
  const {
    id, text, type, duration,
  } = message;

  useEffect(() => {
    const timer = setTimeout(() => {
      onRemoveMessage(message.id);
    }, duration || 5000);

    return clearTimeout(timer);
  }, [duration, message, onRemoveMessage]);

  function handleRemoveToast() {
    onRemoveMessage(id);
  }

  return (
    <S.Container
      type={type}
      onClick={handleRemoveToast}
      tabIndex={0}
      role="button"
    >
      {type === 'danger' && <img src={xCircleIcon} alt="X" /> }
      {type === 'success' && <img src={checkCircleIcon} alt="Check" /> }
      <strong>{text}</strong>
    </S.Container>
  );
}

export default ToastMessage;

ToastMessage.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['default', 'success', 'danger']),
    duration: PropTypes.number,
  }).isRequired,
  onRemoveMessage: PropTypes.func.isRequired,
};
