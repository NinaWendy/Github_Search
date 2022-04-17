import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {

  private username="NinaWendy"

  constructor(private http: HttpClient) { 
    console.log('Github Search Service started..')
  }

  getUser(){
    return this.http.get('https://api.github.com/users/'+this.username);
  }

  getRepo(){
    return this.http.get('https://api.github.com/users/'+ this.username + '/repos')
  }

}
