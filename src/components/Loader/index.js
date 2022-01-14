import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import * as S from './styles';

function Loader({ isLoading }) {
  if (!isLoading) {
    return null;
  }

  return (
    ReactDOM.createPortal(
      <S.Overlay>
        <S.Container>
          <div className="loader" />
        </S.Container>
      </S.Overlay>,
      document.getElementById('loader-root'),
    )
  );
}

export default Loader;

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
