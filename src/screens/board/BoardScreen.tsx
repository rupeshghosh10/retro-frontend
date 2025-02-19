import { StompSessionProvider } from 'react-stomp-hooks';
import Board from './components/Board';

const BoardScreen = () => {
  return (
    <StompSessionProvider url={'http://localhost:8081/websocket'}>
      <Board />
    </StompSessionProvider>
  );
};

export default BoardScreen;
