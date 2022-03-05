import { Spinner } from 'components/Spinner';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

import * as S from './styles';

export function Loader({ isLoading }) {
  if (!isLoading) {
    return null;
  }

  return (
    ReactDOM.createPortal(
      <S.Overlay>
        <S.Container>
          <Spinner size={90} />
        </S.Container>
      </S.Overlay>,
      document.getElementById('loader-root'),
    )
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
