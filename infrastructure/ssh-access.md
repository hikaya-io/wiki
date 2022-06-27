## Access Management

### Droplet list on Digital Ocean
_Updated as of November 03, 2020_
| Droplets|SSH Key list|Primary User|Purpose|
|-|-|-|-|
|[**dots-superset**](https://cloud.digitalocean.com/droplets/182764775)|:white_check_mark: @sannleen: amos njoroge@DESKTOP-DLTRSS2<br><br>:white_check_mark: @sannleen -`docker`: root@05ce6d3d509e<br><br>:white_check_mark: @jassem123: windows@DESKTOP-DT09FKC<br><br>:white_check_mark: @ninetteadhikari: ninetteadhikari@Ninettes-MBP|Hikaya|In house test env;<br> superset/mssql/druid|
|[**hikaya-airflow**](https://cloud.digitalocean.com/droplets/164640880)|:white_check_mark: @sannleen: amos njoroge@DESKTOP-DLTRSS2<br><br>:white_check_mark: @ninetteadhikari: ninetteadhikari@Ninettes-MBP|client|Apache Airflow deployment|
|[**ona-airflow-mongodb**](https://cloud.digitalocean.com/droplets/161249482)|:interrobang: No one has access|||
|[**lwf-ftp**](https://cloud.digitalocean.com/droplets/158077278)|:white_check_mark: @sannleen: amos njoroge@DESKTOP-DLTRSS2<br><br>:white_check_mark: @sannleen -`docker`: root@05ce6d3d509e<br><br>:white_check_mark: @ninetteadhikari: ninetteadhikari@Ninettes-MBP<br><br>:white_check_mark: `hikaya-airflow`-`docker`: root@41e81a55b4d6|client|FTP/SQL Server deployment|
|[**hikaya-lwf**](https://cloud.digitalocean.com/droplets/150447384/graphs?i=a59f89)|:white_check_mark: @sannleen: amos njoroge@DESKTOP-DLTRSS2<br><br>:white_check_mark: @andrewtpham : andrew.tc.pham@gmail.com<br><br>:white_check_mark: @ninetteadhikari: ninetteadhikari@Ninettes-MBP|client|Superset deployment|
|[**lwf-ubuntu-development**](https://cloud.digitalocean.com/droplets/215625509/graphs?i=a59f89)|:interrobang: +TSJVm1qnoil5LC4FCyujJYfeB5CJ unknown<br><br>:interrobang: +YnhST unknown<br><br>:white_check_mark: @TAnas0: bob@bob<br><br>:white_check_mark: @ninetteadhikari: ninetteadhikari@Ninettes-MBP|client|Data collection tool hosting for Colombia|

### Updating existing droplets

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

### New droplets

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
