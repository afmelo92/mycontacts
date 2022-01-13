import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// import Loader from '../../components/Loader';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import formatPhone from '../../utils/formatPhone';

import * as S from './styles';

function HomePage() {
  const [contacts, setContacts] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    // setLoading(true);
    fetch('http://localhost:3001/contacts')
      .then(async (response) => {
        const data = await response.json();
        setContacts(data);
        // setLoading((prevState) => !prevState);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <S.Container>
      <S.InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome" />
      </S.InputSearchContainer>
      <S.Header>
        <strong>
          {contacts.length}
          {contacts.length === 1 ? ' contato' : ' contatos'}
        </strong>
        <Link to="/new">Novo contato</Link>
      </S.Header>

      <S.ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

        {contacts.map((contact) => (
          <S.Card key={contact.id}>
            <div className="info">
              <div className="contact-name">
                <strong>{contact.name}</strong>
                {contact.category_name && <small>{contact.category_name}</small>}
              </div>
              <span>{contact.email}</span>
              <span>{formatPhone(contact.phone)}</span>
            </div>

            <div className="actions">
              <Link to={`/edit/${contact.id}`}>
                <img src={edit} alt="Edit" />
              </Link>
              <button type="button">
                <img src={trash} alt="Delete" />
              </button>
            </div>
          </S.Card>
        ))}

      </S.ListContainer>
    </S.Container>
  );
}

export default HomePage;
