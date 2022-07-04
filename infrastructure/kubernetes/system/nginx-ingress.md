# Nginx

Nginx is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.
We mainly use Nginx as a:

- Load Balancer: distributes incoming requests to the APIs behind it
- Reverse Proxy: public entry point and forwards incoming requests to the APIs behind it

Nginx comes with several benefits:

- SSL encryption: performed at the reverse proxy level, instead of in the servers/APIs which can be costly in resources
- [Caching](https://docs.nginx.com/nginx/admin-guide/content-cache/content-caching/)
- Protection from DoS attacks: they can be fended off at the reverse proxy level without hitting the servers

## Installation

For installing Nginx, check out this [detailed guide](https://kubernetes.github.io/ingress-nginx/deploy/). It covers the various ways to do so, from Helm installation, Kubectl installation to different cloud providers and bare-metal servers.

## Nginx in Kubernetes

We are using the [K8s official Ingress Nginx](https://github.com/kubernetes/ingress-nginx/) repository which is well documented [here](https://kubernetes.github.io/ingress-nginx/).
We use the Helm installation, which can be summed up in the following command:

```bash
helm upgrade --install ingress-nginx ingress-nginx \
  --repo https://kubernetes.github.io/ingress-nginx \
  --namespace ingress-nginx --create-namespace
```

As our DevOps best practices dictate, we strongly prefer having such deployment declaratively defined in YAML files and version controlled.

### [Configuration](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/)

Most of Nginx configuration is specified using a [Kubernetes ConfigMap object](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/configmap/).
This includes, but is not limited to: logs formats and levels, timeouts, HTTP headers, SSL, compression...

For an exhaustive list, check out the [Helm package configuration options](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/configmap/#configuration-options).

> TODO configuration of specific apps to be exposed (endpoints)

### Nginx K8s resources

Once installed, a Kubernetes service of type `LoadBalancer` will be created. This service exposes ports `80` and `443`. It also has an external IP address that will be used to configure your domains.

A Kubernetes deployment called the controller will also be created, along with its pods.

> Please note that all of the above is configurable during installation

For each app that Nginx is serving, a Kubernetes `Endpoint` will be created to point to the internal host and port of the app.

### Pitfalls

When updating Nginx, the `LoadBalancer` service will be regenerated, and this means that a new public IP address will be assigned to it.

<!-- TODO explain how to do it without downtime, or with the least downtime possible -->
