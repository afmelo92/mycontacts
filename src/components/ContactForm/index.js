import React, { useState } from 'react';
import PropTypes from 'prop-types';

import isEmailValid from '../../utils/isEmailValid';
import formatPhone from '../../utils/formatPhone';
import useErrors from '../../hooks/useErrors';

import Button from '../Button';
import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';

import * as S from './styles';

function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const {
    setError,
    removeError,
    getErrorMessageByFieldName,
  } = useErrors();

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório.' });
    } else {
      removeError('name');
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: 'email', message: 'E-mail inválido.' });
    } else {
      removeError('email');
    }
  }

  function handlePhoneChange(event) {
    setPhone(formatPhone(event.target.value));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('ninja');
  }

  return (
    <S.Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={handleNameChange}
          error={getErrorMessageByFieldName('name')}
        />
      </FormGroup>
      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={handleEmailChange}
          error={getErrorMessageByFieldName('email')}
        />
      </FormGroup>
      <FormGroup error={getErrorMessageByFieldName('phone')}>
        <Input
          type="text"
          placeholder="Telefone"
          value={phone}
          onChange={handlePhoneChange}
          error={getErrorMessageByFieldName('phone')}
          maxLength={15}
        />
      </FormGroup>
      <FormGroup error={getErrorMessageByFieldName('category')}>
        <Select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          error={getErrorMessageByFieldName('category')}
        >
          <option value="">Categoria</option>
          <option value="instagram">Instagram</option>
          <option value="facebook">Facebook</option>
          <option value="twitter">Twitter</option>
          <option value="tiktok">TikTok</option>
          <option value="discord">Discord</option>
        </Select>
      </FormGroup>
      <S.ButtonContainer>
        <Button type="submit">
          {buttonLabel}
        </Button>
      </S.ButtonContainer>
    </S.Form>
  );
}

export default ContactForm;

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
