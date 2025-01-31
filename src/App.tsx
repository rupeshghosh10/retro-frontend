import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Navbar from './components/Navbar';
import useTheme from './hooks/useTheme';
import RoutesEnum from './routesEnum';
import CreateBoardScreen from './screens/createBoard/CreateBoardScreen';
import Home from './screens/home/HomeScreen';
import JoinBoardScreen from './screens/joinBoard/JoinBoardScreen';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <BrowserRouter basename="/retro-frontend">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path={RoutesEnum.Home} element={<Home />} />
        <Route path={RoutesEnum.CreateBoard} element={<CreateBoardScreen />} />
        <Route path={RoutesEnum.JoinBoard} element={<JoinBoardScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
