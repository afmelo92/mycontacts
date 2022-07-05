import { ContactForm, PageHeader } from 'components';
import { useToast } from 'hooks/useToast';
import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ContactsService from 'services/ContactsService';

import * as S from './styles';

function NewContactPage() {
  const history = useHistory();
  const { addMessage } = useToast();

  const [hasError, setHasError] = useState(false);

  const handleSubmit = useCallback(async ({ data }) => {
    try {
      await ContactsService.createContact({ data });

      setHasError(false);

      addMessage({
        id: String(Math.floor(Math.random() * 1000)),
        type: 'success',
        title: 'Sucesso!',
        message: 'Usuário criado com sucesso.',
      });

      history.goBack();
    } catch (error) {
      setHasError(true);

      addMessage({
        id: String(Math.floor(Math.random() * 1000)),
        type: 'danger',
        title: 'Oops!',
        message: 'Houve um erro ao criar o contato. Por favor, tente novamente mais tarde.',
      });
    }
  }, [history, addMessage]);

  return (
    <S.Container>
      {!hasError && (
      <>
        <PageHeader title="Novo contato" />
        <ContactForm buttonLabel="Cadastrar" action={handleSubmit} />
      </>
      )}
    </S.Container>
  );
}

export default NewContactPage;
