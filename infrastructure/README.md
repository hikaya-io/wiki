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
3. Once the VM is creates SSH into the server and install necessary packages like Docker. Details of the server configuration can be found [here](#droplet-configuration).

### Database

1. Create 2 database for Dots, one PostgreSQL and one MongoDB.
2. Add users to the databases e.g. `admin` and add database names e.g. `dots-production`.
3. Link the previously created VM to the database as its source.

### Container registry

Create container registry to store the built backend images.

### Frontend

Host the frontend either separately on e.g on netlify or DO app platform.
The frontend app has an env variable it reads from when building, which contains the domain of the backend. All the info is contained in environment variables.

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
Enable firewall for the droplet, by SSHing into the server and enabling [ufw](https://www.digitalocean.com/community/tutorials/ufw-essentials-common-firewall-rules-and-commands). More details can be found in the next section on droplet configuration.

[Screenshots](https://drive.google.com/drive/folders/1yQJV6N77MzAmB6SoDTUwEYuoTKzq78NI?usp=sharing)

#### Droplet configuration

Once the droplet is setup docker needs to be configured on it.
The following sequence of commands sets up a Docker environment on a Linux machine, configure services, enables a firewall, and deploys a containerized application using Docker Compose.

<details>
  <summary>Droplet configuration commands</summary>

#### Docker Setup and Testing

```bash
    1  sudo groupadd docker
    2  sudo usermod -aG docker $USER
    3  su - dots
    4  docker run hello-world
    5  docker compose version
```

  `sudo groupadd docker`: Creates a new group named `docker`. This group allows users in it to run Docker commands without `sudo`.
  `sudo usermod -aG docker $USER`: Adds the current user (`$USER`) to the `docker` group to grant Docker permissions.
  `su - dots`: Switches to the `dots` user to apply group changes.
  `docker run hello-world`: Runs a test container to verify that Docker is installed and working correctly.
  `docker compose version`: Checks the installed version of Docker Compose to ensure it’s available.

#### Swap File Configuration

```bash
    6  sudo fallocate -l 2G /swapfile
    7  sudo chmod 600 /swapfile
    8  sudo mkswap /swapfile
    9  sudo swapon /swapfile
    10  sudo echo "/swapfile swap swap defaults 0 0" >> /etc/fstab
```

  `sudo fallocate -l 2G /swapfile`: Allocates a 2GB file for swap memory.
  `sudo chmod 600 /swapfile`: Sets strict permissions on the swap file.
  `sudo mkswap /swapfile`: Configures the file as swap space.
  `sudo swapon /swapfile`: Activates the swap file.
  `sudo echo "/swapfile swap swap defaults 0 0" >> /etc/fstab`: Adds the swap file to `/etc/fstab` for automatic mounting on boot. This command would likely fail without `sudo tee` because `echo` lacks the necessary permissions.

#### Firewall Configuration

```bash
    11  sudo ufw add http
    12  sudo ufw allow http
    13  sudo ufw allow https
    14  sudo ufw allow ssh
    15  sudo ufw enable
```

  `sudo ufw add http`: This is likely a typo. The correct command should be `sudo ufw allow http`.
  `sudo ufw allow http, https, ssh`: Opens ports for HTTP (80), HTTPS (443), and SSH (22).
  `sudo ufw enable`: Activates the firewall.

#### System Maintenance

```bash
    16  sudo apt autoremove
```

  `sudo apt autoremove`: Removes unused packages to free space.

#### Application Directory and Configuration

```bash
    17  ls
    18  mkdir app
    19  cd app
    20  touch .env.traefik
    21  nano .env.traefik
    22  ls
    23  ls -al
    24  nano .env.docker-compose
    25  nano docker-compose.prod.yml
```

  `mkdir app`, `cd app`, `touch .env.traefik`, `nano .env.traefik`: Creates a directory for the app, navigates to it, creates an environment file for Traefik, and opens it in a text editor.
  `nano .env.docker-compose`, `nano docker-compose.prod.yml`: Creates and edits environment and Docker Compose files for production.

#### Installing DigitalOcean CLI

```bash
    26  sudo snap install doctl
    27  doctl auth init
    28  mkdir .config
    29  doctl auth init
    30  sudo doctl auth init
    31  mkdir ~/.config
    32  doctl auth init
    33  ls
    34  rm .config
    35  rm -r .config
```

  `sudo snap install doctl`: Installs the DigitalOcean CLI (`doctl`).
  `doctl auth init`: Initializes authentication for the DigitalOcean CLI. Multiple attempts likely indicate troubleshooting.
  `mkdir .config`, `rm .config`: Creates and removes configuration directories, possibly due to configuration errors.

#### Docker Registry and Application Deployment

```bash
    36  doctl registry login
    37  cd ..
    38  doctl registry login
    39  sudo snap connect doctl:dot-docker
    40  doctl registry login
    41  cd app
    42  ls
    43  docker compose -f docker-compose.prod.yml up
    44  cd app/
    45  nano docker-compose.prod.yml
    46  docker compose -f docke-compose.prod.yml up
    47  docker compose -f docker-compose.prod.yml up
    48  docker compose -f docker-compose.prod.yml up -d
    49  cd app
    50  nano docker-compose.prod.yml
    51  docker compose -f docker-compose.prod.yml up -d
    52  docker compose -f docker-compose.prod.yml run api ./migrate.sh
```

  `doctl registry login`: Logs into the DigitalOcean container registry.
  `docker compose` commands: Runs the Docker Compose configuration to bring up containers.
  `docker compose -f docker-compose.prod.yml up -d`: Starts the containers in detached mode.
  Various commands: Includes editing Docker Compose files, running migrations, and restarting services.

#### Application Management

```bash
    53  sudo apt update
    54  sudo apt upgrade
    55  docker ps
    56  ls
    57  cd app/
    58  ls
    59  ls -al
    60  nano .env.docker-compose
    61  ls
    62  docke ps
    63  docker logs api -f
    64  nano .env.docker-compose
    65  docker logs api -f --tail 100
    66  nano .env.docker-compose
    67  cd app/
    68  ls
    69  nano docker-compose.prod.yml
    70  docker compose -f docker-compose.prod.yml up -d
    71  docker logs api -f --tail 100
    72  docker logs worker -f --tail 100
    73  docker logs api -f --tail 100
```

  `sudo apt update`, `upgrade`: Updates the system packages.
  Logs and troubleshooting: Inspects logs and reconfigures files to debug the application.

#### SSH Configuration and Final Steps

```bash
    74  nano .ssh/authorized_keys
    75  q
    76  ls
    77  cd app
    78  ls
    79  ls -a
    80  cat .env.docker-compose
    81  exit
    82  docker exec -it api bash
```

  `nano .ssh/authorized_keys`: Edits SSH keys to allow secure remote access.
  `docker exec -it api bash`: Opens an interactive shell inside the running api container.
</details>

<details>
  <summary>BE environment variables</summary>

#### .env.docker-compose

```.env
AWS_ACCESS_KEY_ID=VXOLQUW5PD2BBLJG6XVT
AWS_LOCATION=backend
AWS_SECRET_ACCESS_KEY="YIdufA8imsW+kEJIXDqusWYyW3SdwwETYh4EPRNqZKs"
AWS_STORAGE_BUCKET_NAME=dots-prod
BASE_URL=https://dots.hikaya.app
DB_HOST=dots-productuction-new-do-user-6323497-0.b.db.ondigitalocean.com
DB_NAME=dots-production-db
DB_PASSWORD=XXXX
DB_PORT=25060
DB_USER=doadmin
DEFAULT_API_URL=https://dots-be.hikaya.app
DJANGO_ALLOWED_HOSTS="*"
DOTS_MONGO_DB_NAME="dots-prod"
EMAIL_HOST=smtp.gmail.com
EMAIL_HOST_PASSWORD="g#tWbh3376g0"
EMAIL_PORT=587
EMAIL_HOST_USER=support@hikaya.io
SENDER_EMAIL="Hikaya team <support@hikaya.io>"
KOBO_URI=https://kobo.humanitarianresponse.info/api/v2
POSTMARK_API_KEY="da1ffa53-183c-4b74-b473-601b835ca58f"
SECRET_KEY=bV53dzkwd2s5N2VfeG5paTh3bm00dm0mZ3picm8mb2RrQDRfIWpzaDEwZj0rNz0o
STRIPE_PRIVATE_KEY="XXXX"
STRIPE_PUBLIC_KEY="XXXX"
STRIPE_SIGNATURE="whsec_COu9HPkHPirMz1HaHjwvBsQOcYcjOAHS"
USE_S3=TRUE
BROKER_URL=redis://redis:6379/0
REDIS_URL=redis://redis:6379
REDIS_HOST=redis
REDIS_PORT=6379
DOTS_MONGO_URI=mongodb+srv://dev:25Nqocs407396vFA@dots-production-mongodb-b8f94b58.mongo.ondigitalocean.com/dots-dev?authSource=admin&replicaSet=dots-production-mongodb
DO_AUTH_TOKEN=XXXX
MONGO_CA_FILE="-----BEGIN CERTIFICATE-----
XXXX
-----END CERTIFICATE-----"
```

#### .env.traefik

```.env
DO_AUTH_TOKEN=XXXX
```

#### docker-compose.prod.yml

```yml
version: '3.7'
services:
  traefik:
    image: "traefik:v2.9"
    container_name: "traefik"
    command:
      - "--log.level=DEBUG"
      - "--api.insecure=true"
      - "--providers.docker=true"
      - "--providers.docker.exposedbydefault=false"
      - "--entrypoints.web.address=:80"
      - "--entrypoints.websecure.address=:443"
      - "--entrypoints.web.http.redirections.entrypoint.to=websecure"
      - "--entrypoints.web.http.redirections.entrypoint.scheme=https"
      - "--certificatesresolvers.myresolver.acme.dnschallenge=true"
      - "--certificatesresolvers.myresolver.acme.dnschallenge.provider=digitalocean"
      #- "--certificatesresolvers.myresolver.acme.caserver=https://acme-staging-v02.api.letsencrypt.org/directory"
      - "--certificatesresolvers.myresolver.acme.email=support@hikaya.io"
      - "--certificatesresolvers.myresolver.acme.storage=/letsencrypt/acme.json"
    env_file: .env.traefik
    ports:
      - "80:80"
      - "443:443"
      - "8080:8080"
    volumes:
      - "./letsencrypt:/letsencrypt"
      - "/var/run/docker.sock:/var/run/docker.sock:ro"
  api:
    restart: always
    image: registry.digitalocean.com/hikaya/dots-backend:0.2.6
    container_name: "api"
    ports:
      - '8000:8000'
    env_file: .env.docker-compose
    depends_on:
      - redis
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.api.rule=Host(`dots-be.hikaya.app`)"
      - "traefik.http.routers.api.entrypoints=websecure"
      - "traefik.http.routers.api.tls.certresolver=myresolver"
      - "traefik.http.routers.api.tls=true"
      - "traefik.http.middlewares.testheader.headers.accesscontrolallowmethods=*"
      - "traefik.http.middlewares.testheader.headers.accesscontrolallowheaders=*"
      - "traefik.http.middlewares.testheader.headers.accesscontrolalloworiginlist=*"
  redis:
    restart: always
    image: redis:6-alpine
    expose:
    - '6379'
  celery:
    restart: always
    image: registry.digitalocean.com/hikaya/dots-backend:0.2.5.1
    container_name: "worker"
    env_file: .env.docker-compose
    entrypoint: ./worker.sh
    depends_on:
      - redis
```

#### ~/.docker > config.json
```
{
	"auths": {
		"registry.digitalocean.com": {
			"auth": "XXXX"
		}
	}
}
```
</details>

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
