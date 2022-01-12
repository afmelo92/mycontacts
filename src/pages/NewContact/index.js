import React from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';

function NewContactPage() {
  return (
    <>
      <PageHeader title="Novo contato" />
      <Input type="text" placeholder="Nome" />
      <Select>
        <option>Instragram</option>
        <option>Instragram</option>
        <option>Instragram</option>
        <option>Instragram</option>
        <option>Instragram</option>
        <option>Instragram</option>
        <option>Instragram</option>
      </Select>
      <Button type="button">
        Salvar alterações
      </Button>
      <Button type="button" disabled>
        Salvar alterações
      </Button>
    </>
  );
}

export default NewContactPage;
