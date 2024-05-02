# Documentation

## Global state management

For this single page app, React built-in useContext should be enough, but for 
demonstration purposes Redux was used, wich may me overkill for this small app, but in general scales good as application grows.

## Project structure

For a small project like this, any file management should be fine, but i opted by 
using a standard management wich scales good if this single page app gets bigger.

Inside src folder we have:

Components: All app components inside are separeted by their use, in this case 
inside we have Tasks folder that contains all task related components and Utils 
are the components that should be usefull in any part of app, sut as Divider and 
Tag components.

Store and Reducers: Responsable for global state management.

Entities: All interfaces for entities should be created inside here, using interfaces 
for entities are great to keep all objects with a standart format thru application.

Hooks: All React custom hooks are here, to make easier to maintain.

Styles: Almost all css files for application components are here, excluding index.css 
that are base css for application, any alteration inside index.css will affect all 
related components.

Tests: Have all aplication test files. 

## External libraries

[Moment](https://momentjs.com/): Great to keep all Dates inside app formated correctly\
[React-Icons](https://react-icons.github.io/react-icons/): Provides very usefull icons to use thru aplication\
[Toastyfy](https://fkhadra.github.io/react-toastify/introduction/): Simple way to notify user\
[Styled-Components](https://styled-components.com/): Simple to modify html default components\
[Redux](https://react-redux.js.org/introduction/getting-started): Used for global state management 

This are all external libraries used, others come with React default app creation

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
