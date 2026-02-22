# Didigu

A React application built with Create React App.

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Deployment

This app is deployed on Firebase Hosting.

### CI/CD

The project uses GitHub Actions for continuous integration and deployment:

- Push to `main` branch triggers automatic build and deploy to Firebase Hosting
- Tests run before each deployment
- Environment variables (e.g. Formspree) are configured via GitHub Secrets
