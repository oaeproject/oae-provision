# OAE provision and deploy instructions
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Foaeproject%2Foae-provision.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Foaeproject%2Foae-provision?ref=badge_shield)


STATUS: Currently only multi-server setup is properly configured. Single-server installation is not.

## Requirements

- Node (tested with 10.15.1)
- Ansible

## Usage

The `esup.yml` file mentioned below is not available publicly. It is specific to ESUP Portail deployment setup.

First, be sure to look at the `hosts` file and make sure you have it adapted to your environment. This includes all the hostnames for staging and production.

However, there are different settings one must adapt for each environment.

For experimental, run `ansible-playbook -i hosts oae.yml --ask-become-pass -v && say "finished deploying"` and it will ask for the sudo password. The `say` command is optional, of course.

For staging, use the correspondent configuration setup file. In the case that file is `esup.yml`, then run the following:

```
ansible-playbook -i hosts esup.yml --ask-become-pass && say "finished deploying"
```

if you want to run ansible with a specific user

```
ansible-playbook -i hosts esup.yml --ask-become-pass --user oae && say "finished deploying"
```

If you want to run just a specific set of tasks, use tags like this:

```
ansible-playbook -i hosts esup.yml --ask-become-pass --tags=cassandra && say "finished deploying"
```

Check out the tags on the config file (such as `esup.yml`).

## Before you deploy

Make sure all the variables in the `/roles/_EVERY_SERVER_/vars/` are accurate. For example:

In `esup.yml` you'll find variables such as `create_cert: false` that controls whether to create an SSL cert for nginx after install or `create_nfs_mount: false` that creates the nfs mount for 3akai-ux and Hilary to share files. You probably just need both these variables set the first time. The same is valid for the variable `create_nfs_mount`, which is supposed to be a first-time only setting.

Sometimes you'll see this too:

```
- hosts: esup-cache
  vars:
    - production: true
  roles:
  ...
```

Don't forget to change this as well. The `production` flag often means that you're setting up a multi-server environment. For elasticsearch and redis that means that we're making them exposed the remote connections by adding special configuration on the fly.

All in all, make sure you understand and review every variable in every `vars/main.yml` file before using this.

## Upgrading node

If you need to update the node version on the hilaryX target machines, follow this:

```
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs
```

This works for node 12, but you can check the instructions for other versions [here](https://github.com/nodesource/distributions/blob/master/README.md)

## Bugs and missing features

There is this one issue with PM2 currently preventing from using cluster mode with ESM (link [here](https://github.com/standard-things/esm/issues/861)). For now we need to use fork mode or just one instance.


## License
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Foaeproject%2Foae-provision.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Foaeproject%2Foae-provision?ref=badge_large)