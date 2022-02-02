# getir-assignment

Application assignment project for Getir

## Table of contents

- [Introduction](#introduction)
- [Technologies](#technologies)
- [Scope of functionalities](#scope-of-functionalities)
- [Project status](#project-status)
- [Installation](#installation)

## Introduction

The aim of this project is to create a product listing web app.

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

- Responsive design on most of screens
- Add products to Shopping Cart.
- Add/Remove product from Shopping Cart.
- Display products from json-server api.
- Product pagination.
- Sorting products with pagination.
- Product type filtering buttons with pagination.

## Project status

Work in progress...

### Encountered issues

- I was provided first with wrong design file which had everything exported as one vector. Which led me to use some of MUI components for the project at first.
- Figuring out how to filter and sort with pagination.
- Filtering by Brands and Tags from products.
- Making pagination work with sorting and filtering made things more complicated.

### TBD

- make another request to get all products (without pagination) to get Brands and Tags.
- filter by selected tags and brands with pagination, sorting and iteType filter.
- add total shopping cart amount to redux state and display it in header.
- filtering by item Tags & Brands.
- add webpack alias to clean up imports.
- add tests.
- refactor to use ReduxSaga instead of redux thunk.
- refactor MUI components to custom ones to get rid of MUI dependency and reduce bundle size.

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
