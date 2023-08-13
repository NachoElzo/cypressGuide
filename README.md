# Tips
### Unblock proxy to install and run cypress

 "env": {
    "NO_PROXY": "environment.domain.com"
  }

### install mochawesome
 - console inside project: npm install --save-dev mochawesome
 - you will se in package-lock.json mochaawesome dependencies
 - add inside cypress.config.js inside /e2e: reporter: 'mochawesome',

 ### install axe-core for accesibility test
 - console inside project: npm install axe-core --save-dev
 - console inside project: npm install cypress-axe --save-dev