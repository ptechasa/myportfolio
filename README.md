# Pananart's Portfolio

## Creating a React App:
1. Setting up the boilerplate application: Open up terminal and run 
```
npm install -g create-react-app 
```
2. Navigate to the parent directory that you would like to place the application within.<br />
Then, run `create-react-app` with the name of your project.<br /> 
*npm naming restrictions: name can no longer contain capital letters*
```
create-react-app myportfolio
```
3. After setting up completely, we'll begin by typing:
```
cd myportfolio
npm start
```
It will start the React App Development Server. It should auto-open a tab in your browser that points to [http://localhost:3000](http://localhost:3000)

## Deploying a React App to your GitHub Pages
1. Go to your GitHub Account and click `New repository` at the upper-right corner of page.<br />
2. On Repository name: `myportfolio`. Fill your `<project name>` in the box.
3. Navigate to the parent directory of your project.<br />
Open up terminal and typing:
```
git init
git add .
git commit -m "initial files"
git remote add origin git@github.com:ptechasa/myportfolio.git
git push origin master
```
Once deploying successfully, it will show your repository name on Github.
```
To https://github.com/ptechasa/myportfolio.git
 * [new branch]      master -> master
 ```






This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
