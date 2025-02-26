import apiClient from './client/apiClient';
import { BoardResponse } from './responses/BoardResponse';
import { CreateBoardResponse } from './responses/CreateBoardResponse';
import { JoinBoardResponse } from './responses/JoinBoardResponse';
import { TimerResponse } from './responses/TimerResponse';

export const createBoard = async (name: string, creatorName: string) => {
  const responses = await apiClient.post<CreateBoardResponse>('/api/board', null, {
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

export const getBoard = async (boardId: string) => {
  const response = await apiClient.get<BoardResponse>(`/api/board/${boardId}/details`);
  return response.data;
};

export const addCard = async (boardId: string, content: string, type: string, userName: string) => {
  await apiClient.post(
    `/api/board/${boardId}/note`,
    { cardContent: content, columnType: type },
    { params: { userName, column: type } }
  );
};

export const startTimer = async (
  boardId: string,
  durationMinutes: number
): Promise<TimerResponse> => {
  const response = await apiClient.post<TimerResponse>(`/api/board/${boardId}/timer/start`, null, {
    params: { durationMinutes },
  });
  return response.data;
};

export const stopTimer = async (boardId: string): Promise<void> => {
  await apiClient.post(`/api/board/${boardId}/timer/stop`);
};

export const cancelTimer = async (boardId: string): Promise<void> => {
  await apiClient.post(`/api/board/${boardId}/timer/cancel`);
};

export const getTimerState = async (boardId: string): Promise<TimerResponse> => {
  const response = await apiClient.get<TimerResponse>(`/api/board/${boardId}/timer/state`);
  return response.data;
};
