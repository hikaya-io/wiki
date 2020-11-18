# Hikaya CI/CD process

We are currently using [Github Actions](https://docs.github.com/en/free-pro-team@latest/actions) for simple build checks and deployments to our environments. 

We use `CodeCov` to provide reports on test coverage for each Pull Request against the main branches. Over time, our aim is to increase test coverage including unit tests, integration tests, end-to-end tests, and automatic deployments to development process.

We have a CI/CD process set up for deployment to all our environments. On `develop`, any PR that is merged will automatically deploy to our dev environment. Any developer is allowed to deploy their changes to `develop` environment. To request access, contact one of the maintainers.

## Steps for deployment to production from GitHub repo:

1. Review the issues completed during the sprint and write release notes for the GitHub repository.
2. For release notes ensure the `target` is set as `master` branch.
3. Create PRs from develop to master branch for the repo.
4. Ensure all tests have successfully passed for the PR.
5. For products with the frontend and backend in separate repos, make sure to merge the backend PR first. 
6. Use the "Create a merge commit" option to merge the PR. Don't use squash and merge or rebase option.
7. After the backend is merged, merge the frontend PR, using the "Create a merge commit" option again.
8. Publish the release for the backend repo first.
9. Then publish the release for frontend.

After the above steps are finished, deployment to Production should be triggered and completed.
