import { Spinner } from 'components/Spinner';
import PropTypes from 'prop-types';
import React from 'react';

import * as S from './styles';

export function FormGroup({ children, error, isLoading }) {
  return (
    <S.Container>
      <div className="form-item">
        {children}
        {isLoading && (
        <div className="loader">
          <Spinner size={16} />
        </div>
        )}
      </div>
      {error && <small>{error}</small>}
    </S.Container>
  );
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
};

FormGroup.defaultProps = {
  error: null,
  isLoading: false,
};
