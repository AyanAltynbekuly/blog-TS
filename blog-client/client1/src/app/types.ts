export interface Post {
    id: string;
    title: string;
    body: string;
    comments: Comment[];
  }
  
  export interface Comment {
    id: number;
    name: string;
    email: string;
    body: string;
    postId: string;
  }