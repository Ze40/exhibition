import Container from './shared/ui/Container';
import { css } from './styled-system/css';
import CardWrapper from './widgets/card-wrapper/ui/CardWrapper';
import Header from './widgets/header/Header';

const App = () => {
  return (
    <>
      <Header />
      <main className={css({ background: "url('./assets/bg.png')", width: '100%' })}>
        <Container>
          <CardWrapper />
        </Container>
      </main>
    </>
  );
};

export default App;
