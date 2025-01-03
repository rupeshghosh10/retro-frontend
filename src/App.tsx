import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './screens/home/HomeScreen';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
