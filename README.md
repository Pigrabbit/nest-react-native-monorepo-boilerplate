# nest-react-native-monorepo

This repository is a boilerplate for nestjs, react-native project which built with [nx](https://nx.dev/).

## Getting started

```bash
$ yarn install
```

### Development in local environment

```
$ yarn nx serve mobile-app
$ yarn nx serve rest-api
```

Check nx commands in `project.json` file placed in each directory.

## Workspace structure

```
apps
├── mobile-app: react-native project
└── rest-api: nestjs project
libs
├── data-interface: interface shared between mobile-app and rest-api
├── abstract: lib of abstracts
├── user-domain: user domain module
├── auth-domain: auth domain module includes passport strategy and guards
└── design-system: react-native design system for mobile-app
```

## Features

Provides basic authentication

- [ ] Sign In with Apple
- [ ] Sign In with Kakao
- [ ] Sign up
- [ ] Keep user signed in
- [ ] Refresh access token when it has been expired

Multiple Environment

Dockerize

