import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import * as S from './styles';

export function Toast({
  show, data,
}) {
  console.log('DATA:::::', data);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList([...data]);
  }, [data, list]);

  return ReactDOM.createPortal(
    <S.Container show={show}>
      {list.map((listItem, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <S.ToastContainer key={index}>
          <button type="button">X</button>
          <S.Image>
            <img src="" alt="" />
          </S.Image>
          <div>
            <h4>{listItem.title}</h4>
            <p>{listItem.message}</p>
          </div>
        </S.ToastContainer>
      ))}
    </S.Container>,
    document.getElementById('modal-root'),
  );
}

Toast.propTypes = {
  show: PropTypes.bool,
  // position: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  toastList: PropTypes.array,
};

Toast.defaultProps = {
  show: true,
};
