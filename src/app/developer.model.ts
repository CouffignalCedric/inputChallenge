import { Skill } from "./skill.model";

export class Developer {
    
    constructor(
        public  lastName: string = "Jean",
        public firstName :string ="",
        public age :number = 0,
        public gender :string = "",
        public bio :string ="",
        public skills: Skill[] = []
        ){}
        

}
