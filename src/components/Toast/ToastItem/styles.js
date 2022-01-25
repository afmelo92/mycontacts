import styled, { keyframes, css } from 'styled-components';

const appearFromRight = keyframes`
  0% {
    transform: translateX(100%);
  }
  5%, 95% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(150%);
  }
`;

const withTypeStyle = css`
  ${({ type }) => {
    switch (type) {
      case 'success':
        return `
          background: #56ab2f;
          background: -webkit-linear-gradient(to left, #a8e063, #56ab2f);
          background: linear-gradient(to left, #a8e063, #56ab2f);
        `;
      case 'danger':
        return `
          background: #cb2d3e;
          background: -webkit-linear-gradient(to right, #ef473a, #cb2d3e);
          background: linear-gradient(to right, #ef473a, #cb2d3e);
        `;
      case 'warning':
        return `
          background: #F09819;
          background: -webkit-linear-gradient(to right, #EDDE5D, #F09819);
          background: linear-gradient(to right, #EDDE5D, #F09819);
          color: #333`;
      case 'info':
        return `
          background: #00c6ff;
          background: -webkit-linear-gradient(to left, #0072ff, #00c6ff);
          background: linear-gradient(to left, #0072ff, #00c6ff);
          color: #eee`;
      default:
        return `
          background-color: white;
          color: #666`;
    }
  }}
`;

export const Container = styled.div`
  position: relative;
  color: #eee;
  padding: 16px;
  width: 300px;
  margin-bottom: 8px;
  border-radius: 4px;
  line-height: 1.3;
  animation: ${appearFromRight} 5s ease;
  animation-direction: alternate;
  cursor: pointer;
  opacity: 0.9;
  box-shadow: 0 0 10px #999;
  transition: 0.3s ease;
  overflow: hidden;
  ${withTypeStyle};

  h1 {
    font-size: 16px;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    overflow: hidden;
  }

  span {
    position: absolute;
    right: 8px;
    top: 8px;
    font-size: 10px;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
      color: #333;
    }
  }

  &:hover {
    box-shadow: 0 0 10px #fff;
  }
`;
