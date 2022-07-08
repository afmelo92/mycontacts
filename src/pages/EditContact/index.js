import { Loader, PageHeader, ContactForm } from 'components';
import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import ContactsService from 'services/ContactsService';
import toast from 'utils/toast';

import * as S from './styles';

function EditContactPage() {
  const { id } = useParams();
  const history = useHistory();
  const contactFormRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);
  const [contact, setContact] = useState({});

  const loadContact = useCallback(async () => {
    try {
      const contactData = await ContactsService.getContactById(id);

      setContact(contactData);

      contactFormRef.current.setFieldValues(contactData);

      setIsLoading(false);
    } catch (error) {
      toast({
        type: 'danger',
        text: 'Houve um erro ao carregar o contato. Tente novamente mais tarde.',
      });

      history.push('/');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleSubmit = useCallback(async ({ data, contactId }) => {
    try {
      const contactData = await ContactsService.updateContact({ id: contactId, data });

      setContact(contactData);

      toast({
        type: 'success',
        text: 'Contato editado com sucesso.',
      });
    } catch (error) {
      toast({
        type: 'danger',
        text: 'Houve um erro ao editar o contato. Tente novamente mais tarde.',
      });
    }
  }, []);

  useEffect(() => {
    loadContact();
  }, [loadContact]);

  return (
    <S.Container>
      <Loader isLoading={isLoading} />
      <PageHeader title={isLoading ? 'Carregando...' : `Editar ${contact.name}`} />
      <ContactForm
        ref={contactFormRef}
        buttonLabel="Salvar alterações"
        action={handleSubmit}
      />
    </S.Container>
  );
}

export default EditContactPage;
