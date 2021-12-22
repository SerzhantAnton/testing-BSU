const assert = require('assert');
const Driver = require('../driver/Driver');
const LoginRacePage = require('../pages/LoginRacePage');
const User = require('../models/User');

describe('Test kpas site', function () {
  let driver;
  let loginRacePage;

  beforeEach(async function () {
    driver = await Driver.getDriver();
    loginRacePage = new LoginRacePage(driver);
  });

  afterEach(async function () {
    await Driver.closeDriver();
  });

  it('Should get error when login with invalid credentials', async function() {
    const user = new User({});

      loginRacePage
        .goToLoginPage()
        .writeUsername(user.getUsername())
        .writePassword(user.getPassword())
        .enterToAccount();

      await loginRacePage.waitErrorMessage();

      const errorMessage = await loginRacePage.getErrorMessage();

      assert.strictEqual(errorMessage, 'Неизвестное имя или пароль');
  });
})
