# React ethereal boilerplate
Super lightweight React starter kit

## Table of Contents
- [The content of React ethereal boilerplate](#the-content-of-react-ethereal-boilerplate)
- [Quick start](#quick-start)
- [Improved folder Structure](#improved-folder-structure)
- [Available Scripts](#available-scripts)
- [Table of Contents for react-scripts](
  https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md)

## The content of React ethereal boilerplate
- ES6
- webpack + webpack Dev Server
- React
- Redux
- react-router-dom
- react-router-redux
- redux-saga
- immutable

Plus:
- Eslint (Airbnb JavaScript Style Guide)
- pre-commit syntax checker

## Quick start
**1.** Clone project
```bash
# with SSH
git clone git@github.com:YUzhva/react-ethereal-boilerplate.git NEW_PROJECT_NAME

# with HTTPS
git clone https://github.com/YUzhva/react-ethereal-boilerplate.git NEW_PROJECT_NAME
```

**2.** Go inside project folder `cd NEW_PROJECT_NAME` and edit project name inside `package.json`
```javascript
// change
{
  "name": "react-ethereal-boilerplate",  
}

// to the
{
  "name": "NEW_PROJECT_NAME",  
}
```
Also update SPA DOM id at `/src/index.template.html` and `/src/main.js` to your own.

**3.** Delete .git folder
```bash
# command for Mac/Linux
rm -rf .git

# command for Windows
rmdir .git
```

**4.** Initialize new git
```bash
git init
git add .
git commit -m "[initial commit] NEW_PROJECT_NAME"
```

:beer: Have fun :beer: (=

## Project structure
```
- src
  - components // reusable react components without redux
    * ComponentName
      tests
      index.js // entry point for component

  - containers // react components with redux and redux-saga data fetching
    * ContainerName
      tests
      index.js // entry point for container
      constants/actions/reducer/sagas/selectors.js // place container required files in root

  - global-reducer.js // connect other containers reducers here
  - global-sagas.js // connect other containers sagas here
```

## Available Scripts
In the project directory, you can run:

### `yarn start / npm start`
After starting the server webpack should automatically open next address:
```
http://localhost:8080/
```

### `yarn build / npm build`
Webpack will build all scripts into `./public` folder.

### `yarn lint / npm lint`
You will see all lint errors in the console.
