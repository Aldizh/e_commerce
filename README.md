# e-commerce app

A simple e-commerce application built using client side Javascript (React) and Commerce JS. It uses stripe during the user checkout process.

## Available Scripts

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

Uses [react-snapshot](https://www.npmjs.com/package/react-snapshot) to prerender static html

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Libraries and Tools

## Create React App

Learn more on [Create React App](https://facebook.github.io/create-react-app/docs/getting-started).

### Code Splitting

Learn more on [Code Splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

Learn more on [bundle size analysis](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

Learn more on [progressive web apps](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

Learn more on [advanced configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

- Learn more on [deployment](https://facebook.github.io/create-react-app/docs/deployment)

- Heroku deployment using [Create React App BuildPack](https://github.com/mars/create-react-app-buildpack).

- To add this buildpack to existing app

  - ``` heroku buildpacks:set mars/create-react-app ```

- To remove a buildpack from existing app

  - ``` heroku buildpacks:remove mars/create-react-app  ```

- To configure environment variables on heroku
  - ``` heroku config:set GITHUB_USERNAME=joesmith ```

- To deploy your code to the main branch
  - ``` git push heroku main ```

- **Note: make sure you do not push `.env` file to github**