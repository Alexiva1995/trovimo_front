// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: 'https://api.trovimo.com/api',
  auth: {
    domain: 'dev-fjz9g6wl.auth0.com',
    clientId: 'funcAvDRUs0Na4z1fGy0CfksM0IfeJoz',
    redirectUri: window.location.origin,
  },
  mapbox: {
    accessToken: 'pk.eyJ1IjoidXRyZXJhMTY5NSIsImEiOiJja2p5aG5oNHkwZHJ6MnVueHExMDJ2cTRyIn0.lbJZFjWe7qHdW6mJGQZrhw',
    geocodingUrl: 'https://api.mapbox.com/geocoding/v5/mapbox.places/',
    geocodingAccessToken: 'pk.eyJ1Ijoic2VhcmNoLW1hY2hpbmUtdXNlci0xIiwiYSI6ImNrN2Y1Nmp4YjB3aG4zZ253YnJoY21kbzkifQ.JM5ZeqwEEm-Tonrk5wOOMw'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
