export interface User {
    login:string;
    bio:string;
    followers:number;
    following:number;
    public_repos:number;
    public_gists:number;
    email:string;
    blog:string;
    location:string;
    company:string;
    hireable:boolean;
    created_at:Date
}
