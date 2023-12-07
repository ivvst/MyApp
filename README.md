MyApp
MyApp is a river cruise ship application built using create-vite-react, react-bootstrap, ant design, and sweetalert2. The application allows users to explore a catalog of river cruise ships. Guests can access the catalog page and read more about each ship. Logged-in users have additional features such as viewing ship galleries with detailed information for each room and the ability to add reviews for each ship. Ship owners can edit and delete their own ship details.

Installation
To install the application, follow these steps:

Clone the repository.
Navigate to the client folder.
Run npm install to install the necessary dependencies.
Usage
To use the application, follow these steps:

Navigate to the client folder.
Run npm start to start the client application.
Navigate to the server folder.
Run node server.js to start the server application.
Features
MyApp offers the following features:

Catalog: Explore a catalog of river cruise ships.
Detail Page: View detailed information about each ship.
Review Section: Users can add reviews for each ship.
User Authentication and Registration: Secure user accounts and registration.
Owner Functionality: Ship owners can edit and delete their own ship details.
Architecture
The entire application is wrapped in a context wrapper component (AuthContext), providing data to the components. The application utilizes services for authentication and CRUD operations, along with a requester to build requests. Custom hooks, such as useForm for controlling forms and usePersistedState for persisting user sessions, enhance functionality.# MyApp
