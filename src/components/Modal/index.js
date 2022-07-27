import { Button } from 'components';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

import * as S from './styles';

export function Modal({
  danger,
  title,
  children,
  cancelLabel,
  confirmLabel,
  onCancel,
  onConfirm,
  visible,
}) {
  if (!visible) {
    return null;
  }

  return ReactDOM.createPortal(
    <S.Overlay>
      <S.Container danger={danger}>
        <h1>{title}</h1>

        <S.Content>
          {children}
        </S.Content>

        <S.Footer>
          <button
            type="button"
            className="cancel-button"
            onClick={onCancel}
          >
            {cancelLabel}
          </button>
          <Button
            type="button"
            danger={danger}
            onClick={onConfirm}
          >
            {confirmLabel}
          </Button>
        </S.Footer>
      </S.Container>
    </S.Overlay>,
    document.getElementById('modal-root'),
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  cancelLabel: PropTypes.string,
  confirmLabel: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

Modal.defaultProps = {
  danger: false,
  cancelLabel: 'Cancelar',
  confirmLabel: 'Confirmar',
};
