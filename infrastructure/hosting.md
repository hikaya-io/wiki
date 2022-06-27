## Hosting resources

Hikaya uses [DigitalOcean (DO)](https://cloud.digitalocean.com/) as the main hosting provider.

### Domains

DO is used to manage the following domains:

- `hikaya.app`: This is used for all production-level applications
- `hikaya.dev`: This is used for all development environments.
- `hikaya.io`: This is used for client-specific applications. [Google Domains](https://domains.google.com/) is currently used to manage this domain.

#### Domains not currently used

- `hikaya.co`

### Droplets

#### Client-related

- `hikaya-airflow`: This is the airflow instance used for LWF integrations.
- `hikaya-lwf`: This is the Superset instance used for LWF dashboards.
- `ona-airflow-mongodb`: This is the MongoDB instance that stores the data that `hikaya-airflow` processes.
- `lwf-ftp`: This is the FTP server used to store the exported Newdea DB. This is also where the Newdea DB is restored to MSSQL.
- `lwf-ubuntu-development`: Ubuntu based droplet for LWF CO/VN for development purposes

#### Hikaya-related

- `dots-superset`
- `vault`: This is a production instance for managing secrets. It is currently implemented to be used by the `Activity` (dev and production) applications.

### Managed Databases

**Dots**

- `dots-production` (inlcudes primary + standby)
- `dots-backend-dev`

**Activity**

- `activity-db-prod`
- `activity-dev`

**Client-related**

- `hikaya-postgres-db`
- `lwf-uganda`
- `lwf-vnco-db-mysql`: MySQL database for LWF CO/VN

### Object storage

Hikaya is using [DigitalOcean spaces](https://developers.digitalocean.com/documentation/spaces/), which is an AWS S3 compatible object storage service that lets you store and serve large amount of data. A `space` = an `S3 bucket`.

- We have an allocation of 250 GB for our DO space.
- There is a built-in Spaces CDN that minimizes page load times, improves performance, and reduces bandwidth and infrastructure costs.
