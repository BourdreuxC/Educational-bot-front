import { Tag } from "./tag";

export class Speaker {
    id: string;
    name: string;
    nickname: string;
    enabled:boolean;
    tags: string[];

    constructor(id : string, name: string, nickname:string,enabled:boolean, tags:string[]) {
        this.id = id;
        this.name = name;
        this.nickname = nickname;
        this.enabled = enabled;
        this.tags = tags;
    }
}