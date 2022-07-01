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

For installing Nginx, check out this [detailed guide](https://kubernetes.github.io/ingress-nginx/deploy/). It covers everything from Helm installation, Kubectl installation to different cloud providers and bare-metal servers.

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
