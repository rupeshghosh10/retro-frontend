import { describe, expect, it, vi } from 'vitest';
import { createBoard, joinBoard } from './board';
import apiClient from './client/apiClient';
import { CreateBoardResponse } from './responses/CreateBoardResponse';
import { JoinBoardResponse } from './responses/JoinBoardResponse';

vi.mock('./client/apiClient');

describe('boardService', () => {
  it('should call apiClient.post with correct parameters for createBoard', async () => {
    const mockResponse: { data: CreateBoardResponse } = {
      data: { publicId: '123', name: 'Sprint Retro' },
    };
    vi.mocked(apiClient.post).mockResolvedValue(mockResponse);

    const result = await createBoard('Sprint Retro', 'Alice');

    expect(apiClient.post).toHaveBeenCalledWith('/api/boards', null, {
      params: { name: 'Sprint Retro', creatorName: 'Alice' },
    });
    expect(result).toEqual(mockResponse.data);
  });

  it('should call apiClient.post with correct parameters for joinBoard', async () => {
    const mockResponse: { data: JoinBoardResponse } = {
      data: {
        boardUser: {
          id: 1,
          board: { id: 2, publicId: '456', name: 'Team Retro', createdAt: '2024-01-01T12:00:00Z' },
          user: { id: 3, publicId: '789', name: 'Bob', createdAt: '2024-01-02T12:00:00Z' },
          role: 'USER',
          status: 'ACTIVE',
          joinedAt: '2024-01-03T12:00:00Z',
          lastActiveAt: '2024-01-04T12:00:00Z',
        },
        wsEndpoint: 'wss://example.com/ws',
        boardTopic: 'team-retro-topic',
        token: 'mock-token',
        joinEndpoint: 'https://example.com/join',
      },
    };
    vi.mocked(apiClient.post).mockResolvedValue(mockResponse);

    const result = await joinBoard('123', 'Bob');

    expect(apiClient.post).toHaveBeenCalledWith('/api/board/123/join', null, {
      params: { userName: 'Bob' },
    });
    expect(result).toEqual(mockResponse.data);
  });
});
