# 🌲 Cypress, do Zero à Nuvem ☁️

# cy-data-test

[![main](https://github.com/wlsf82/cy-data-test/actions/workflows/ci.yml/badge.svg)](https://github.com/wlsf82/cy-data-test/actions)

Sample project to demonstrate a `cy.dataTest` Cypress custom command.

## Pre-requirements

It is required to have Node.js and npm installed to run this project.

> I used versions `v18.15.0` and `9.5.0` of Node.js and npm, respectively. I suggest you use the same or later versions.

## Installation

Run `npm install` (or `npm i` for the short version) to install the dev dependencies.

## Tests

> **Note:** Before running the tests, make a copy of the `cypress.env.example.json` file as `cypress.env.json`, which in the real world, you would update with valid credentials.
>
> The `cypress.env.json` file is included on [`.gitignore`](./.gitignore) and you're safe that confidential info won't be versioned.

Run `npm test`  to run the test in headless mode.
Run `npm teste:mobile` to run the test in headless mode and view port 410x860

Or, run `npm run cy:open` to open Cypress in interactive mode.

## Support this project

If you want to support this project, leave a ⭐.

___

Project created with Talking about Test course, Cypress do zero a Nuvem 
