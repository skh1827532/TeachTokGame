interface MCQOption {
  id: string;
  answer: string;
}

interface MCQUser {
  name: string;
  avatar: string;
}

export interface MCQResponse {
  type: string;
  id: number;
  correctAnswer?: string;

  playlist: string;
  description: string;
  image: string;
  question: string;
  options: MCQOption[];
  user: MCQUser;
}
