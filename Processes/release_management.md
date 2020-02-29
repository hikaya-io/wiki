# Release Management

## Process
Our typical release process looks like this:

1. Update `dev` branch and deploy to `[application-name]-dev` after every Pull Request via CI/CD
1. Update `staging` branch and deploy to `[application-name]-staging` on every Wednesday
1. Unit tests and end-to-end testing on `[application-name]-staging` Thursday - Monday
1. Update `master` branch and deploy to `production` at the end of every 2<sup>nd</sup> week (the following Monday)

![image.png](https://storage.googleapis.com/slite-api-files-production/files/17c024be-774a-4540-a33c-34fc3dc07ca3/image.png)

## Environments

Our deployment process goes through 3 environments hosted on Digital Ocean:

- `Dev`
- `Staging`
- `Production`

## Deployment Process

Deploying to `Dev` - 8 PM EAT every Sunday

Deploying to `Staging` - 8:30 AM EAT every Monday

Deploying to `Production` - 7:30 AM EAT every Wednesday

**Deployment**

- We will set up a CI/CD process for deployment to all our environments
  - Tool: Github Actions
- Any developer (ticket owner) should be able to deploy their changes to `develop` environment once their PR is merged
- After deployment the developer is to go to Jira/or the ticketing tool being used and move the ticket from Pull request to Dev Testing column
- Then the developer is to test the ticket on `develop`
- If the ticket passes the requirements on `develop` environment, the developer moves the ticket on Jira from Dev Testing to Staging
  - _The dragging of the ticket to Staging is done between Sunday 2000 hrs EAT - Monday 0830 hrs EAT_
- For last step:
  - _Developers are strongly discouraged from making PRs against dev branch for incomplete tickets. If there's anything that you want to test on dev environment, feel free to push your branch upstream and deploy it to dev environment:_


        1. Ssh into dev droplet
        1. run `git fetch all` to get your branch in the droplet
        1. checkout your branch
        1. restart gunicorn and nginx


            - (if you run migrations, from your personal branch, and the migration files are not on dev, remember to undo!!!)

- And yes, if your code has been merged to dev, you test it, and realize that you need to fix something, you'll have to make a new PR. Dev is protected against during push/force push. So the only way to get your code there is through a PR.
