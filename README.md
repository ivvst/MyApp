# MyApp

MyApp is a river cruise ship application built using create-vite-react, react-bootstrap, ant design, and sweetalert. The application allows users to explore a catalog of river cruise ships. Guests can access the catalog page and read more about each ship. Logged-in users have additional features such as viewing ship galleries with detailed information for each room and the ability to add reviews for each ship. Ship owners can edit and delete their own ship details.

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

Custom hooks play a crucial role in extending and optimizing the application's functionality. The application features custom hooks like useForm for handling form control logic and usePersistedState for persisting user sessions between page reloads. These hooks encapsulate complex behaviors into reusable functions, promoting code maintainability and reducing redundancy.

### License

MyApp is open-source software released under the [MIT License](https://opensource.org/licenses/MIT). This license grants users the freedom to use, modify, and distribute the software for both personal and commercial purposes. Users are provided with the software "as is" without any warranty or liability.

For more details, please refer to the [MIT License](https://opensource.org/licenses/MIT) documentation.
