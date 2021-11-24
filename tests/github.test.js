const GithubAPI = require('../api/github');

const githubAPI = new GithubAPI('asyncapi');

describe("githubAPI should", () => {
    test('load number of repos', async () => {
        const {count} = await githubAPI.repos();
        expect(count).toBeDefined();
    })
})