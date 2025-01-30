import apiClient from './client/apiClient';
import { CreateBoardResponse } from './responses/CreateBoardResponse';
import { JoinBoardResponse } from './responses/JoinBoardResponse';

export const createBoard = (name: string, creatorName: string) => {
  return apiClient.post<CreateBoardResponse>('/api/boards', null, {
    params: {
      name,
      creatorName,
    },
  });
};

export const joinBoard = (boardId: string, userName: string) => {
  return apiClient.post<JoinBoardResponse>(`/api/board/${boardId}/join`, null, {
    params: {
      userName,
    },
  });
};
