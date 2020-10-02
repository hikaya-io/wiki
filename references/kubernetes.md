### Kubernetes

Hikaya uses [DigitalOcean Kubernetes (DOKS)](https://www.digitalocean.com/docs/kubernetes/), a managed Kubernetes service that lets you deploy Kubernetes clusters without the complexities of handling the control plane and containerized infrastructure. 

DigitalOcean Kubernetes provides administrator access to the cluster and full access to the Kubernetes API with no restrictions on which API objects you can create. We manage key services and settings on your behalf that you cannot or should not modify. Clusters are compatible with standard Kubernetes toolchains and integrate natively with DigitalOcean Load Balancers and block storage volumes.

- `Nodes` are built on Droplets. The master node is fully managed by DigitalOcean and included at no cost. Worker nodes are charged at the same rate as Droplets. Both Basic and CPU-Optimized Droplet plans are available for worker nodes.

- Integration with DigitalOcean `Load Balancers` is charged at the same rate as DigitalOcean Load Balancers.

- Integration with `block storage` volumes is charged at the same rate as volumes.

**Activity**
- `activity-production`
- `activity-dev`

**Dots**
Production
- `dots-production`
- `dots-mongo-production`

Dev
- `dots-backend-dev`
