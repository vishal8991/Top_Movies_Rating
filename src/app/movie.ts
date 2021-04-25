import { Comment } from './comment';
export interface Movie{
    id: number;
    name: string;
    imgPath: string;
    desc: string;
    rating: number;
    comments: Comment[];
}