import { create } from 'zustand';

interface BoardState {
  username: string;
  boardId: string;
  boardName: string;
  setBoard: (username: string, boardId: string, boardName: string) => void;
}

const useBoardStore = create<BoardState>()(set => ({
  username: '',
  boardId: '',
  boardName: '',
  setBoard: (username: string, boardId: string, boardName: string) =>
    set({ username, boardId, boardName }),
}));

export default useBoardStore;
