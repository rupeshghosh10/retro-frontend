import { BrowserRouter, Route, Routes as ReactRoutes } from 'react-router';
import Navbar from '@/components/Navbar';
import useTheme from '@/hooks/useTheme';
import BoardScreen from '@/screens/board/BoardScreen';
import CreateBoardScreen from '@/screens/createBoard/CreateBoardScreen';
import Home from '@/screens/home/HomeScreen';
import JoinBoardScreen from '@/screens/joinBoard/JoinBoardScreen';
import RoutesEnum from './routesEnum';

const Routes = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <BrowserRouter basename="/retro-frontend">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <ReactRoutes>
        <Route path={RoutesEnum.Home} element={<Home />} />
        <Route path={RoutesEnum.CreateBoard} element={<CreateBoardScreen />} />
        <Route path={RoutesEnum.JoinBoard} element={<JoinBoardScreen />} />
        <Route path={RoutesEnum.Board} element={<BoardScreen />} />
      </ReactRoutes>
    </BrowserRouter>
  );
};

export default Routes;
