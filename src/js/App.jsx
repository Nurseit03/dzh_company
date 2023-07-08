import '../css/App.css';
import '../css/cssreset.css';
import Main from './pages/Main';
import { Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
