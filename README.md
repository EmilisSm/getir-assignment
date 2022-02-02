# getir-assignment

Application assignment project for Getir

## Table of contents

- [Introduction](#introduction)
- [Technologies](#technologies)
- [Scope of functionalities](#scope-of-functionalities)
- [Project status](#project-status)
- [Installation](#installation)

## Introduction

The aim of this project was to create a product listing web app. Where user could browse through different variety of products, filter and sort them, and add them to the shopping cart.

## Technologies

Technologies and version used in this project.

- React v17.0.2
- Redux v4.1.2
- Typescript v4.5.5
- Webpack v5
- babel v7
- lodash v4.17.21
- eslint v8.7.0
- Prettier v2.5.1
- Emotion (css in js) v11
- MUI component library v5.3.1
- GitHub Pages v3.2.3
- Heroku-app
- json-server

## Scope of functionalities

- Display products from json-server api with pagination
- Ability to add products to Shopping Cart
- Sorting product with pagination

## Project status

I wasn't able to finish completely the project, so there are still parts that would need to be finished implementing.

### Uncountered issues

- I was provided first with wrong design file which had everything exported as one vector. That took me a lot of time figuring out about design implementation for project. Which also led me to use some of MUI components for the project.
- Getting the all of the Brands and Tags from products json.
- Making pagination work with sorting and filtering made things more complicated.

### TBD

- filtering by item Tags & Brands
- filtering by itemType with pagination
- add tests
- refactor to use ReduxSaga instead of redux thunk
- display the loading screen/indicator on the screen between each request
- refactor MUI components to custom ones to get rid of MUI dependency and reduce bundle size

## Installation

To install the project dependencies:

```bash
npm install
```

### Development

To run the project in development mode:

```bash
npm start
```

### Production

To build the project for production:

```bash
npm run build
```

