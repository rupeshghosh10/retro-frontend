import apiClient from './client/apiClient';
import { CreateBoardResponse } from './responses/CreateBoardResponse';
import { JoinBoardResponse } from './responses/JoinBoardResponse';

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

export interface TimerState {
  status: string;
  remainingSeconds: number;
  formattedTime: string;
}

export const startTimer = async (boardId: string, durationMinutes: number): Promise<TimerState> => {
  try {
    const response = await apiClient.post<TimerState>(`/api/board/${boardId}/timer/start`, null, {
      params: { durationMinutes },
    });
    return response.data;
  } catch {
    throw new Error('Failed to start timer. Please try again.');
  }
};

export const stopTimer = async (boardId: string): Promise<void> => {
  try {
    await apiClient.post(`/api/board/${boardId}/timer/stop`);
  } catch {
    throw new Error('Failed to stop timer. Please try again.');
  }
};

export const cancelTimer = async (boardId: string): Promise<void> => {
  try {
    await apiClient.post(`/api/board/${boardId}/timer/cancel`);
  } catch {
    throw new Error('Failed to cancel timer. Please try again.');
  }
};

export const getTimerState = async (boardId: string): Promise<TimerState> => {
  try {
    const response = await apiClient.get<TimerState>(`/api/board/${boardId}/timer/state`);
    return response.data;
  } catch {
    throw new Error('Failed to fetch timer state. Please try again.');
  }
};
