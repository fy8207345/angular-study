import { Component } from '@angular/core';
import { repos } from 'src/app/core/models/repos';
import { GitHubService } from 'src/app/core/services/github.service';
 
 
@Component({
    templateUrl: './repo-list.component.html',
})
export class RepoListComponent
{
    userName: string ="angular"
    repos: repos[];
 
    loading: boolean=false;
    errorMessage;
 
    constructor(private githubService: GitHubService) {
    }
 
    public getRepos() {
        this.loading=true;
        this.errorMessage="";
        this.githubService.getRepos(this.userName)
            .subscribe((response) => {this.repos=response;},
            (error) => {this.errorMessage=error; this.loading=false; },
            () => {this.loading=false;})
    }
}