# Cert Manager

To manage our certificates in Kubernetes clusters, we use [CertManager](https://cert-manager.io/).
It can issue certificates from [Let's Encrypt](https://letsencrypt.org/), and ensure they are valid and up to date.

## Cert Manager in Kubernetes

Our preferred installation method is [using the Helm package](https://cert-manager.io/docs/installation/helm/).
Please note that certain K8s Custom Resource Definitions are created during the installation, most notably `Issuer`, `ClusterIssuer`, `Certificate` and `CertificateRequest`.
You can later inspect these K8s resources using the command:

```bash
kubectl get certificate,certificaterequest,issuer,clusterissuer,order -A -o wide
```

The first step of configuration is to create an `Issuer` which will be used to issue certificates.
The main role of the `Issuer`/`ClusterIssuer` is to watch the cluster for `CertificateRequest` resources. It then attempts to provide a signed certificate based on the data inside the `CertificateRequest`.

Here is a Let's Encrypt issuer we are using in production: [Dots Production ClusterIssuer(https://github.com/hikaya-io/k8-cluster/blob/7546271fdd9efc43a720856a36db2b66be5ebcfc/production/cert-manager/cluster-issuer.yaml). Note that this `ClusterIssuer` is provided with authentication credentials into DigitalOcean DNS using the attribute `solvers.dns01.digitalocean`.

## Cert Manager & Nginx Ingress

The main reason we use Cert Manager is to secure the Ingress resources.
For Cert Manager and Nginx Ingress to work in conjunction, Cert manager will be in charge of providing a certificate to Nginx Ingress. The certificate will be stored in a Kubernetes Secret, that the Nginx Ingress will specify under the attribute `tls.secretName`. Here is an example of such value in [Dots Production Nginx Ingress](https://github.com/hikaya-io/k8-deployments/blob/update-regcred-to-use-do/production/dots/backend/release.yaml#L99).

You can read a detailed guide about it [here](https://cert-manager.io/v1.1-docs/usage/ingress/).
