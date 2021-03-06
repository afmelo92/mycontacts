import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
`;

export const Header = styled.div`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray[100]};
  padding-bottom: 16px;

  strong {
    font-size: 24px;
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    font-weight: bold;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    border-radius: 4px;
    padding: 8px 16px;
    transition: background 0.4s ease, color 0.4s ease;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
      color: #fff;
    }
  }
`;

export const ListHeader = styled.header`
  ${({ theme, orderBy }) => css`
    margin-top: 24px;
    margin-bottom: 8px;



    button {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;

      span {
        margin-right: 8px;
        font-weight: bold;
        color: ${theme.colors.primary.main};
      }

      img {
        transition: transform 0.5s ease;
        transform: ${orderBy === 'asc' ? 'rotate(180deg)' : 'rotate(0deg)'};
      }
    }
  `}
`;

export const Card = styled.div`
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 16px;
  }

  .info {
    .contact-name {
      display: flex;
      align-items: center;

      small {
        background: ${({ theme }) => theme.colors.primary.lighter};
        color: ${({ theme }) => theme.colors.primary.main};
        font-weight: bold;
        text-transform: uppercase;
        padding: 4px;
        border-radius: 4px;
        margin-left: 8px;
      }
    }

    span {
      display: block;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray[200]};
    }
  }

  .actions {
    display: flex;
    align-items: center;

    button {
      background: transparent;
      border: none;
      margin-left: 8px;
    }
  }
`;

export const InputSearchContainer = styled.div`
  width: 100%;

  input {
    width: 100%;
    background: #fff;
    border: none;
    border-radius: 25px;
    height: 50px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    outline: 0;
    padding: 0 16px;

    &::placeholder {
      color: #bcbcbc;
    }
  }
`;

export const ErrorContainer = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  strong {
    text-align: center;
    font-size: 22px;
    color: ${({ theme }) => theme.colors.danger.main}
  }
`;

export const EmptyListContainer = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: ${({ theme }) => theme.colors.gray[200]};
    text-align: center;
    margin-top: 8px;

    strong {
      color: ${({ theme }) => theme.colors.primary.main};

    }
  }

`;

export const SearchNotFoundContainer = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: flex-start;

  span {
    margin-left: 24px;
    color: ${({ theme }) => theme.colors.gray[200]};
    word-break: break-word;

    strong {

    }
  }
`;
