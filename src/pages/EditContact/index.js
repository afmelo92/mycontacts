import { ContactForm, Loader, PageHeader } from 'components';
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

  const loadContacts = useCallback(async () => {
    try {
      setLoading(true);

      const singleContact = await ContactsService.getContact(id);

      setContact(singleContact);
      setHasError(false);
    } catch (error) {
      setHasError(true);
    } finally {
      setLoading(false);
    }
  }, [id]);

  const handleSubmit = useCallback(async ({ data, contactId }) => {
    try {
      setLoading(true);

      await ContactsService.updateContact({ id: contactId, data });

      setHasError(false);
      history.goBack();
    } catch (error) {
      setHasError(true);
    } finally {
      setLoading(false);
    }
  }, [history]);

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
