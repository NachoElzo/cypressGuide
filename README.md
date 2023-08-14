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

 # Plugins
 ### drag & drop
 https://github.com/4teamwork/cypress-drag-drop
 npm install --save-dev @4tw/cypress-drag-drop

 ### file upload
 https://www.npmjs.com/package/cypress-file-upload
 npm install --save-dev cypress-file-upload

 ### cypress real events (hover, swippe, type, etc, touch)
 https://github.com/dmtrKovalenko/cypress-real-events
  npm install cypress-real-events

### aplitools eyes cypress (ia visual issues)
https://www.npmjs.com/package/@applitools/eyes-cypress
npm i -D @applitools/eyes-cypress
### for set-up pluggin
npx eyes-setup 