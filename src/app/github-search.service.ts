import { Repo } from './repo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {

  private username="NinaWendy"

  constructor(private http: HttpClient) { 
    console.log('Github Search Service started..')
  }

  getUser(){
    return this.http.get<User>('https://api.github.com/users/'+this.username);
  }

  getRepo(){
    return this.http.get<Repo>('https://api.github.com/users/'+ this.username + '/repos')
  }
  updateUser(username:any){
    this.username=username;
  }

}
