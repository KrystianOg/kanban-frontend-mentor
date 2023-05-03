# Kanban Board

This is a kanban board application built with React, Typescript, TailwindCSS, and MySQL. ...

## Additional info

### Packages overview

- `cypress` - end-to-end testing
- `jest` - unit testing

### Mysql Local setup

run `yarn mysql` or `docker-compose up -d` to start the mysql container (may require sudo or admin permissions)

run `yarn dbpush:dev` to push migrations to local environment

useful commands:

- `docker ps -a` - list all containers
- `docker stop <container id>` - stop container
- `docker rm <container id>` - remove container
- `docker-compose down` - stop and remove all containers

- `docker exec -it <container id> bash` - open bash in container, then `mysql -u root -p

## Components overview

[//]: # Add components description here

- 'src/components/base/Button' - Button component
- 'src/components/base/Checkbox' - Checkbox component
- 'src/components/base/TextField' - Textfield component
- 'src/components/base/Dropdown' - Dropdown component

We will need this from headless ui

- [ ] Menu
- [ ] Dialog (Modal)
- [ ] Listbox (Select)
- [ ] Combobox (Autocomplete) - if we'd like to add some more functionalities
- [ ] Switch can be used for theme switcher
- [ ] Popover - tooltips or something
- [ ] radio group - (i believe nav menu - but not so sure)

## Routing overview

- / - Home page
- /login - Login page
- /register - Register page
- /forgot-password - Forgot password page
- /reset-password - Reset password page
- /dashboard - Dashboard page
- /dashboard/boards - Boards page
- /dashboard/boards/:id - Board page
- /dashboard/boards/:id/settings - Board settings page (not yet planned)
  ...
