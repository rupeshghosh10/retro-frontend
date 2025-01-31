export interface JoinBoardResponse {
  boardUser: {
    id: number;
    board: {
      id: number;
      publicId: string;
      name: string;
      createdAt: string;
    };
    user: {
      id: number;
      publicId: string;
      name: string;
      createdAt: string;
    };
    role: 'ADMIN' | 'USER';
    status: 'ACTIVE' | 'INACTIVE';
    joinedAt: string;
    lastActiveAt: string;
  };
  wsEndpoint: string;
  boardTopic: string;
  token: string;
  joinEndpoint: string;
}
