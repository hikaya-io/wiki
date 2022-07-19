# Kubernetes Security

After creating a DO K8s cluster, it comes with one K8s superuser that authenticates through a predefined DO bearer token. This comes with security risks.

1. Enable remote user authentication
2. Authorizing using RBAC
3. Manage permissions using SAs
4. setup Admission Controllers: <https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/>

1. Control access to the K8s API
2. Control access to the Kubelet

### References

- [Recommended Steps to Secure a DigitalOcean Kubernetes Cluster](https://www.digitalocean.com/community/tutorials/recommended-steps-to-secure-a-digitalocean-kubernetes-cluster)
- [Official K8s documentation for securing a Cluster](https://kubernetes.io/docs/tasks/administer-cluster/securing-a-cluster/)
- [Awesome Kubernetes Security](https://github.com/ksoclabs/awesome-kubernetes-security)
