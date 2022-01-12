import React from 'react';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

import * as S from './styles';

function ContactsList() {
  return (
    <S.Container>
      <S.Header>
        <strong>3 contatos</strong>
        <a href="/">Novo contato</a>
      </S.Header>

      <S.ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

        <S.Card>
          <div className="info">
            <div className="contact-name">
              <strong>Andre Melo</strong>
              <small>instagram</small>
            </div>
            <span>andre@afmelo.com</span>
            <span>(41) 9 9901-3657</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </S.Card>

        <S.Card>
          <div className="info">
            <div className="contact-name">
              <strong>Andre Melo</strong>
              <small>instagram</small>
            </div>
            <span>andre@afmelo.com</span>
            <span>(41) 9 9901-3657</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </S.Card>

        <S.Card>
          <div className="info">
            <div className="contact-name">
              <strong>Andre Melo</strong>
              <small>instagram</small>
            </div>
            <span>andre@afmelo.com</span>
            <span>(41) 9 9901-3657</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </S.Card>
      </S.ListContainer>
    </S.Container>
  );
}

export default ContactsList;
