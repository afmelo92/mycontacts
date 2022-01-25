import styled, { css, keyframes } from 'styled-components';

const toastInRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

// const toastInLeft = keyframes`
//   from {
//     transform: translateX(100%);
//   }
//   to {
//     transform: translateX(0);
//   }
// `;

const positionTopRight = css`
  top: 2rem;
  right: 2rem;
  transition: transform .6s ease-in-out;
  animation: ${toastInRight} .5s;
`;

// const positionBottomRight = css`
//   bottom: 12px;
//   right: 12px;
//   transition: transform .6s ease-in-out;
//   animation: ${toastInRight} .5s;
// `
// const positionTopLeft = css`
//   top: 12px;
//   left: 12px;
//   transition: transform .6s ease-in;
//   animation: ${toastInLeft} .5s;
// `
// const positionTopLeft = css`
//   bottom: 12px;
//   left: 12px;
//   transition: transform .6s ease-in;
//   animation: ${toastInLeft} .5s;
// `

export const Container = styled.div`
  ${({ theme, show }) => css`
    z-index: 9999;
    font-size: 14px;
    /* background: ${theme.colors.success.main}; */
    color: #eee;
    position: fixed;
    /* top: 2rem;
    right: 2rem; */
    border-radius: 4px;
    transition: 0.5s ease;

    ${show && positionTopRight}
  `}
`;

export const ToastContainer = styled.div`
  background: #fff;
  transition: .3s ease;
  position: relative;
  pointer-events: auto;
  overflow: hidden;
  margin: 0 0 6px;
  padding: 30px;
  margin-bottom: 15px;
  width: 300px;
  max-height: 100px;
  border-radius: 3px 3px 3px 3px;
  box-shadow: 0 0 10px #999;
  color: #000;
  opacity: .9;
  background-position: 15px;
  background-repeat: no-repeat;

  height: 50px;
  width: 365px;
  color: #fff;
  padding: 20px 15px 10px 10px;

  &:hover {
    box-shadow: 0 0 12px #fff;
    opacity: 1;
    cursor: pointer
  }

  div {
    h4 {
      font-weight: 700;
      font-size: 16px;
      text-align: left;
      margin-top: 0;
      margin-bottom: 6px;
      width: 300px;
      height: 18px;
    }

    p {
      margin: 0;
      text-align: left;
      height: 18px;
      margin-left: -1px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  button {
    position: relative;
    right: -.3em;
    top: -.3em;
    float: right;
    font-weight: 700;
    color: #fff;
    outline: none;
    border: none;
    text-shadow: 0 1px 0 #fff;
    opacity: .8;
    line-height: 1;
    font-size: 16px;
    padding: 0;
    cursor: pointer;
    background: 0 0;
    border: 0;
  }
`;

export const Image = styled.div`
  float: left;
  margin-right: 15px;

  img {
    width: 30px;
    height: 30px;
    background: #000;
  }
`;

// const slideFromLeft = keyframes`
//   0% {
//     transform: translateX(100%);
//   }
//   100% {
//     transform: translateX(0);
//     opacity: 1;
//   }
// `;

// const slidetoLeft = keyframes`
//   0% {
//     transform: translateX(0);
//   }
//   100% {
//     transform: translateX(100%);
//     opacity: 1;
//   }
// `;
