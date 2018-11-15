// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.feedback')
      .assert.elementPresent('.login')
      .assert.containsText('.card-text', 'To see what\'s inside, log in with Google')
      .assert.elementCount('img', 2)
      .end()
  }
}
