# Migrate DigitalOcean resources

How to migrate DigitalOcean resources to a different account.
This is useful for handing out a client's resources to them

## Droplets

Use droplet snapshots

1. Connect as a shared user between the `client` and `hikaya` DigitalOcean account
2. Turn off the droplet. This ensures all data is written to disk
3. Create a snapshot
4. Transfer the snapshot it to `client` team
5. Recreate a Digitalocean droplet using the snapshot
6. Test access to the new droplet and make sure it works the same way as the old one

[DigitalOcean Snapshots pricing](https://docs.digitalocean.com/products/images/snapshots/#plans-and-pricing)