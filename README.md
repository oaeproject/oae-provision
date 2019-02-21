# OAE provision and deploy instructions

## Requirements

- Node (tested with 10.15.1)
- Ansible

## Usage

First, be sure to look at the `hosts` file and make sure you have it adapted to your environment.

Then, run `ansible-playbook -i hosts oae.yml --ask-become-pass -v && say "finished deploying"` and it will ask for the sudo password. The `say` command is optional, of course.
