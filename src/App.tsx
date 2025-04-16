interface AppProps {
  className?: string;
}

const App = ({ className }: AppProps) => {
  return <div className={className}></div>;
};

export default App;
