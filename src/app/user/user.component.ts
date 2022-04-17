import { Component, OnInit } from '@angular/core';
import { GithubSearchService } from '../github-search.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user:any=[];
  repo:any=[];
  username:any=[];


  constructor(private _gitService:GithubSearchService) { 

    this._gitService.getUser().subscribe(data=>{
      this.user=data;
      console.log(this.user)
    });
    this._gitService.getRepo().subscribe(repo=>{
      this.repo=repo;
    });

  }
  search(){
    this._gitService.updateUser(this.username);
    console.log(this.username)
    this._gitService.getUser().subscribe(data=>{
    this.user=data;
    this._gitService.getRepo().subscribe(repo=>{
     this.repo=repo;
   });
   
   });
  }

  ngOnInit(): void {
  }

}
