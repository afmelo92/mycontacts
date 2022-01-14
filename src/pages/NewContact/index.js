import React from 'react';

import ContactForm from '../../components/ContactForm';
import PageHeader from '../../components/PageHeader';

function NewContactPage() {
  return (
    <>
      <PageHeader title="Novo contato" />
      <ContactForm buttonLabel="Cadastrar" />
    </>
  );
}

export default NewContactPage;
