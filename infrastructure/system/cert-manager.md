# Cert Manager

https://cert-manager.io/

Explain Cert Manager use, and how to install it and configure it

## Cert Manager in Kubernetes

Our prefered installation method is [using the Helm package](https://cert-manager.io/v1.1-docs/installation/kubernetes/#installing-with-helm)



Configure an Issuer
    https://cert-manager.io/v1.1-docs/tutorials/acme/ingress/#step-6---configure-lets-encrypt-issuer

The main reason we use Cert Manager is to secure the Ingress resources.
You can read a detailed guide about it [here](https://cert-manager.io/v1.1-docs/usage/ingress/).

All Cert Manager components in a Kubernetes cluster can be inspected using:


### Certificates renewal
