const { config } = require('./wdio.shared.conf');
config.hostname= 'localhost';
config.port=4444;
config.path= '/wd/hub';
config.capabilities= [{
         maxInstances: 5,
         browserName: 'chrome',
         acceptInsecureCerts : true,
        },
         {
          maxInstances: 5,
          browserName: 'firefox'
        },
];
exports.config = config;
