// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
// Initialize Firebase
  config: {
    apiKey: 'AIzaSyDfreuDP8nIYJkCI8iwMx3Qub9hT1g-6as',
    authDomain: 'geo-app-310ed.firebaseapp.com',
    databaseURL: 'https://geo-app-310ed.firebaseio.com',
    projectId: 'geo-app-310ed',
    storageBucket: '',
    messagingSenderId: '597465994390'
  }
};
