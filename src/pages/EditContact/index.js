import React, { useCallback, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import ContactForm from '../../components/ContactForm';
import Loader from '../../components/Loader';
import PageHeader from '../../components/PageHeader';
import ContactsService from '../../services/ContactsService';

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

  const handleSubmit = useCallback(async (contactId, data) => {
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
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
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
    </>
  );
}

export default EditContactPage;
