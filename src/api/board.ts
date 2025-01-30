import apiClient from './client/apiClient';
import { CreateBoardResponse } from './responses/CreateBoardResponse';
import { JoinBoardResponse } from './responses/JoinBoardResponse';

export const createBoard = async (name: string, creatorName: string) => {
  return await apiClient.post<CreateBoardResponse>('/api/boards', null, {
    params: {
      name,
      creatorName,
    },
  });
};

export const joinBoard = async (boardId: string, userName: string) => {
  return await apiClient.post<JoinBoardResponse>(`/api/board/${boardId}/join`, null, {
    params: {
      userName,
    },
  });
};
