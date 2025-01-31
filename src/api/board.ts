import apiClient from './client/apiClient';
import { CreateBoardResponse } from './responses/CreateBoardResponse';
import { JoinBoardResponse } from './responses/JoinBoardResponse';

export const createBoard = async (name: string, creatorName: string) => {
  const responses = await apiClient.post<CreateBoardResponse>('/api/boards', null, {
    params: { name, creatorName },
  });

  return responses.data;
};

export const joinBoard = async (boardId: string, userName: string) => {
  const response = await apiClient.post<JoinBoardResponse>(`/api/board/${boardId}/join`, null, {
    params: { userName },
  });

  return response.data;
};
