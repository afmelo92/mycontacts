import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import ContactForm from '../../components/ContactForm';
import Loader from '../../components/Loader';
import PageHeader from '../../components/PageHeader';
import ContactsService from '../../services/ContactsService';

import * as S from './styles';

function NewContactPage() {
  const history = useHistory();
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(async (data) => {
    try {
      setLoading(true);
      await ContactsService.createContact({ data });
      setHasError(false);
      history.goBack();
    } catch (error) {
      setHasError(true);
    } finally {
      setLoading(false);
    }
  }, [history]);

  return (
    <S.Container>
      {!hasError && (
      <>
        <Loader isLoading={loading} />
        <PageHeader title="Novo contato" />
        <ContactForm buttonLabel="Cadastrar" action={handleSubmit} />
      </>
      )}
    </S.Container>
  );
}

export default NewContactPage;
