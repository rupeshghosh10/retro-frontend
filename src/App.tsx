import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Navbar from './components/Navbar';
import RoutesEnum from './routesEnum';
import CreateBoardScreen from './screens/createBoard/CreateBoardScreen';
import Home from './screens/home/HomeScreen';

function App() {
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
