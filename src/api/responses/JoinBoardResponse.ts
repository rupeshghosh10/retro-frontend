enum ROLE {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

enum STATUS {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

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
    role: ROLE;
    status: STATUS;
    joinedAt: string;
    lastActiveAt: string;
  };
  wsEndpoint: string;
  boardTopic: string;
  token: string;
  joinEndpoint: string;
}
