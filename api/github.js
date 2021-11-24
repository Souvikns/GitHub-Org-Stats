"use strict" 

const { Octokit } = require('octokit');

class GithubAPI {
    constructor(orgName) {
        this.org = orgName;
        this._octokit = new Octokit();
    }
    
    async repos(){
        const {data: repoList} = await this._octokit.request('GET /orgs/{org}/repos', {org: this.org});
        return {
            count: repoList.length
        }
    }
}

module.exports = GithubAPI