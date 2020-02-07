import { User } from './user';

export class Item {
    title: String;
    owner: User;
    description: String;
    imageSrc?: String; //Only for mocking
    likes: Number;
}