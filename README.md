# Pod Tracking

![Now this is podracing](https://i.makeagif.com/media/6-21-2014/ozc7Hm.gif)

**_"Now THIS is Pod Tracking"_**

## Introduction

Welcome to the web repository of Pod Tracking! Pod Tracking is a application that allows Magic The Gathering players to track their group's game history, game and player statistics, and eventually, deck statistics. This repository houses the codebase for our backend services, crafted using Python and the Django REST framework.

---

## Table of Contents

- [Introduction](#introduction)
- [Table of Contents](#table-of-contents)
- [Directory](#directory)
- [Tech Stack](#tech-stack)
- [Project Prerequisites](#project-prerequisites)
- [Getting Started](#getting-started)

---

## Directory

[Hosted Website]()

[Hosted Server]()

## Tech Stack

<a href="https://www.typescriptlang.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" height="50" /></a>
<a href="https://react.dev/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" height="50" /></a>
<a href="https://tailwindcss.com/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" height="50" /></a>

- **TypeScript:** Our primary programming language offering explicit types for organization and scalability
- **React:** Used for building complex web applications through the use of smaller components
- **Tailwind CSS:** A utility-first CSS framework that offers a developer-friendly experience when styling UI

---

## Project Prerequisites

1. Set up [NVM](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)
2. If using [VS Code](https://code.visualstudio.com/), download the following extensions:
   - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
     - Used for auto formatting your code according to the project's formatting standards
   - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
     - Allows you to see linting errors/warnings within VS Code
   - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
     - Shows tailwind css class suggestions

Once you've downloaded the extensions listed above, you'll need to configure some settings within VS Code in order for the Prettier and Tailwind CSS IntelliSense extensions to work properly.

### Prettier Settings

If you want to auto-format on save, go into the VS Code settings and search for `Format On Save`. Make sure this is **enabled**. This will format your files according to the project's prettier settings (specified in the `.prettierrc` file) every time you manually save the file.

### Tailwind CSS Settings

1. In the VS Code settings, search for `Files: Associations`. Click on the `Add Item` button and input `*.css` for the `key` and `tailwindcss` for the `value`.
   - This allows tailwind to work within our CSS files.
2. In the VS Code settings, search for `Editor: Quick Suggestions`. Hover over the `strings` row and click on the edit button (pencil icon). Select the `on` option.
   - This allows for auto-complete within `className` strings, which allows the Tailwind CSS IntelliSense extension to show you tailwind class names.

## Getting Started

Clone the repository:

```
git clone git@github.com:Pod-Tracking/pod-tracking-web.git
```

Install/use the correct node version:

```
nvm use
```

**NOTE:** If you don't have the node version specified in the `.nvmrc` file, this command will install it and start using it. If you already have the correct version installed, NVM will switch to that node version.

Install node modules:

```
npm i
```

Run the project locally:

```
npm run dev
```
