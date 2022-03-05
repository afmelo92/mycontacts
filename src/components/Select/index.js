import useErrors from 'hooks/useErrors';
import PropTypes from 'prop-types';

import * as S from './styles';

export function Select({
  children, value, setValue, fieldName, isLoading,
}) {
  const {
    getErrorMessageByFieldName,
  } = useErrors();

  return (
    <S.Container isLoading={isLoading}>
      <select
        value={value}
        onChange={(event) => setValue(event.target.value)}
        error={getErrorMessageByFieldName(fieldName)}
        disabled={isLoading}
      >
        {children}
      </select>
    </S.Container>
  );
}

Select.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  fieldName: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
};

Select.defaultProps = {
  isLoading: false,
};
