# OAE provision and deploy instructions

## Requirements

- Node (tested with 10.15.1)
- Ansible

## Usage

First, be sure to look at the `hosts` file and make sure you have it adapted to your environment. This includes all the hostnames for staging and production.

However, there are different settings one must adapt for each environment.

For staging, run `ansible-playbook -i hosts oae.yml --ask-become-pass -v && say "finished deploying"` and it will ask for the sudo password. The `say` command is optional, of course.

For production, use the `esup.yml` file as follows:

```
ansible-playbook -i hosts esup.yml --ask-become-pass -v && say "finished deploying"
```

## Before you deploy

Make sure all the variables in the `/roles/server/vars/` are accurate. For example:

In `roles/nginx/vars/main.yml` you'll find variables such as `create_cert: false` that control whether to create an SSL cert for nginx after install. You just need for the first time.

Sometimes you'll see this too:

```
- hosts: esup-cache
  vars:
    - production: true
  roles:
  ...
  ```

Don't forget to change this as well as the `production` flag often means that you're setting up a multi-server environment. For elasticsearch, rabbitmq and redis that means that we're making them exposed the remote connections by adding special configuration on the fly.

All in all, make sure you understand and review every variable in every `vars/main.yml` file before using this.