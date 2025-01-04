import './index.css';
import Home from './screens/home/HomeScreen';
import { BrowserRouter, Route, Routes } from 'react-router';
import RoutesEnum from './routesEnum';
import CreateBoardScreen from './screens/createBoard/CreateBoardScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesEnum.Home} element={<Home />} />
        <Route path={RoutesEnum.CreateBoard} element={<CreateBoardScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
