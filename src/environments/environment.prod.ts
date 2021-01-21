export const environment = {
  production: true,
  api: 'https://api.trovimo.com/api',
  auth: {
    domain:'dev-fjz9g6wl.auth0.com',
    clientId:'funcAvDRUs0Na4z1fGy0CfksM0IfeJoz',
    redirectUri: window.location.origin,
  },
  mapbox: {
    accessToken: 'pk.eyJ1IjoidXRyZXJhMTY5NSIsImEiOiJja2p5aG5oNHkwZHJ6MnVueHExMDJ2cTRyIn0.lbJZFjWe7qHdW6mJGQZrhw',
    geocodingUrl: 'https://api.mapbox.com/geocoding/v5/mapbox.places/',
    geocodingAccessToken: 'pk.eyJ1Ijoic2VhcmNoLW1hY2hpbmUtdXNlci0xIiwiYSI6ImNrN2Y1Nmp4YjB3aG4zZ253YnJoY21kbzkifQ.JM5ZeqwEEm-Tonrk5wOOMw'
  }
};
