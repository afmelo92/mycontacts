import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function FormGroup({ children }) {
  return (
    <S.Container>
      {children}
    </S.Container>
  );
}

export default FormGroup;

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
};
