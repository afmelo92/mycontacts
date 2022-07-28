import {
  FormGroup, Input, Select, Button,
} from 'components';
import useErrors from 'hooks/useErrors';
import useSafeAsyncState from 'hooks/useSafeAsyncState';
import PropTypes from 'prop-types';
import React, {
  useState, useEffect, useCallback, forwardRef, useImperativeHandle,
} from 'react';
import CategoriesService from 'services/CategoriesService';
import formatCapitalize from 'utils/formatCapitalize';
import formatPhone from 'utils/formatPhone';
import isEmailValid from 'utils/isEmailValid';

import * as S from './styles';

export const ContactForm = forwardRef(({ buttonLabel, action }, ref) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const [contactId, setContactId] = useState(null);
  const [categories, setCategories] = useSafeAsyncState([]);
  const [hasErrors, setHasErrors] = useState(false);
  const [isLoadingCategories, setIsLoadingCategories] = useSafeAsyncState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    errors,
    setError,
    removeError,
    getErrorMessageByFieldName,
  } = useErrors();

  const loadCategories = useCallback(async () => {
    try {
      const response = await CategoriesService.listCategories();

      setCategories(response);
      setHasErrors(false);
    } catch (error) {
      setHasErrors(true);
    } finally {
      setIsLoadingCategories(false);
    }
  }, [setCategories, setIsLoadingCategories]);

  const isFormValid = name && errors.length === 0;

  useImperativeHandle(ref, () => ({
    setFieldValues: (contact) => {
      setName(contact.name ?? '');
      setEmail(contact.email ?? '');
      setPhone(contact.phone ?? '');
      setCategory(contact.category_id ?? '');
      setContactId(contact.id ?? '');
    },
    resetFields: () => {
      setName('');
      setEmail('');
      setPhone('');
      setCategory('');
    },
  }), []);

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

  async function handleSubmit(event) {
    event.preventDefault();

    setIsSubmitting(true);

    await action({
      data: {
        name,
        email,
        phone,
        category_id: category || null,
      },
      contactId: contactId || null,
    });

    setIsSubmitting(false);
  }

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  return (
    <S.Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          type="text"
          placeholder="Nome *"
          value={name}
          onChange={handleNameChange}
          error={getErrorMessageByFieldName('name')}
          disabled={isSubmitting}
        />
      </FormGroup>
      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={handleEmailChange}
          error={getErrorMessageByFieldName('email')}
          disabled={isSubmitting}
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
          disabled={isSubmitting}
        />
      </FormGroup>
      <FormGroup isLoading={isLoadingCategories} error={getErrorMessageByFieldName('category')}>
        <Select
          value={category}
          setValue={setCategory}
          fieldName="category"
          isLoading={isLoadingCategories || isSubmitting}
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
        <Button
          type="submit"
          disabled={!isFormValid}
          isLoading={isSubmitting}
        >
          {buttonLabel}
        </Button>
      </S.ButtonContainer>
    </S.Form>
  );
});

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};
