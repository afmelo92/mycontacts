/* eslint-disable import/order */
import { Toast } from 'components';
import { Header } from 'components/Header';
import { useToast } from 'hooks/useToast';
import { BrowserRouter } from 'react-router-dom';
import Routes from 'Routes';
import { ThemeProvider } from 'styled-components';

import * as S from './styles';
import GlobalStyle from 'assets/styles/global';
import defaultTheme from 'assets/styles/themes/default';

export function App() {
  const { messages } = useToast();

  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        {messages.length > 0 && <Toast />}
        <S.Container>
          <Header />
          <Routes />
        </S.Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}
