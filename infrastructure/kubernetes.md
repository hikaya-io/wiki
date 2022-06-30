# Kubernetes

Hikaya uses [DigitalOcean Kubernetes (DOKS)](https://www.digitalocean.com/docs/kubernetes/), a managed Kubernetes service that lets you deploy Kubernetes clusters without the complexities of handling the control plane and containerized infrastructure.

DigitalOcean Kubernetes provides administrator access to the cluster and full access to the Kubernetes API with no restrictions on which API objects you can create. Clusters are compatible with standard Kubernetes toolchains and integrate natively with DigitalOcean Load Balancers and block storage volumes.

- `Nodes` are built on Droplets. The master node is fully managed by DigitalOcean and included at no cost. Worker nodes are charged at the same rate as Droplets. Both Basic and CPU-Optimized Droplet plans are available for worker nodes.

- Integration with DigitalOcean `Load Balancers` is charged at the same rate as DigitalOcean Load Balancers.

- Integration with `block storage` volumes is charged at the same rate as Volumes.

## Activity

- `activity-production`
- `activity-dev`

## Dots

Production

- `dots-production`
- `dots-mongo-production`
- `dots-backend-dev`

## Access

To access our Kubernetes cluster you must have a DigitalOcean Access Token. Alternatively, if you have access to DO Hikaya account, you can manually download the `kubectl` config file from a cluster's page:

```bash
doctl auth init -t <auth_token>
doctl -t <auth_token> 
kubernetes cluster kubeconfig save <name_of_cluster>
```

- The first command lets the Digital Ocean CLI tool authenticate and verify the token
- The second command sets the `kubectl` current context to the one of the cluster needed

[Kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/) helps run interact with the K8s cluster. [Kubectx](https://github.com/ahmetb/kubectx) helps manage different contexts and switch between them without re-authenticating.

For the databases, their credentials can be inspected from the DigitalOcean website.

## Organisation of clusters

Hikaya's Kubernetes clusters are mainly organised into two clusters: `development` and `production` clusters.

These clusters contain multiple deployments, which can be separated into:

- Application deployments: Dots, Activity... and other Hikaya apps
- System deployments: Nginx Ingress, Cert Manager, Sealed Secrets... and other configuration and system components

For dettails informations about the system components, please check out