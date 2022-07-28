import { Button } from 'components';
import { ReactPortal } from 'components/ReactPortal';
import PropTypes from 'prop-types';
import React from 'react';

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
  isLoading,
}) {
  if (!visible) {
    return null;
  }

  return (
    <ReactPortal
      containerId="modal-root"
    >
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
              disabled={isLoading}
            >
              {cancelLabel}
            </button>
            <Button
              type="button"
              danger={danger}
              onClick={onConfirm}
              isLoading={isLoading}
            >
              {confirmLabel}
            </Button>
          </S.Footer>
        </S.Container>
      </S.Overlay>
      ,
    </ReactPortal>
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  cancelLabel: PropTypes.string,
  confirmLabel: PropTypes.string,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool,
};

Modal.defaultProps = {
  danger: false,
  cancelLabel: 'Cancelar',
  confirmLabel: 'Confirmar',
  isLoading: false,
};
