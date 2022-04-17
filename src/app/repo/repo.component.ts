import { Component, OnInit } from '@angular/core';
import { GithubSearchService } from '../github-search.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  user:any=[];
  repo:any=[];  
  constructor(private _gitService:GithubSearchService) { 
    this._gitService.getUser().subscribe(user=>{
      this.user=user;
      // console.log(this.user)
    });
    this._gitService.getRepo().subscribe(repo=>{
      this.repo=repo;
      console.log(this.repo)
    });

  }
  ngOnInit(): void {
  }

}
