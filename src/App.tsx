import './index.css';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import { themeChange } from 'theme-change';
import Navbar from './components/Navbar';
import RoutesEnum from './routesEnum';
import CreateBoardScreen from './screens/createBoard/CreateBoardScreen';
import Home from './screens/home/HomeScreen';

function App() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={RoutesEnum.Home} element={<Home />} />
        <Route path={RoutesEnum.CreateBoard} element={<CreateBoardScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
