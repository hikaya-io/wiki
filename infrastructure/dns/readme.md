# DNS

Our main DNS provider is DigitalOcean

If you are new to DNS and wish to gain the basic knowledge to deal with it, please see this [Introduction to DNS Terminology, Components, and Concepts](https://www.digitalocean.com/community/tutorials/an-introduction-to-dns-terminology-components-and-concepts)

The basic terminology to pay attention to is:

- `domain registrar`: a domain name registrar is a business that handles the reservation of domain names as well as the assignment of IP addresses for those domain names (Cloudflare, DigitalOcean, Google...)
- `host`: this can refer to a domain or subdomain
- `FQDN` (Fully Qualified Domain Name): absolute name that specifies a resource's location in relation to the absolute root of the domain name system

For a documentation about [DigitalOcean's DNS offerings](https://docs.digitalocean.com/products/networking/dns/).

## Types of DNS records and their usage

- `TXT`: this is the most basic of all DNS records. Just plain text linked to a domain. This is often used to verify ownership and ensure email security.
- `A` & `AAAA` records: map a host to an IP address
- `CNAME`: alias for a canonical name
- `NS`: define the Name Servers used for this zone

These are the four main DNS records you will encounter while managing Hikaya's infrastructure.

For a thorough list, refer to the [Record Types in Introduction to DNS](https://www.digitalocean.com/community/tutorials/an-introduction-to-dns-terminology-components-and-concepts#record-types) post previously mentioned.

## DNS for Droplets

To bind a droplet's public IP address to a domain name:

- Update the domain registrar to point to DigitalOcean DNS servers (leave this step to last if the domain is already in use to avoid downtime)
- Adding the domain name to Hikaya's DigitalOcean account in Networking --> Domains
- Create a DNS record for the domain: for a droplet, an [A DNS record](https://www.cloudflare.com/learning/dns/dns-records/dns-a-record/) that links the domain/subdomain to the droplet's IP address must be created.

## DNS for Kubernetes clusters

This configuration step comes after setting up the Nginx Ingress. Nginx will create a [Kubernetes Service](https://kubernetes.io/docs/concepts/services-networking/service/) with a public facing IP. The requests going to this address will be reverse proxied to your Kubernetes deployments.
This IP address will need to be linked to a host, especially before setting SSL. Since Cert Manager uses Let's Encrypt, it does [not allow issuing certificate for IP adresses](https://community.letsencrypt.org/t/ssl-on-a-ip-instead-of-domain/90635).
