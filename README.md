# Project Name

> Photos module for Zagat.com

## Related Projects

  - https://github.com/the-notorious-f-e-c/zagat-reviews
  - https://github.com/the-notorious-f-e-c/zagat-restaurant-info
  - https://github.com/the-notorious-f-e-c/zagat-google-reviews

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> npm run seed to seed database (initial)
> npm run build to compile jsx files to one bundle
> npm run start 

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

## API

| Type 	  | Endpoint | Description |
| ------------- | ------------- | ------------- |
| GET  | /api/restaurants/:id/photos | get one restaurant and photos |
| POST  | /api/restaurants/:id/photos | post one restaurant and photos |
| PUT | /api/restaurants/:id/photos | update one restaurant and photos |
| DELETE | /api/restaurants/:id/photos | delete one restaurant and photos |
