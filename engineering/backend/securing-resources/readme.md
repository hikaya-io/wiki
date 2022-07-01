# Securing resources

## Principles

1. Why secure?

2. How much security do we need?
Relative to the threat level
This is a development instance, so the security hardening will be kept minimal, until we better identify the use case(s),
or move to a production environment

3. How much convenience are we willing to sacrifice for security?

## Security steps applied

### Update and upgrade

`sudo apt...`

How to make this into a cronjob


### Automatic updates and upgrades

> Goal: ensure that the updates and upgrades explained above are automated

This can be achieved using the Linux packages:
-  `unattended-upgrades`: 
-  `apt-listchanges`:

These can be installed using: `sudo apt install unattended-upgrades apt-listchanges`

For details on how to configure it: [Automatic Security Updates and Alerts](https://github.com/imthenachoman/How-To-Secure-A-Linux-Server#automatic-security-updates-and-alerts)

For aptlist changes, you can configure it through its wizard: `sudo dpkg-reconfigure apt-listchanges`


### Create a user for the client (and an admin user for Hikaya)

<!-- > Make sure to have multiple SSH sessions open, since you might lock yourself out during these steps -->
> This is about creating users who can sudo and ssh into the server

Two users were created:
- `hikaya`: our administration account
- `lwf`: client's user

Both user have `sudo` priviliges and can connect as the `root` account.

User are given sudo priviliges by adding the user into the `sudo` user group: `usermod -aG sudo username`

`adduser lwf`
Password `lwf2020!`
Add the created user to the sudo group: `usermod -aG sudo lwf`
Require the client to change their password by login as their respective user using SSH and executing: `passwd`
The new password will have to pass the criterias specified in the next section.

### Enforcing safe and strong passwords

This is done using the library `libpam-pwquality` which can be installed using: `sudo apt install libpam-pwquality`
Next, you need to edit its configuration file in `/etc/pam.d/common-password` to describe the rules to be enforced on new passwords. For an example of the supported rules, please check this [tutorial](https://www.networkworld.com/article/2726217/how-to-enforce-password-complexity-on-linux.html)

For our case, the following options were used:

```
# here are the per-package modules (the "Primary" block)
password        requisite                       pam_pwquality.so retry=3 minlen=8 difok=3 ucredit=-1 lcredit=-1 dcredit=-1 ocredit=-1 maxrepeat=5 gecoschec
```

- `retry=3`: prompt user 3 times before returning with error.
- `minlen=8`: the minimum length of the password, factoring in any credits (or debits) from these:
- `dcredit=-1`: must have at least one digit
- `ucredit=-1`: must have at least one upper case letter
- `lcredit=-1`: must have at least one lower case letter
- `ocredit=-1`: must have at least one non-alphanumeric character
- `difok=3`: at least 3 characters from the new password cannot have been in the old password
- `maxrepeat=5`: allow a maximum of 5 repeated characters
- `gecoschec`: do not allow passwords with the account's name

### SSH config

Create an `sshers` group of the users that can connect using ssh: `sudo groupadd sshusers`
We will configure SSH to only allow connections from the users in the `sshusers` group.

The configuration file for SSH is located in `/etc/ssh/sshd_config`
We will add the users allowed to SSH to the server into this group, and allow users of this group to ssh by modifying the SSH config file as follows:
 TODO

Add authorized_keys file to the home directory of the user and make sure it includes the public key of the user
Make sure to have the proper rights and ownerships of the .ssh directory, its sub-directories and its files
- `sudo chown username:username authorized_keys`
Restart the ssh service for changes to take effect

Once your user has SSH access (make sure to verify that in a separate session), disable `root` SSH access. This can be done in two ways:

- Adjust the SSH config file to: `PermitRootLogin no`
- Remove the root user from the `sshusers` group created before

> SSH password authentication is disabled

> DIsabling X11Forwarding. This is only enabled for using a GUI for a remote server

## Other steps

- Iptables
- Firewall
- Root detecion
- IPS and IDS

## Self auditing

https://github.com/jtesta/ssh-audit/


## Other todos

1. Identify a time window where cronjobs and system updates can be the least intrusive possible




## Important

the hikaya vs lwf users:
    - they both have the same priviliges
    - They can both login to each others accounts on the console and from SSH
    - Should we disable fully the root login
    - Should we restrict ssh access to the respective users
    - 