# Hikaya deployment process

Deployment process is setup using GitHub Actions. The GitHub workflow ymls are [here](https://github.com/hikaya-io/dots/tree/develop/.github/workflows).

## Manual steps to trigger deployment to production

Steps to deploy to production are outlined [here](cicd.md#steps-for-deployment-to-production-from-github-repo)

## Automated deployment

Currently GitHub Actions are setup to automate deployment to production through Digital Ocean.

When a **Pull request** is made but not merged the following tasks are triggered:

- Sets up a Linux environment (ubuntu-latest) with the specified directory.
- Setup: Checks out the repository, sets up Python 3.9, Docker, MongoDB, PostgreSQL, and a Stripe mock server.
- Environment setup: Installs required Python packages and verifies all services are running.
- Testing: Runs code formatting checks with black and runs tests with pytest. It also collects and uploads code coverage to Codecov.

When a **release** is published the following are triggered:

- Docker setup: Sets up Docker and installs [doctl](https://github.com/marketplace/actions/github-action-for-digitalocean-doctl) to connect to DigitalOcean.
- Log in to DigitalOcean Container Registry: Authenticates with a short-lived token.
- Build and Push: Executes a script to build and push the Docker image.
- Environment setup: Copies environment variables and syncs other necessary files to the deployment server using [rsync](https://github.com/marketplace/actions/rsync-deployments-action).
- Deployment: Uses SSH to update and start containers on the production server, running necessary migrations using [ssh commands](https://github.com/marketplace/actions/ssh-execute-commands).

## Server setup

We have set up our server on Digital Ocean. The details can be found in the next [section](#digital-ocean-server-setup). In general the setup process is as follows:

### Backend

1. Host Dots backend first. To do so create a VM with 2GB memory 50GB disk space. This is similar to a DO Droplet. Add relevant SSH and domains to the server. Currently we don't have any other user other than `root`.
2. Enable firewall for the server.
3. Once the VM is creates SSH into the server and install necessary packages like Docker.

### Database

1. Create 2 database for Dots, one PostgreSQL and one MongoDB.
2. Add users to the databases e.g. `admin` and add database names e.g. `dots-production`.
3. Link the previously created VM to the database as its source.

### Container registry

Create container registry to store the built backend images.

### Frontend

Host the frontend either separately on e.g on netlify or DO app platform. And then link to the backend VM and databases (?)

## Digital Ocean server setup

Please note the following is written as of November 2024. Digital Ocean UI may change there after.

### 1. Create Projects

[Create projects](https://docs.digitalocean.com/products/projects/how-to/create/) on Digital ocean. We currently have two projects Hikaya and Dots.

Hikaya contains the `dots-prod` and `website` app, postgres and mongo databases, spaces, and domains.

[Screenshots](https://drive.google.com/drive/folders/1B1N3o-WQ19jrbgJTBFYpswkqvq7QhMjs?usp=sharing)

### 2. Add Domain

Go to the Networking section and [add domains](https://docs.digitalocean.com/products/networking/dns/how-to/add-domains/) for the Hikaya app.

[Screenshots](https://drive.google.com/drive/folders/1jUNUubl9ib49t82UJepiLbjM-8HtTK8Y?usp=sharing)

### 3. Create Droplets

[Create a droplet](https://docs.digitalocean.com/products/droplets/how-to/create/) for `dots-prod`.
Make sure to add SSH keys to the droplet. If SSH keys are not added, add them as screenshots [here](#8-add-ssh-and-certificates). Add domain `dots-be.hikaya.app` to the droplet.
Currently we don't have any other user other than `root`.
Enable firewall for the droplet, by SSHing into the server and enabling [ufw](https://www.digitalocean.com/community/tutorials/ufw-essentials-common-firewall-rules-and-commands) (TBD).

[Screenshots](https://drive.google.com/drive/folders/1yQJV6N77MzAmB6SoDTUwEYuoTKzq78NI?usp=sharing)

### 4. Set environment variable on GitHub secrets

Make sure relevant environment variables are added to GitHub secrets if using GitHub actions.

### 5. Create databases

Current we have two databases for Dots, one PostgreSQL and one MongoDB.
Add the `dots-prod` droplet as the trusted source for the databases and also add users for the database.
We are not using any load balancers at the moment.

### 6. Create App

For hosting the frontend [create app](https://docs.digitalocean.com/products/app-platform/how-to/create-apps/) on digital ocean. Add the frontend environment variables here. Also add relevant domain `dots.hikaya.app` to the app.

[Screenshots](https://drive.google.com/drive/folders/1jQ5WLJciV3Pkr3QgglvD7dh9To0pHXdq?usp=sharing)

### 7. Create Container Registry

We need to [create container registry](https://docs.digitalocean.com/products/container-registry/getting-started/quickstart/) for dots backend. This is because we need to store the built image somewhere before pulling from the server.

[Screenshots](https://drive.google.com/drive/folders/1QpH005N9YJDR4RZFi03cdFXoFjFAKhsd?usp=sharing)

### 8. Add SSH and certificates

Under the Setting > security section add SSH keys of the team members and certificates. We need certificates for the domain.

[Screenshots](https://drive.google.com/drive/folders/1HY7peh-BQMD9QrJK42VyhCCmnNOSbADD?usp=sharing)
