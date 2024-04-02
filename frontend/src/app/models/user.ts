export class User{
    id: number;
    username: string;
    password: string;
    isAdmin: boolean;

    constructor(id: number, username: string, password: string, isAdmin: boolean){
        this.id = id;
        this.username = username;
        this.password = password;
        this.isAdmin = isAdmin;
    }
}