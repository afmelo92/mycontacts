import React, {
  useEffect, useState, useMemo, useCallback,
} from 'react';
import { Link } from 'react-router-dom';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import sad from '../../assets/images/sad.svg';
import Button from '../../components/Button';
import Loader from '../../components/Loader';
import ContactsService from '../../services/ContactsService';
import formatPhone from '../../utils/formatPhone';

import * as S from './styles';

function HomePage() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const filteredContacts = useMemo(() => contacts.filter((contact) => (
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  )), [contacts, searchTerm]);

  const loadContacts = useCallback(async () => {
    try {
      setLoading(true);

      const constactsList = await ContactsService.listContacts(orderBy);

      setContacts(constactsList);
      setHasError(false);
    } catch (err) {
      setHasError(true);
    } finally {
      setLoading(false);
    }
  }, [orderBy]);

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  function handleToggleOrderBy() {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  function handleTryAgain() {
    loadContacts();
  }

  return (
    <S.Container>
      <Loader isLoading={loading} />
      <S.InputSearchContainer>
        <input
          value={searchTerm}
          type="text"
          placeholder="Pesquise pelo nome"
          onChange={handleChangeSearchTerm}
        />
      </S.InputSearchContainer>
      <S.Header hasError={hasError}>
        {
          !hasError && (
            <strong>
              {filteredContacts.length}
              {filteredContacts.length === 1 ? ' contato' : ' contatos'}
            </strong>
          )
        }
        <Link to="/new">Novo contato</Link>
      </S.Header>

      {hasError && (
        <S.ErrorContainer>
          <img src={sad} alt="sad" width="100" />
          <strong>
            Ocorreu um erro ao obter seu contatos!
          </strong>
          <Button onClick={handleTryAgain}>Tentar novamente</Button>

        </S.ErrorContainer>
      )}

      {!hasError && (
        <>
          {filteredContacts.length > 0 && (
          <S.ListHeader orderBy={orderBy}>
            <button type="button" onClick={handleToggleOrderBy}>
              <span>Nome</span>
              <img src={arrow} alt="Arrow" />
            </button>
          </S.ListHeader>
          )}

          {filteredContacts.map((contact) => (
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
        </>
      )}

    </S.Container>
  );
}

export default HomePage;
