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

### Nice to have VSCode extensions

- Github Copilot Obviously
- Prettier - Code formatter
- ES7+ React/Redux/React-Native snippets
- Prisma
- npm intellisense
- Code Spell Checker
- Polish - Code Spell Checker
- Console Ninja
- Comment Anchors
- Tailwind CSS IntelliSense
- Tailwind Docs
- Tailwind Fold
- Tailwind Config Viewer
- EditorConfig for VS Code
- TabOut
- Template String Converter
