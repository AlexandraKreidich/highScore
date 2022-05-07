## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Comments

### Tests

1- Generator.test.js
2- RecordsTable.test.js

I chose to test how table and generator work because these are the main parts of the application, and I see the most importance of being able to generate correct value in provided margins and being able to see results. It was a hard choice though as I see api calls and ways of showing errors equally important. I'd say that 2 tests is too little even for the test application

### Validation of maximum number of clicks

I decided to show the number of clicks left rather than just reset the score to 0 on every 10th click. I think that in terms of a game it is better to see the number of clicks you have left. On the other hand user can not reset score and need to submit it to be able to play more. However, I believe, that automatic reset will be not intuitively clear for people. In that case it is probably better to add reset on 10th click AND notification of clicks left.