import { ContactForm, Loader, PageHeader } from 'components';
import { useToast } from 'hooks/useToast';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import ContactsService from 'services/ContactsService';

import * as S from './styles';

function EditContactPage() {
  const { id } = useParams();
  const history = useHistory();
  const [contact, setContact] = useState({});
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const { addMessage } = useToast();
  const loadContacts = useCallback(async () => {
    try {
      setLoading(true);

      const singleContact = await ContactsService.getContact(id);

      setContact(singleContact);

      setHasError(false);

      addMessage({
        id: String(Math.floor(Math.random() * 1000)),
        type: 'success',
        title: 'Sucesso!',
        message: 'Usuário carregado com sucesso.',
      });
    } catch (error) {
      setHasError(true);

      addMessage({
        id: String(Math.floor(Math.random() * 1000)),
        type: 'danger',
        title: 'Oops!',
        message: 'Houve um erro ao obter seu contato. Por favor, tente novamente mais tarde.',
      });
    } finally {
      setLoading(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleSubmit = useCallback(async ({ data, contactId }) => {
    try {
      setLoading(true);

      await ContactsService.updateContact({ id: contactId, data });

      setHasError(false);
      addMessage({
        id: String(Math.floor(Math.random() * 1000)),
        type: 'success',
        title: 'Sucesso!',
        message: 'Usuário editado com sucesso.',
      });
      history.goBack();
    } catch (error) {
      setHasError(true);
      addMessage({
        id: String(Math.floor(Math.random() * 1000)),
        type: 'danger',
        title: 'Oops!',
        message: 'Houve um erro ao editar seu contato. Por favor, tente novamente mais tarde.',
      });
    } finally {
      setLoading(false);
    }
  }, [history, addMessage]);

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  return (
    <S.Container>
      {!hasError && (
        <>
          <Loader isLoading={loading} />
          <PageHeader title={`Editar ${contact.name}`} />
          <ContactForm
            contact={contact}
            buttonLabel="Salvar alterações"
            action={handleSubmit}
          />
        </>
      )}
    </S.Container>
  );
}

export default EditContactPage;
