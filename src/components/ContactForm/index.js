import {
  FormGroup, Loader, Input, Select, Button,
} from 'components';
import useErrors from 'hooks/useErrors';
import PropTypes from 'prop-types';
import React, { useState, useEffect, useCallback } from 'react';
import CategoriesService from 'services/CategoriesService';
import formatCapitalize from 'utils/formatCapitalize';
import formatPhone from 'utils/formatPhone';
import isEmailValid from 'utils/isEmailValid';

import * as S from './styles';

export function ContactForm({ buttonLabel, contact = null, action }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasErrors, setHasErrors] = useState(false);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);

  const {
    errors,
    setError,
    removeError,
    getErrorMessageByFieldName,
  } = useErrors();

  const loadCategories = useCallback(async () => {
    try {
      setLoading(true);
      const response = await CategoriesService.listCategories();

      setCategories(response);
      setHasErrors(false);
    } catch (error) {
      setHasErrors(true);
    } finally {
      setLoading(false);
      setTimeout(() => {
        setIsLoadingCategories(false);
      }, 2000);
    }
  }, []);

  const isFormValid = name && errors.length === 0;

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
    action({
      data: {
        name,
        email,
        phone,
        // eslint-disable-next-line camelcase
        category_id: category || null,
      },
      contactId: contact?.id || null,
    });
  }

  useEffect(() => {
    setName(contact?.name || '');
    setEmail(contact?.email || '');
    setPhone(contact?.phone || '');
    setCategory(contact?.category_id || '');
    loadCategories();
  }, [contact, loadCategories]);

  return (
    <S.Form onSubmit={handleSubmit} noValidate>
      <Loader isLoading={loading} />
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          type="text"
          placeholder="Nome *"
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
      <FormGroup isLoading={isLoadingCategories} error={getErrorMessageByFieldName('category')}>
        <Select
          value={category}
          setValue={setCategory}
          fieldName="category"
          isLoading={isLoadingCategories}
        >
          <option value="">Categoria</option>
          {!hasErrors && (categories.map((item) => (
            <option key={item.id} value={item.id}>
              {formatCapitalize(item.name)}
            </option>
          )))}
        </Select>
      </FormGroup>
      <S.ButtonContainer>
        <Button type="submit" disabled={!isFormValid}>
          {buttonLabel}
        </Button>
      </S.ButtonContainer>
    </S.Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    category_id: PropTypes.string,
    category_name: PropTypes.string,
  }),
  // eslint-disable-next-line react/require-default-props
  action: PropTypes.func,
};
