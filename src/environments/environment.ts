// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyABNErFn3jGTiK-nQiathsImEOqOCEw7z4",
    authDomain: "dataweb-vc.firebaseapp.com",
    databaseURL: "https://dataweb-vc.firebaseio.com",
    projectId: "dataweb-vc",
    storageBucket: "dataweb-vc.appspot.com",
    messagingSenderId: "745996272663"
  }
};
