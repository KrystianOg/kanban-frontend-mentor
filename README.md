# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.

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
