import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ContactForm from '../../components/ContactForm';
import PageHeader from '../../components/PageHeader';
import ContactsService from '../../services/ContactsService';

function EditContactPage() {
  const { id } = useParams();
  const [contact, setContact] = useState({});
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const loadContacts = useCallback(async () => {
    try {
      setLoading(true);

      const response = await ContactsService.getContact(id);

      setContact(response);
      setHasError(false);
    } catch (error) {
      setHasError(true);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {!hasError && (
        <>
          <PageHeader title={`Editar ${contact.name}`} />
          <ContactForm loading={loading} contact={contact} buttonLabel="Salvar alterações" />
        </>
      )}
    </>
  );
}

export default EditContactPage;
