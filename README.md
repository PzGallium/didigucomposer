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

## Works Admin

The private `/admin` route lets the authorized Google account manage the works
catalog and upload MP3 recordings without a code deployment.

Authorized administrators:

- `zijia.pan@gmail.com`
- `didi.gu.519@gmail.com`

One-time Firebase setup:

1. Enable Google Authentication.
2. Create the Cloud Firestore database with the ID `media`.
3. Publish `firestore.rules` in Firestore Rules.
4. Publish `storage.rules` in Storage Rules.
5. Open `/admin`, sign in, and import the existing catalog.

New recordings are stored under `recordings/{workId}/` in Firebase Storage.
