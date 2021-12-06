const { config } = require('./wdio.shared.conf');
config.user= process.env.BROWSERSTACK_USERNAME;
config.key= process.env.BROWSERSTACK_ACCESS_KEY;
config.services= ['browserstack'],
config.host= 'hub.browserstack.com';
config.capabilities= [{
    'bstack:options' : {
        "osVersion" : "14",
        "deviceName" : "iPhone 12",
        "realMobile" : "true",
        "local" : "false",
        "userName" : config.user,
        "accessKey" : config.key,
        },
        "browserName" : "iPhone",
}];
exports.config = config;