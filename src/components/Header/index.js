import logo from 'assets/images/logo.svg';
import React from 'react';

import * as S from './styles';

export function Header() {
  return (
    <S.Container>
      <img src={logo} alt="MyContacts" width="201" />
    </S.Container>
  );
}
