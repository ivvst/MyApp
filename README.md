# MyApp

MyApp is a river cruise ship application built using create-vite-react, react-bootstrap, ant design, and sweetalert. The application allows users to explore a catalog of river cruise ships. Guests can access the catalog page and read more about each ship. Logged-in users have additional features such as viewing ship galleries with detailed information for each room and the ability to add reviews for each ship. Ship owners can edit and delete their own ship details.
## SoftUni Practice Server

This application interacts with the [SoftUni Practice Server](https://github.com/softuni-practice-server/softuni-practice-server)

## Installation

To install the application, follow these steps:

1. Clone the repository.
2. Navigate to the client folder.
3. Run `npm install` to install the necessary dependencies.

## Usage

To use the application, follow these steps:

1. Navigate to the client folder.
2. Run `npm start` to start the client application.
3. Navigate to the server folder.
4. Run `node server.js` to start the server application.

## Features

MyApp offers the following features:

- **Catalog**: Explore a catalog of river cruise ships.
- **Detail Page**: View detailed information about each ship.
- **Review Section**: Users can add reviews for each ship.
- **User Authentication and Registration**: Secure user accounts and registration.
- **Owner Functionality**: Ship owners can edit and delete their own ship details.

## Architecture

The entire application is wrapped in a context wrapper component (AuthContext), providing data to the components. The application utilizes services for authentication and CRUD operations, along with a requester to build requests. Custom hooks, such as useForm for controlling forms and usePersistedState for persisting user sessions, enhance functionality.

## Components

In the MyApp application, components are modular building blocks that encapsulate UI elements and functionalities. Each component is designed to be reusable and focused on a specific task. Examples include ship items, review forms, and navigation bars. This modular approach enhances code maintainability and readability.

## Context

The application utilizes a context wrapper component, specifically AuthContext, to manage and provide global state data to various components. This context enables the sharing of user authentication information, ensuring a consistent user experience throughout the application. This centralized state management simplifies data flow and reduces the need for prop drilling.

## Services

Services in MyApp handle specific functionalities, such as authentication and CRUD operations. For instance, the shipService manages interactions with the server related to ship data, providing a clean and organized way to handle data retrieval, creation, updating, and deletion. This service-oriented architecture promotes code separation and reusability.

## Custom Hooks

The application employs several custom hooks to enhance functionality:

### `useForm`

`useForm` is a versatile hook tailored for controlling forms throughout the application. It offers features for form input validation, handling form submissions, and resetting form data. This hook simplifies the complex logic associated with forms, promoting cleaner and more maintainable code.

### `usePersistedState`

`usePersistedState` is crucial for maintaining user sessions persistently between page reloads. This hook leverages local storage to store and retrieve data, ensuring a seamless user experience even after refreshing the page. By encapsulating this behavior, the hook promotes code reusability and consistency.

## Route Guards
Route guards prevent guest users from accessing private user pages, ensuring that only authenticated users can access restricted content.Futhermore  this ensures that only authorized ship owners can perform actions such as editing or deleting their ship details.


## Request
The application uses a request to build requests.


### License
MyApp is open-source software released under the [MIT License](https://opensource.org/licenses/MIT).

For more details, please refer to the [MIT License](https://opensource.org/licenses/MIT) documentation.
