export const environment = {
  production: true,
  apiUrl: 'https://gateway.marvel.com/v1/public/',
  apiKey: '<Your public key here>',
  settings: {
    appErrorPrefix: '[Marvel Comic Library Error] ',
    appTitle: 'Marvel Comic Library',
    version: '1.0.0'
  }
};

toastr.options.timeOut = 1500;