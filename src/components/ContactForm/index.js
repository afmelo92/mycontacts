import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';

import * as S from './styles';

function ContactForm({ buttonLabel }) {
  return (
    <S.Form>
      <FormGroup>
        <Input type="text" placeholder="Nome" />
      </FormGroup>
      <FormGroup error="O formato do e-mail é inválido.">
        <Input type="email" placeholder="E-mail" error />
      </FormGroup>
      <FormGroup>
        <Input type="text" placeholder="Telefone" />
      </FormGroup>
      <FormGroup>
        <Select>
          <option value="instagram">Instagram</option>
          <option value="instagram">Instagram</option>
          <option value="instagram">Instagram</option>
          <option value="instagram">Instagram</option>
          <option value="instagram">Instagram</option>
          <option value="instagram">Instagram</option>
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
