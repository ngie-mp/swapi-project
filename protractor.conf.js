exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: 'http://localhost:8080/app',
  capabilities: {
  'browserName': 'chrome'
  },
  specs: ['e2e/app_test.js']
};
