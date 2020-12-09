# Secure Sockets Layer (SSL)

Our Certificate Authority (CA) of choice is [Let's Encrypt](https://letsencrypt.org/).

Let's Encrypt provides a client software called [Certbot](https://www.google.com/search?channel=fs&client=ubuntu&q=certbot) that automates most of the setup/renewal steps.

Most common use cases call for a domain/subdomain when using SSL, but it is possible to setup SSL for a public IP address although it is not recommended.
The Let's Encrypt CA doesn't support issuing certificates to IPs, so if for some reason you wish to have SSL on a public IP, we will need to think of a different CA authority.

For such a case, we can opt for a self-signed certificate, but this will result in a security warning in most browsers, since it expects it to be signed
by a Certificate Authority that it recognizes. This option is only suitable for internal use.

## Prerequisites

- A registered domain name purchased from a domain registrar. DigitalOcean does not sell domain names currently.

## SSL for droplets

For a DO droplet hosting a web app, it is highly recommended to serve the web app behind a proper web server, such as Nginx or Apache.
Currently, the entire process of obtaining, installing and renewing a certificate with Let's Encrypt is fully automated on both Apache and Nginx.


Adding the domain name to Hikaya's DigitalOcean account in Networking --> Domains
Update the domain registrar to point to DigitalOcean DNS servers


## SSL for K8s clusters
> WIP

## References

- [DNS Quickstart](https://www.digitalocean.com/docs/networking/dns/quickstart/)
- [How to enable the ssl certificate for my droplet IP address discussion on DO community](https://www.digitalocean.com/community/questions/how-to-enable-the-ssl-certificate-for-my-droplet-ip-address)
- [SSL for IP Address discussion on DO community](https://www.digitalocean.com/community/questions/ssl-for-ip-address)

- [How To Secure Nginx with Let's Encrypt on Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-20-04)
- [How To Secure Apache with Let's Encrypt on Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-secure-apache-with-let-s-encrypt-on-ubuntu-20-04)
