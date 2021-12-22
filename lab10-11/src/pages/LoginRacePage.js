const RaceBasePage = require('./RaceBasePage');
const { By, until } = require('selenium-webdriver');


class LoginRacePage extends RaceBasePage {

  #raceLoginUrl = 'https://kpas.ru/user/login/';
  errorMessageElement;
  errorMessage;

  usernameFieldCss = '#edit-name';
  passwordFieldCss = '#edit-pass';
  loginButtonCss = '#edit-submit';
  errorMessageCss = '.messages--error > div';

  constructor(driver) {
    super(driver);
  }

  async waitErrorMessage() {
    return this.driver.wait(until.elementLocated(By.css(this.errorMessageCss)));
  }

  goToLoginPage() {
    this.driver.get(this.#raceLoginUrl);
    this.logger.info('Open login page');
    return this;
  }

  async getErrorMessage() {
    this.errorMessageElement = await this.driver.findElement(By.css(this.errorMessageCss));
    this.errorMessage = await this.errorMessageElement.getText();
    this.logger.info('Get error message');
    return this.errorMessage.split('.')[0].split('\n')[1];
  }

  writeUsername(username) {
    this.driver.findElement(By.css(this.usernameFieldCss)).sendKeys(username);
    this.logger.info('Input username');
    return this;
  }

  writePassword(password) {
    this.driver.findElement(By.css(this.passwordFieldCss)).sendKeys(password);
    this.logger.info('Input password');
    return this;
  }

  enterToAccount() {
    this.driver.findElement(By.css(this.loginButtonCss)).click();
    this.logger.info('Try to log in');
    return this;
  }
}

module.exports = LoginRacePage;
