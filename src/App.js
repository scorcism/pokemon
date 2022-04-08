import Home from './components/Home';
import {Context} from './components/context/Context';

function App() {
  return (
    <>
      <Context>
        <Home />
      </Context>
    </>
  );
}

export default App;
