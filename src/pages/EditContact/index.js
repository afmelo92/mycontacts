import React from 'react';
import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';

function EditContactPage() {
  return (
    <>
      <PageHeader title="Editar Andre Melo" />
      <ContactForm buttonLabel="Salvar alterações" />
    </>
  );
}

export default EditContactPage;
