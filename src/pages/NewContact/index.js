import { ContactForm, PageHeader } from 'components';
import React, { useCallback, useRef } from 'react';
import ContactsService from 'services/ContactsService';
import toast from 'utils/toast';

import * as S from './styles';

function NewContactPage() {
  const contactFormRef = useRef(null);
  const handleSubmit = useCallback(async ({ data }) => {
    try {
      await ContactsService.createContact({ data });

      contactFormRef.current.resetFields();

      toast({
        type: 'success',
        text: 'Contato cadastrado com sucesso.',
        duration: 3000,
      });
    } catch (error) {
      toast({
        type: 'danger',
        text: 'Houve um erro ao cadastrar o contato.',
        duration: 3000,
      });
    }
  }, []);

  return (
    <S.Container>
      <PageHeader title="Novo contato" />
      <ContactForm
        ref={contactFormRef}
        buttonLabel="Cadastrar"
        action={handleSubmit}
      />
    </S.Container>
  );
}

export default NewContactPage;
