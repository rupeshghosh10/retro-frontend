import { StompSessionProvider } from 'react-stomp-hooks';
import Board from './components/Board';

const BoardScreen = () => {
  return (
    <StompSessionProvider url={`${import.meta.env.VITE_API_BASE_URL}/websocket`}>
      <Board />
    </StompSessionProvider>
  );
};

export default BoardScreen;
