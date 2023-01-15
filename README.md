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

Check more nx commands in `project.json` file placed in each directory.

## Workspace structure

```
apps
├── mobile-app: react-native project
├── mobile-app-e2e: react-native e2e project with detox
└── rest-api: nestjs project
libs
├── data-interface: interface shared between mobile-app and rest-api
├── domain: every (nestjs) domain module stands here
└── design-system: react-native design system for mobile-app
```

## Features

- [X] Authentication
  - [X] OAuth(Sign In with Apple, Kakao)
  - [X] Sign Up (username, email)
  - [X] Keep user signed in 
  - [X] Handle exprired access token
- [ ] Configuration
  - [X] Multiple Environment for Mobile App(development, staging, production)
  - [ ] Multiple Environment for Nest Application(development, staging, production)
- [ ] Deployment
  - [ ] CI with Github Action
  - [ ] Over-the-air update with CodePush
  - [ ] Dockerize
- [ ] Monitoring and Analytics
  - [ ] Sentry
  - [ ] Firebase
