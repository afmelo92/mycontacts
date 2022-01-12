import React from 'react';
import ReactDOM from 'react-dom';

import * as S from './styles';

function Loader() {
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
