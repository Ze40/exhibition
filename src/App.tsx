import Header from './widgets/header/Header';

interface AppProps {
  className?: string;
}

const App = ({ className }: AppProps) => {
  return (
    <>
      <Header />
      <main></main>
    </>
  );
};

export default App;
