# React Axios CRUD Application

This is a simple CRUD (Create, Read, Update, Delete) application built with React and Axios. It allows users to create, read, update, and delete data through an API. The application uses Bootstrap for styling and React Router for navigation.

## Features

- Create a new user
- Read and display users
- Update user details
- Delete users
- Form validation
- Toast notifications for success and error messages

## Installation

1. Navigate to the project directory:

   ```bash
   cd react-axios-crud
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

## Running the Application

1. Start the development server:

   ```bash
   npm run dev
   ```

## Project Structure

```bash
├── public
├── src
│ ├── components
│ │ ├── CreateUser.js
│ │ ├── Dashboard.js
│ │ ├── Home.js
│ ├── common
│ │ ├── UserProfile.js
│ ├── utils
│ │ ├── AxiosServise.js
│ │ ├── ApiRoutes.js
│ │ ├──AppRouter.js
│ ├── App.js
│ ├── main.js
│ ├── index.css
├── package.json
└── README.md
```

## API

This project uses a mock API. The base URL for the API is configured in the Axios service.

## Usage

### CreateUser Component

The `CreateUser` component is used to create a new user. It contains a form with various fields such as name, username, email, address, phone, website, and company details. Upon form submission, the data is sent to the API using Axios.

### Dashboard Component

The `Dashboard` component fetches and displays user data in a table format. It allows users to edit and delete user records. The data is fetched from the API using Axios, and the delete action is also handled via Axios.

### Home Component

The `Home` component fetches and displays user data in a card format. It uses the `UserProfile` component to display individual user profiles. The data is fetched from the API using Axios.

## Acknowledgements

- [React](https://reactjs.org/)
- [Axios](https://axios-http.com/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [React Router](https://reactrouter.com/)
- [React Hot Toast](https://react-hot-toast.com/)

# website

- [preview](https://react-axios-blogs.netlify.app/)
