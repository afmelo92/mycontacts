import React from 'react';

import ContactForm from '../../components/ContactForm';
import PageHeader from '../../components/PageHeader';

function EditContactPage() {
  return (
    <>
      <PageHeader title="Editar Andre Melo" />
      <ContactForm buttonLabel="Salvar alterações" />
    </>
  );
}

export default EditContactPage;
