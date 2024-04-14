# [Top Coins](https://top-coins-9695f.web.app/)
### Click for [Demo Website](https://top-coins-9695f.web.app/)

### Screenshots

#### Home Page
<img width="1512" alt="top" src="https://github.com/sawsanamer/Top-Coins/assets/71269773/2054082e-c69b-4213-a1a1-a393b27b5c4f">

#### Coin Details Page (Appears when you click on any coin in Home Page - BTC 1 week)

<img width="1457" alt="Coin details page 2" src="https://github.com/sawsanamer/Top-Coins/assets/71269773/272c0237-b8da-46e2-9593-e24b368f1a52">

#### Coin Details Page (ETH 1 year)
<img width="1465" alt="Screenshot 2024-04-14 at 9 07 28 PM" src="https://github.com/sawsanamer/Top-Coins/assets/71269773/4dfdf3cb-5753-41b3-9f5b-7fbde44dd3fb">

### App Architecture
![top-coins-archi](https://github.com/sawsanamer/Top-Coins/assets/71269773/1c9c72da-0fbb-4792-99a6-f7a43802d3ad)

### Views
![views](https://github.com/sawsanamer/Top-Coins/assets/71269773/25485e50-fe5e-403e-9147-52a81dc7fb9c)

## Overview of how it works
The application's controller sends a connection request to the WebSocket middleware, hence, establishing and configuring the WebSocket along with its event listeners. The middleware dispatches updates containing the latest coin values. Components such as CoinHeader and CoinTable re-render in response to these updates, ensuring real-time display accuracy.

CoinHeader leverages server state management via useQuery (hook provided by react-query's library) to maintain the initialPrice, showcasing it until the WebSocket dispatches the first value. Similarly, CoinTableRow utilizes react-query's initialPrice state. Additionally, the application executes an API call to retrieve historical chart data using useQuery as well. Once the controller unmounts, it sends a request to the middleware to disconnect, closing up the WebSocket. 


## Packages Used

### 1. React-Query
I chose this for handling server-side state caching and management. For example, when a user visits the CoinDetailsPage, they'll initially see a loading indicator followed by a chart displaying their selected coin's one-day history. If they switch to another chart and then return to the one-day chart, there won't be a loading indicator because the data is cached. Additionally, I used it to access the initialPrice state across multiple components, making server state sharing smoother.

### 2. MUI (Material-UI)
This was a quick pick to ensure a consistent design throughout the app. It allowed me to set up visually appealing user interfaces without spending excessive time on design.

### 3. Redux-Toolkit
I integrated Redux-Toolkit for two main reasons. Firstly, it helped me set up middleware for handling the WebSocket connection, which is crucial for real-time data updates. Secondly, it provided a centralized Redux store, reducing the need for prop drilling and making state management more organized. Another reason for choosing redux-toolkit is, if the requirements change, and the app grows it will always be a bottle neck to share state between siblings, so for example it creates confusion on where to keep context, hence why redux seems like a better option.

### 4. Eslint, Prettier
These tools were essential for maintaining code quality and consistency. They helped catch potential bugs and enforce coding standards, ensuring a cleaner and more robust codebase during development.

### 5. react-chartjs-2
I opted for this package to create interactive charts showcasing historical price changes. 

### 6. react-router-dom
This was chosen to manage routes and navigation within the app. While I considered Next.js, I found that react-router-dom suited the project's needs without adding unnecessary complexity. If the project were to expand significantly in the future, I would consider Next.js for its advanced capabilities, but for now, react-router-dom was the choice.

#### 14-04 Small Update
Update readme file, and set up throttling of websocket updates. 

## How to run the project - by the Create React App team:


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

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

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
