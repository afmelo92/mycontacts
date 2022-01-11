import React from 'react';

import logo from '../../assets/images/logo.svg';

import * as S from './styles';

function Header() {
  return (
    <S.Container>
      <img src={logo} alt="MyContacts" width="201" />

      <S.InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome" />
      </S.InputSearchContainer>
    </S.Container>
  );
}

export default Header;
