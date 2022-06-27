# Hikaya CI/CD process

We are currently using [Github Actions](https://docs.github.com/en/free-pro-team@latest/actions) for simple build checks and deployments to our environments.

We use `CodeCov` to provide reports on test coverage for each Pull Request against the main branches. Over time, our aim is to increase test coverage including unit tests, integration tests, end-to-end tests, and automatic deployments to development process.

We have a CI/CD process set up for deployment to all our environments. On `develop`, any PR that is merged will automatically deploy to our dev environment. Any developer is allowed to deploy their changes to `develop` environment. To request access, contact one of the maintainers.

<!-- This is copied from start/development-process -->