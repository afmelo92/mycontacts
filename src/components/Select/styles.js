import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  ::after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    right: 10px;
    width: 10px;
    height: 10px;
    border-left: 2px solid;
    border-bottom: 2px solid;
    border-color: ${({ theme }) => theme.colors.gray[900]};
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  select {
    width: 100%;
    background: #fff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    height: 52px;
    border: 2px solid #fff;
    border-radius: 4px;
    outline: none;
    padding: 0 16px;
    font-size: 16px;

    transition: border-color 0.2s ease;

    appearance: none;
    position: relative;

    &:focus {
      border-color: ${({ theme }) => theme.colors.primary.main};
    }
  }


`;
