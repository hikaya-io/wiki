# Create Infrastructure

> This is a guide on how to supply DigitalOcean resources and the maintenance/security measures to consider.

> We will always suppose that the resource is supplied to a third-party, so few extra-steps, such as creating additional users in a Linux Droplet, will be detailed. If supplying infrastructure, use those extra-steps at your own discretion.

The content will be separated by resource type:
1. Droplet
2. Managed database
3. Kubernetes cluster

## Requirements

- `doctl` installed and configured, if you wish to use the DO CLI

## Droplet

### Create the droplet

Characteristics of a droplet:
- Image: you can use a Linux distribution (Ubuntu, FreeBSD...), a container distribution, a custom image or a preset from the Marketplace (WordPress, LAMP...). Our image of choice will be Ubuntu.
- Shared or dedicated CPU
- Datacenter region: pick depending on the use case and expected users locations
- VPC network
- IPv6 support: enabling IPv6 on a Droplet gives you access to its 16 additional IPv6 addresses. This can be enabled after the droplet's creation.
- Monitoring
- Authentication
- Backups: come at an additional cost of 20% of the droplet's cost

Name your droplet and tag it as you see appropriate

```
```

For example, to create an Ubuntu droplet with ..... :
```
```


## Managed database

## K8s cluster