const { defineConfig } = require("cypress")
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      on('task', {downloadFile})
    },
  },
});
