# Object storage

Hikaya uses [DigitalOcean spaces](https://developers.digitalocean.com/documentation/spaces/), which is an AWS S3 compatible object storage service that lets you store and serve large amount of data.

Spaces have a built-in CDN that minimizes page load times, improves performance, and reduces bandwidth and infrastructure costs.

## Our buckets

- `hikaya`: contains illustrations, logos of Hikaya apps and other static assets used in the website and the blog
- `dots-prod` & `dots-dev`: dedicated to Dots static file. Under the folder `backend`, each directory is dedicated to a workspace and is named by the Workspace ID.