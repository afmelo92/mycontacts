import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';
import * as S from './styles';
import Header from '../Header';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <S.Container>
        <Header />
      </S.Container>
    </ThemeProvider>
  );
}

export default App;
