interface User {
  name: string;
  publicId: string;
}

interface Card {
  text: string;
  columnType: string;
  user: User;
}

export interface BoardResponse {
  boardId: string;
  boardName: string;
  cards: Card[];
}
