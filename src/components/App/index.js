/* eslint-disable import/order */
import { Header } from 'components/Header';
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
        <S.Container>
          <Header />
          <Routes />
        </S.Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}
