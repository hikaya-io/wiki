# Access Management

## Updating existing droplets

* As new members join or leave the team the `.ssh/authorized_keys` file need to updated to add/remove their SSH keys. The above table will also be updated with the new member list.
* The `.ssh/authorized_keys` file can be accessed by one of the existing members.

``` bash
ssh root@droplet-ip-address
cd .ssh
# view the keys
cat authorized_keys
# edit the keys
sudo nano authorized_keys
# this opens the file in an editor where you can make necessary changes to the file
# hit control+x and then 'Y' and 'enter' to save the new changes
# then exit the droplet
exit 
```

## New droplets

* Add a new user with sudo

``` bash
adduser jane
id jane

# this will give the user sudo privilege
usermod -aG sudo jane
id jane
```

* Login with the new user and add ssh key of the user

``` bash
ssh root@droplet-ip-address
cd /home/jane
mkdir .ssh
cd .ssh
touch authorized_keys
# save with ctrl + x
sudo nano authorized_keys
# you can see the save key here
cat authorized_keys
```

* Disable root password login

```
# login with new user
ssh jane@droplet-ip-address

#go to config file
sudo nano /etc/ssh/sshd_config

# set the following to 'no'
PermitRootLogin no
PasswordAuthentication no
```

* Reload sshd service

``` bash
sudo systemctl reload sshd
```
