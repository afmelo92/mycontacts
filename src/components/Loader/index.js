import { ReactPortal } from 'components/ReactPortal';
import { Spinner } from 'components/Spinner';
import PropTypes from 'prop-types';
import React from 'react';

import * as S from './styles';

export function Loader({ isLoading }) {
  if (!isLoading) {
    return null;
  }

  let container = document.getElementById('loader-root');

  if (!container) {
    container = document.createElement('div');
    container.setAttribute('id', 'loader-root');
    document.body.appendChild(container);
  }

  return (
    <ReactPortal
      containerId="loader-root"
    >
      <S.Overlay>
        <S.Container>
          <Spinner size={90} />
        </S.Container>
      </S.Overlay>
    </ReactPortal>
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
