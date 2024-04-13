import './App.css';
import Body from './components/body';
import { SongsProvider } from './contexts/SongsContext';

function App() {
  return (
    <>
      <SongsProvider>
        <Body />
      </SongsProvider>
    </>
  );
}

export default App;
