# Securing infrastructure

> Implement security policies/measures on infrastructure resources.

Always keep in the back of your mind the following 3 questions:

1. Why are we securing the resource?
2. How much security do we need?
3. How much convenience are we willing to sacrifice for security?

Security almost often comes at the cost of convenience, so make sure to follow security steps depending on the threat level and your use case: securing a development environment for a Proof of Concept would be much different than securing a production environment for a third-party with sensitive data and a large user base.

## Ubuntu droplets

> Make sure to have multiple SSH sessions open, since you might accidentally lock yourself out during these steps.
> Make sure to make backups/copies of sensitive configuration files before editing them

### Updates and upgrades

**Goal:** Ensure the system and installed software is up-to-date

Your first SSH access to the droplet will be as the user `root`. We will want to move away from that as soon as possible, but first, we can execute some standard and safe commands, like updating and upgrading your distribution.

To do so, you can simply run:

- `apt update`: does not install newer versions, but updates the list of available packages and their versions
- `apt upgrade`: actually updates your installed APT packages to newer versions

Since keeping our system up-to-date is a considerable part of keeping our droplet secure, you might want to automate this and have it happen periodically on the background.
This can be achieved using the Linux packages:

- [unattended-upgrades](https://wiki.debian.org/UnattendedUpgrades)
- [apt-listchanges](https://manpages.debian.org/testing/apt-listchanges/apt-listchanges.1.en.html): will be used to monitor the updates and send emails about them

These can be installed using: `sudo apt install unattended-upgrades apt-listchanges`

For details on configuration: [Automatic Security Updates and Alerts](https://github.com/imthenachoman/How-To-Secure-A-Linux-Server#automatic-security-updates-and-alerts)

For `apt-listchanges`, you can configure it through its wizard: `sudo dpkg-reconfigure apt-listchanges`

> Keep in mind that auto-upgrades can cause some of your services to break on the update. So be careful.

#### User accounts

**Goal:** separate concerns and have better logs by creating separate user accounts

When first connecting into the droplet, you will do so as the `root` user.
As a security practice, it is advised to move away as soon as possible from using the `root` user and instead create priviliged users, and use `sudo` only as need be.

Users are given `sudo` privileges if they belong to the `sudo` user group: `usermod -aG sudo <username>`

If you made a user account for a client, make sure to provide them with the credentials and ask them to reset their password by login as their respective user using SSH and executing the command: `passwd`

The new password will have to pass the criterias implemented in the next section.

### Enforcing safe and strong passwords

This is done using the library [libpam-pwquality](https://packages.ubuntu.com/xenial/admin/libpam-pwquality) which can be installed using: `sudo apt install libpam-pwquality`

Next, you need to edit its configuration file in `/etc/pam.d/common-password` to describe the rules to be enforced on new passwords. For an example of the supported rules, please check this [tutorial](https://www.networkworld.com/article/2726217/how-to-enforce-password-complexity-on-linux.html)

Options that you can control are:

- Number of times the user is prompted for a password before returning with error.
- the minimum length of the password
- requirements to have digits, upper/lower case letters, non-alphanumeric characters
- minimum of new characters not in the old password
- maximum number of repeated characters
- allow/refuse passwords with the account's name

### SSH config

**Goal:** Secure the SSH access to the droplet

#### Enforce SSH certificates usage

> TODO

#### Limit SSH usage per users

SSH reads its configuration in the following precedence order:

1. Options specified from the command line
2. Options defined in the `~/.ssh/config`
3. Options defined in the `/etc/ssh/ssh_config`

Most of the following configuration will be applied to `/etc/ssh/sshd_config`

First, lets limit SSH usage to only a handful of users. To do so, create a users group called `sshers`: `sudo groupadd sshusers`
We will configure SSH to only allow connections from the users that belong to the `sshusers` group. This way we can allow/deny a Ubuntu user SSH usage by simply adding/removing from this users group.
This can be done using the `AllowGroups` SSH option in the configuration file as such:

```txt
AllowGroups sshusers
```

#### Grant SSH access to a user

First step of granting SSH access to a Linux users is adding them to the `sshusers` group configured above: `usermod -aG sshusers <username>`

Second, authorize the user's key to
Add authorized_keys file to the home directory of the user and make sure it includes the public key of the user
Make sure to have the proper rights and ownerships of the .ssh directory, its sub-directories and its files

- `sudo chown username:username authorized_keys`

Restart the ssh service for changes to take effect

Once your user has SSH access (make sure to verify that in a separate session), disable `root` SSH access. This can be done in two ways:

- Adjust the SSH config file to: `PermitRootLogin no`
- Remove the root user from the `sshusers` group created before

> SSH password authentication is disabled
> DIsabling X11Forwarding. This is only enabled for using a GUI for a remote server

### Other steps

> WIP Additional steps still to explore depending on the needs

- Iptables
- Firewall
- Root detection
- IPS and IDS

### Self auditing

> WIP scripts/tools to have at-hand in the droplet for self-auditing

<https://github.com/jtesta/ssh-audit/>

### References

- <https://github.com/imthenachoman/How-To-Secure-A-Linux-Server>
- [Awesome Security Hardening](https://github.com/decalage2/awesome-security-hardening)

## Kubernetes clusters

> Please see [kubernetes/security](./kubernetes/security.md)

## Managed databases

> WIP How to secure managed databases
