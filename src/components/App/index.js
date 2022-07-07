/* eslint-disable import/order */
import { ToastContainer, Header } from 'components';
import { BrowserRouter } from 'react-router-dom';
import Routes from 'Routes';
import { ThemeProvider } from 'styled-components';

import * as S from './styles';
import GlobalStyle from 'assets/styles/global';
import defaultTheme from 'assets/styles/themes/default';

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <ToastContainer />
        <S.Container>
          <Header />
          <Routes />
        </S.Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}
