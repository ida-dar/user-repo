# user-repo

It is a simple web app listing any GitHub user public repositories. To search for user's repos enter their GitHub username in a form visible after starting the development mode (<a href='#getting-started'>see instructions below</a>). Repositories are sorted by their number of stars or alphabetically if the star number is equal. By clicking on repo's name you will be redirected to its source code on GitHub.
<br><br>
The application works in the most common browsers such as Chrome / Firefox / Safari.

## Deployed version
You may find deployed version of the app [here](https://user-repo.herokuapp.com/).
</br>
However, if you find any problems with accessing the app or any typo please do not hesitate to contact me.

## Used technologies

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

- React - version: 17.0
- React Redux - version: 4.1
- Bootstrap - version: 5.1
- Enzyme - version: 3.11

For front-end design I used [particles-bg](https://github.com/lindelof/particles-bg) - a React particles animation background component and [power-mode-input](https://github.com/lindelof/power-mode-input) - input box component.
<br>
For fetching user's repositories I used `paginate()` method of [rest.js](https://github.com/octokit/rest.js) - GitHub REST API client for JavaScript.

## Getting Started

#### Requirements:
- node : 14.x.x or above 
- npm : 6.x.x or above

#### Clone this repo:
`git clone https://github.com/ida-dar/user-repo.git`

#### Navigate to the root folder and install all dependencies:

- `yarn` or `npm install`

#### Start Development Mode:

- `yarn start` or `npm start`
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- Happy Hacking!

#### Testing

- `yarn test` or `npm run test`
